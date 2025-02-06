// MemoryManager.ts
import { LocalStorageManager } from '@/objects/storage/LocalStorageManager.ts'
import { IndexedDBManager } from '@/objects/storage/IndexedDBManager.ts'
import Tag from '@/objects/nu/Tag'
import type { Memory } from '@/types/Memory'

export class MemoryManager {
  private db: IndexedDBManager

  constructor() {
    this.db = new IndexedDBManager()
  }

  // Save a memory to both storage systems
  async saveMemory(memory: Memory): Promise<void> {
    // Save to IndexedDB
    await this.db.saveMemory(memory)

    // Cache lightweight version in LocalStorage
    LocalStorageManager.cacheMemory(memory)
  }

  // Get memories by tag (fast lookup via LocalStorage)
  async getMemoriesByTag(tag: Tag): Promise<Memory[]> {
    // Get IDs from LocalStorage cache
    const memoryIds = LocalStorageManager.getMemoryIdsByTag(tag)

    // Fetch full data from IndexedDB
    return this.db.memories.bulkGet(memoryIds) as Promise<Memory[]>
  }

  // Delete a memory
  async deleteMemory(memoryId: string): Promise<void> {
    await this.db.memories.delete(memoryId)
    LocalStorageManager.uncacheMemory(memoryId)
  }
}
