// storage/IndexedDBManager.ts
import Dexie from 'dexie'
import Tag from '@/objects/nu/Tag'
import type { Memory } from '@/types/Memory'

export class IndexedDBManager extends Dexie {
  memories!: Dexie.Table<Memory, string> // Primary key: memory.id
  tags!: Dexie.Table<Tag & { memoryId: string }, [string, string]> // Composite key: [namespace, label]

  constructor() {
    super('MemoryDatabase')
    this.version(1).stores({
      memories: 'id, content, tags',
      tags: '[space+name], memoryId', // Index tags for fast lookup
    })
  }

  // Save a memory and its tags
  async saveMemory(memory: Memory): Promise<void> {
    await this.transaction('rw', this.memories, this.tags, async () => {
      // Store the memory
      await this.memories.put(memory)

      // Store tags with reference to the memory
      for (const tag of memory.tags) {
        await this.tags.put({
          memoryId: memory.id,
          tag: tag,
        })
      }
    })
  }

  // Get memories by tag (using IndexedDB indexing)
  async getMemoriesByTag(tag: Tag): Promise<Memory[]> {
    const tagEntries = await this.tags
      .where('[space+name]')
      .equals([tag.space ?? 'global', tag.name])
      .toArray()

    return this.memories.bulkGet(tagEntries.map((t) => t.memoryId)) as Promise<Memory[]>
  }
}
