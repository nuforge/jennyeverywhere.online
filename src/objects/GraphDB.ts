const dbName = 'GraphDB'
const dbVersion = 1

interface Node {
  id: string
  type: string
  content: string
}

interface Edge {
  id: string
  from: string
  to: string
  type: string
}

async function initGraphDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, dbVersion)
    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result

      // Create object stores for nodes and edges
      db.createObjectStore('Nodes', { keyPath: 'id' })
      const edgesStore = db.createObjectStore('Edges', { keyPath: 'id' })

      // Create indices for edges
      edgesStore.createIndex('from', 'from', { unique: false })
      edgesStore.createIndex('to', 'to', { unique: false })
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

async function addNode(db: IDBDatabase, node: Node) {
  const tx = db.transaction('Nodes', 'readwrite')
  const store = tx.objectStore('Nodes')
  try {
    await store.add(node)
  } catch (error) {
    if ((error as DOMException).name === 'ConstraintError') {
      console.warn(`Node with id ${node.id} already exists.`)
    } else {
      throw error
    }
  }
  await new Promise((resolve, reject) => {
    tx.oncomplete = resolve
    tx.onerror = reject
  })
}

async function addEdge(db: IDBDatabase, edge: Edge) {
  const tx = db.transaction('Edges', 'readwrite')
  const store = tx.objectStore('Edges')
  try {
    await store.add(edge)
  } catch (error) {
    if ((error as DOMException).name === 'ConstraintError') {
      console.warn(`Edge with id ${edge.id} already exists.`)
    } else {
      throw error
    }
  }
  await new Promise((resolve, reject) => {
    tx.oncomplete = resolve
    tx.onerror = reject
  })
}

async function findConnectedNodes(db: IDBDatabase, nodeId: string): Promise<Node[]> {
  const tx = db.transaction(['Edges', 'Nodes'], 'readonly')
  const edgesStore = tx.objectStore('Edges')
  const nodesStore = tx.objectStore('Nodes')

  // Find edges where `from` matches nodeId
  const index = edgesStore.index('from')
  const edges: Edge[] = []
  const connectedNodes: Node[] = []

  const request = index.openCursor(nodeId)
  let cursor: IDBCursorWithValue | null = await new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
  while (cursor) {
    edges.push(cursor.value)
    cursor = await new Promise((resolve, reject) => {
      cursor!.continue()
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }

  // Retrieve target nodes
  for (const edge of edges) {
    const connectedNode = await new Promise<Node>((resolve, reject) => {
      const request = nodesStore.get(edge.to)
      request.onsuccess = () => resolve(request.result as Node)
      request.onerror = () => reject(request.error)
    })
    connectedNodes.push(connectedNode)
  }

  return connectedNodes
}

async function depthFirstSearch(
  db: IDBDatabase,
  startNodeId: string,
  visited = new Set<string>(),
): Promise<string[]> {
  if (visited.has(startNodeId)) return []

  // Mark node as visited
  visited.add(startNodeId)

  // Get connected nodes
  const connectedNodes = await findConnectedNodes(db, startNodeId)

  // Visit each connected node
  for (const node of connectedNodes) {
    await depthFirstSearch(db, node.id, visited)
  }

  return Array.from(visited)
}

export { initGraphDB, addNode, addEdge, findConnectedNodes, depthFirstSearch }
