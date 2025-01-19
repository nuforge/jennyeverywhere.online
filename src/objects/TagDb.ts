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

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result
        resolve()
      }

      request.onerror = (event) => {
        reject((event.target as IDBOpenDBRequest).error)
      }
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
    if (!this.db) throw new Error('Database not initialized')

    const tx = this.db.transaction(['Edges', 'Tags'], 'readonly')
    const edgesStore = tx.objectStore('Edges')
    const tagsStore = tx.objectStore('Tags')

    const connectedTags: Tag[] = []
    const fromIndex = edgesStore.index('from')
    const toIndex = edgesStore.index('to')

    return new Promise((resolve, reject) => {
      const processCursor = async (cursor: IDBCursorWithValue | null, index: IDBIndex) => {
        if (cursor) {
          const edge = cursor.value as Edge
          const connectedTagId = index === fromIndex ? edge.to : edge.from
          try {
            const connectedTag = await new Promise<Tag>((resolve, reject) => {
              const request = tagsStore.get(connectedTagId)
              request.onsuccess = () => resolve(request.result)
              request.onerror = () => reject(request.error)
            })
            connectedTags.push(connectedTag)
          } catch (error) {
            reject(error)
          }
          cursor.continue() // Advance the cursor to the next item
        } else {
          resolve(connectedTags) // Resolve the promise when the cursor is done
        }
      }

      const fromRequest = fromIndex.openCursor(tagId)
      fromRequest.onsuccess = (event) =>
        processCursor((event.target as IDBRequest).result, fromIndex)
      fromRequest.onerror = (event) => reject((event.target as IDBRequest).error)

      const toRequest = toIndex.openCursor(tagId)
      toRequest.onsuccess = (event) => processCursor((event.target as IDBRequest).result, toIndex)
      toRequest.onerror = (event) => reject((event.target as IDBRequest).error)
    })
  }

  async findTagsBySpace(space: string): Promise<Tag[]> {
    if (!this.db) throw new Error('Database not initialized')

    const tx = this.db.transaction('Tags', 'readonly')
    const store = tx.objectStore('Tags')
    const index = store.index('space')

    const results: Tag[] = []

    return new Promise((resolve, reject) => {
      const request = index.openCursor(space)

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result
        if (cursor) {
          results.push(cursor.value as Tag)
          cursor.continue() // Advance the cursor to the next item
        } else {
          resolve(results) // Resolve the promise when the cursor is done
        }
      }

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error)
      }
    })
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
