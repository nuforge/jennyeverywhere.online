import Tag from '@/objects/nu/Tag'

class LocalStorageManager {
  constructor(private storageKey: string) {}

  // Store a tag or string in localStorage
  storeItem(key: string, value: string | Tag): void {
    const data = this.retrieveAllItems()
    data[key] = typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(this.storageKey, JSON.stringify(data))
  }

  // Retrieve a tag or string from localStorage
  retrieveItem(key: string): string | Tag | null {
    const data = this.retrieveAllItems()
    const item = data[key]
    if (!item) return null
    try {
      return JSON.parse(item)
    } catch {
      return item
    }
  }

  // Remove a tag or string from localStorage
  removeItem(key: string): void {
    const data = this.retrieveAllItems()
    delete data[key]
    localStorage.setItem(this.storageKey, JSON.stringify(data))
  }

  // Check if a key exists in localStorage
  hasItem(key: string): boolean {
    const data = this.retrieveAllItems()
    return key in data
  }

  // Check if localStorage is empty
  isEmpty(): boolean {
    const data = this.retrieveAllItems()
    return Object.keys(data).length === 0
  }

  // Retrieve all items from localStorage
  retrieveAllItems(): Record<string, string> {
    const data = localStorage.getItem(this.storageKey)
    return data ? JSON.parse(data) : {}
  }

  // Clear all items from localStorage
  clearAllItems(): void {
    localStorage.removeItem(this.storageKey)
  }
}

export default LocalStorageManager
