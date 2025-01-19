import type { Item } from '@/types/Item'
import { v4 as uuidv4 } from 'uuid'

class IndexedDBManager {
  private _dbName: string
  private _storeName: string
  private _db: IDBDatabase | null = null

  constructor(_dbName: string, _storeName: string) {
    this._dbName = _dbName
    this._storeName = _storeName
  }

  async resetDatabase(): Promise<void> {
    if (this._db) {
      this._db.close()
    }
    await new Promise((resolve, reject) => {
      const deleteRequest = indexedDB.deleteDatabase(this._dbName)
      deleteRequest.onsuccess = resolve
      deleteRequest.onerror = reject
    })
    this._db = null
    await this.openDB()
  }

  private async openDB(): Promise<IDBDatabase> {
    if (this._db) return this._db

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this._dbName, 2) // Ensure version is 2

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result
        if (!db.objectStoreNames.contains(this._storeName)) {
          db.createObjectStore(this._storeName, { keyPath: 'id' })
        }
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
        this._db = (event.target as IDBOpenDBRequest).result
        resolve(this._db)
      }

      request.onerror = (event) => {
        reject((event.target as IDBOpenDBRequest).error)
      }
    })
  }

  async addItem(item: Item): Promise<string> {
    const db = await this.openDB()
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this._storeName, 'readwrite')
      const store = transaction.objectStore(this._storeName)
      if (!item.id) {
        item.id = uuidv4()
      }
      const request = store.put(item)
      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result as string)
      }

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error)
      }
    })
  }

  async getItem(id: string): Promise<Item | undefined> {
    const db = await this.openDB()
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this._storeName, 'readonly')
      const store = transaction.objectStore(this._storeName)
      const request = store.get(id)

      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result as Item)
      }

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error)
      }
    })
  }

  async getAllItems(): Promise<Item[]> {
    const db = await this.openDB()
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this._storeName, 'readonly')
      const store = transaction.objectStore(this._storeName)
      const request = store.getAll()

      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result as Item[])
      }

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error)
      }
    })
  }

  async updateItem(item: Item): Promise<void> {
    const db = await this.openDB()
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this._storeName, 'readwrite')
      const store = transaction.objectStore(this._storeName)
      const request = store.put(item)

      request.onsuccess = () => {
        resolve()
      }

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error)
      }
    })
  }

  async deleteItem(id: string): Promise<void> {
    const db = await this.openDB()
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this._storeName, 'readwrite')
      const store = transaction.objectStore(this._storeName)
      const request = store.delete(id)

      request.onsuccess = () => {
        resolve()
      }

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error)
      }
    })
  }

  async emptyStore(): Promise<void> {
    const db = await this.openDB()
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this._storeName, 'readwrite')
      const store = transaction.objectStore(this._storeName)
      const request = store.clear()

      request.onsuccess = () => {
        resolve()
      }

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error)
      }
    })
  }
}

export default IndexedDBManager
