const DEFAULT_DATABASE_NAME = 'nuForgeDB'

export interface Tag {
  id: string
  space: string
  name: string
}

interface Edge {
  id: string
  from: string
  to: string
  type: string
}

export default class TagDb {
  private db: IDBDatabase | null = null

  async setupDatabase(dbName: string = DEFAULT_DATABASE_NAME): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1)

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result
        if (!db.objectStoreNames.contains('Tags')) {
          const tagStore = db.createObjectStore('Tags', { keyPath: 'id' })
          tagStore.createIndex('space', 'space', { unique: false })
          tagStore.createIndex('name', 'name', { unique: false })
        }
        if (!db.objectStoreNames.contains('Edges')) {
          const edgeStore = db.createObjectStore('Edges', { keyPath: 'id' })
          edgeStore.createIndex('from', 'from', { unique: false })
          edgeStore.createIndex('to', 'to', { unique: false })
        }
      }

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result
        resolve()
      }

      request.onerror = (event) => {
        reject((event.target as IDBOpenDBRequest).error)
      }
    })
  }
  async processCursor<T>(
    index: IDBIndex,
    space: string,
    callback: (tag: T) => void,
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const cursorRequest = index.openCursor(IDBKeyRange.only(space))
      cursorRequest.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest)?.result
        if (cursor) {
          callback(cursor.value)
          cursor.continue()
        } else {
          resolve()
        }
      }
      cursorRequest.onerror = () => reject(new Error('Cursor error'))
    })
  }

  async resetDatabase(dbName: string = DEFAULT_DATABASE_NAME): Promise<void> {
    if (this.db) {
      this.db.close()
    }
    await new Promise((resolve, reject) => {
      const deleteRequest = indexedDB.deleteDatabase(dbName)
      deleteRequest.onsuccess = resolve
      deleteRequest.onerror = reject
    })
    this.db = null
    await this.setupDatabase(dbName)
  }

  async addTags(tags: Tag[] = []): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')
    const tx = this.db.transaction('Tags', 'readwrite')
    const store = tx.objectStore('Tags')
    for (const tag of tags) {
      store.put(tag) // Use put instead of add
    }
    await tx.oncomplete
  }

  async addEdges(edges: Edge[] = []): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')
    const tx = this.db.transaction('Edges', 'readwrite')
    const store = tx.objectStore('Edges')
    for (const edge of edges) {
      store.put(edge) // Use put instead of add
    }
    await tx.oncomplete
  }

  async getAllTags(): Promise<Tag[]> {
    return new Promise((resolve, reject) => {
      if (!this.db) throw new Error('Database not initialized')
      const transaction = this.db.transaction('Tags', 'readonly')
      const store = transaction.objectStore('Tags')
      const request = store.getAll()

      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result as Tag[])
      }

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error)
      }
    })
  }

  async findConnectedTags(tagId: string): Promise<Tag[]> {
    if (!this.db) throw new Error('Database not initialized')

    const tx = this.db.transaction(['Edges', 'Tags'], 'readonly')
    const edgesStore = tx.objectStore('Edges')
    const tagsStore = tx.objectStore('Tags')

    const connectedTags: Tag[] = []
    const processedEdges = new Set<string>() // To avoid processing duplicate edges
    const fromIndex = edgesStore.index('from')
    const toIndex = edgesStore.index('to')

    const processEdge = async (edge: Edge) => {
      const edgeKey = `${edge.from}-${edge.to}-${edge.type}`
      if (!processedEdges.has(edgeKey)) {
        processedEdges.add(edgeKey)
        const connectedTagId = edge.from === tagId ? edge.to : edge.from

        try {
          const connectedTag = await new Promise<Tag>((resolve, reject) => {
            const request = tagsStore.get(connectedTagId)
            request.onsuccess = () => resolve(request.result)
            request.onerror = () => reject(request.error)
          })
          connectedTags.push(connectedTag)
        } catch (error) {
          throw error
        }
      }
    }

    await Promise.all([
      this.processCursor<Edge>(fromIndex, tagId, processEdge),
      this.processCursor<Edge>(toIndex, tagId, processEdge),
    ])

    return connectedTags
  }

  async findTagsBySpace(space: string): Promise<Tag[]> {
    if (!this.db) throw new Error('Database not initialized')

    const tx = this.db.transaction('Tags', 'readonly')
    const store = tx.objectStore('Tags')
    const index = store.index('space')

    const results: Tag[] = []

    try {
      await this.processCursor<Tag>(index, space, (tag) => {
        results.push(tag)
      })
    } catch (error) {
      console.error('Error processing cursor in findTagsBySpace:', error)
    }

    return results
  }

  async removeTagAndEdges(tagId: string): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')

    const tx = this.db.transaction(['Tags', 'Edges'], 'readwrite')
    const tagsStore = tx.objectStore('Tags')
    const edgesStore = tx.objectStore('Edges')

    await tagsStore.delete(tagId)

    const index = edgesStore.index('from')

    return new Promise((resolve, reject) => {
      const request = index.openCursor(tagId)

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result
        if (cursor) {
          edgesStore.delete(cursor.primaryKey)
          cursor.continue() // Advance the cursor to the next item
        } else {
          resolve()
        }
      }

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error)
      }
    })
  }

  async depthFirstSearch(startTagId: string): Promise<Tag[]> {
    if (!this.db) throw new Error('Database not initialized')

    const visited = new Set<string>()
    const stack = [startTagId]
    const result: Tag[] = []

    while (stack.length > 0) {
      const tagId = stack.pop()!
      if (!visited.has(tagId)) {
        visited.add(tagId)
        try {
          const tag = await this.getTagById(tagId)
          result.push(tag)
          const connectedTags = await this.findConnectedTags(tagId)
          for (const connectedTag of connectedTags) {
            if (!visited.has(connectedTag.id)) {
              stack.push(connectedTag.id)
            }
          }
        } catch (error) {
          console.error('Error processing tag or connected tags:', error)
        }
      }
    }

    return result
  }

  private async getTagById(tagId: string): Promise<Tag> {
    if (!this.db) throw new Error('Database not initialized')

    console.log(`Getting tag with id: ${tagId}`)
    const tx = this.db.transaction('Tags', 'readonly')
    const store = tx.objectStore('Tags')
    return new Promise<Tag>((resolve, reject) => {
      const request = store.get(tagId)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }
}
