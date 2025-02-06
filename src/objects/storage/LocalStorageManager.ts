// storage/LocalStorageManager.ts
import Tag from '@/objects/nu/Tag'
import type { Memory } from '@/types/Memory'

export class LocalStorageManager {
  // Key prefixes to avoid collisions
  private static readonly TAG_PREFIX = 'tag:'
  private static readonly MEMORY_PREFIX = 'memory:'

  // Store a lightweight reference to a memory (tags only)
  static cacheMemory(memory: Memory): void {
    const lightweight = {
      id: memory.id,
      tags: memory.tags,
    }
    localStorage.setItem(`${this.MEMORY_PREFIX}${memory.id}`, JSON.stringify(lightweight))

    // Index tags for quick lookup
    memory.tags.forEach((tag) => {
      const tagKey = `${this.TAG_PREFIX}${tag.space ?? 'global'}:${tag.name}`
      const memoryIds = JSON.parse(localStorage.getItem(tagKey) || '[]')
      if (!memoryIds.includes(memory.id)) {
        memoryIds.push(memory.id)
        localStorage.setItem(tagKey, JSON.stringify(memoryIds))
      }
    })
  }

  // Get memory IDs associated with a tag
  static getMemoryIdsByTag(tag: Tag): string[] {
    const tagKey = `${this.TAG_PREFIX}${tag.space ?? 'global'}:${tag.name}`
    return JSON.parse(localStorage.getItem(tagKey) || '[]')
  }

  // Remove a memory from the cache
  static uncacheMemory(memoryId: string): void {
    localStorage.removeItem(`${this.MEMORY_PREFIX}${memoryId}`)
  }
}
