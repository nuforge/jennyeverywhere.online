const DEFAULT_DATABASE_NAME = 'nuForgeDB' // Ensure this matches the name used in IndexedDBManager

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
      const request = indexedDB.open(dbName, 2) // Ensure version is 2

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

      request.onsuccess = () => {
        this.db = request.result
        resolve()
      }
      request.onerror = () => reject(request.error)
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
      const request = store.put(tag)
      request.onerror = (event) => {
        if ((event.target as IDBRequest).error?.name === 'ConstraintError') {
          console.error(`ConstraintError: Key '${tag.id}' already exists in the object store.`)
        }
      }
    }
    await tx.oncomplete
  }

  async addEdges(edges: Edge[] = []): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')
    const tx = this.db.transaction('Edges', 'readwrite')
    const store = tx.objectStore('Edges')
    for (const edge of edges) {
      const request = store.put(edge)
      request.onerror = (event) => {
        if ((event.target as IDBRequest).error?.name === 'ConstraintError') {
          console.error(`ConstraintError: Key '${edge.id}' already exists in the object store.`)
        }
      }
    }
    await tx.oncomplete
  }

  private async openCursor(
    index: IDBIndex,
    query?: IDBKeyRange | IDBValidKey,
  ): Promise<IDBCursorWithValue | null> {
    return new Promise((resolve, reject) => {
      const request = index.openCursor(query)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
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
    console.log('findConnectedTags', tagId)
    if (!this.db) throw new Error('Database not initialized')

    const tx = this.db.transaction(['Edges', 'Tags'], 'readonly')
    const edgesStore = tx.objectStore('Edges')
    const tagsStore = tx.objectStore('Tags')

    const connectedTags: Tag[] = []
    const index = edgesStore.index('from')

    let cursor = await this.openCursor(index, tagId)

    while (cursor) {
      const edge = cursor.value as Edge
      const connectedTag = await new Promise<Tag>((resolve, reject) => {
        const request = tagsStore.get(edge.to)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      })
      connectedTags.push(connectedTag)
      cursor = await this.openCursor(index, tagId)
    }

    return connectedTags
  }

  async findTagsBySpace(space: string): Promise<Tag[]> {
    if (!this.db) throw new Error('Database not initialized')

    const tx = this.db.transaction('Tags', 'readonly')
    const store = tx.objectStore('Tags')
    const index = store.index('space')

    const results: Tag[] = []
    let cursor = await this.openCursor(index, space)

    while (cursor) {
      results.push(cursor.value as Tag)
      cursor = await this.openCursor(index, space)
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
    let cursor = await this.openCursor(index, tagId)

    while (cursor) {
      await edgesStore.delete(cursor.primaryKey)
      cursor = await this.openCursor(index, tagId)
    }

    await new Promise((resolve, reject) => {
      tx.oncomplete = resolve
      tx.onerror = reject
    })
    console.log(`Item and related edges with id ${tagId} removed.`)
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
        const tag = await this.getTagById(tagId)
        if (tag) {
          result.push(tag)
          const connectedTags = await this.findConnectedTags(tagId)
          for (const connectedTag of connectedTags) {
            stack.push(connectedTag.id)
          }
        }
      }
    }

    return result
  }

  private async getTagById(tagId: string): Promise<Tag> {
    if (!this.db) throw new Error('Database not initialized')

    const tx = this.db.transaction('Tags', 'readonly')
    const store = tx.objectStore('Tags')
    return new Promise<Tag>((resolve, reject) => {
      const request = store.get(tagId)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }
}
