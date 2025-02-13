// db.ts
const DEFAULT_DB_NAME = 'tags'
import Dexie, { type EntityTable } from 'dexie'
import Tag from '@/objects/nu/Tag'

class MemoryManager {
  private name: string
  private db: Dexie & {
    tags: EntityTable<
      Tag,
      'id' // primary key "id" (for the typings only)
    >
  }

  constructor(databaseName: string = DEFAULT_DB_NAME) {
    this.name = databaseName
    this.db = new Dexie(databaseName) as Dexie & {
      tags: EntityTable<
        Tag,
        'id' // primary key "id" (for the typings only)
      >
    }

    this.db.version(1).stores({ tags: '++id, name, age' })
  }

  async addTag(tag: Tag) {
    try {
      const serializedTag = tag.serialize()
      console.log('Adding tag:', serializedTag)
      return await this.db.tags.add(JSON.parse(serializedTag))
    } catch (error) {
      console.error('Failed to add tag:', error)
      throw error
    }
  }

  async deleteTag(id: string) {
    try {
      return await this.db.tags.delete(id)
    } catch (error) {
      console.error('Failed to delete tag:', error)
      throw error
    }
  }

  async emptyTags() {
    try {
      return await this.db.tags.clear()
    } catch (error) {
      console.error('Failed to empty tags:', error)
      throw error
    }
  }

  async getTags() {
    try {
      return await this.db.tags.toArray()
    } catch (error) {
      console.error('Failed to get tags:', error)
      throw error
    }
  }
}

export default MemoryManager
