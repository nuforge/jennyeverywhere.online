import { ref } from 'vue'
import { defineStore } from 'pinia'
import TagDb from '@/objects/storage/TagDb'
import Tag from '@/objects/nu/Tag'
import TagFactory from '@/objects/nu/TagFactory'

import SelectionManager from '@/utils/SelectionManager'

interface Edge {
  id: string
  from: string
  to: string
  type: string
}

const useSearchStore = defineStore('search', () => {
  const selectionManager = new SelectionManager()
  const databaseName = 'nuForgeDB'
  const tagDatabase = new TagDb()
  const searchResults = ref<Tag[]>([])
  const searchTerms = ref<string[]>([]) // Deprecating
  const searchTags = ref<Tag[]>([])

  function addSearchTag(tag: Tag) {
    const index = searchTags.value.indexOf(tag)
    if (index > -1) return removeSearchTag(tag)
    searchTags.value.push(tag)
  }

  function removeSearchTag(tag: Tag) {
    const index = searchTags.value.indexOf(tag)
    if (index > -1) {
      return searchTags.value.splice(index, 1)
    }
  }

  function createSearchTag(tag: string, { color = 'text', icon = 'mdi-circle-small' } = {}) {
    addSearchTag(TagFactory.create(tag, { color: color, icon: icon }))
  }
  // Deprecating
  function addtoSearch(tag: string) {
    searchTerms.value.push(tag)
    searchTags.value.push(TagFactory.create(tag, { color: 'text', icon: 'mdi-circle-small' }))
  }

  function removeFromSearch(tag: string) {
    const index = searchTerms.value.indexOf(tag)
    if (index > -1) {
      searchTerms.value.splice(index, 1) // Deprecating
      searchTags.value.splice(index, 1)
    }
  }

  async function init(dbName: string = databaseName) {
    try {
      await tagDatabase.setupDatabase(dbName)
      searchResults.value = (await tagDatabase.getAllTags()) as Tag[]
    } catch (error) {
      console.error('Error initializing database:', error)
    }
  }

  async function removeTag(tag: string) {
    try {
      await tagDatabase.removeTagAndEdges(tag)
    } catch (error) {
      console.error('Error removing tag:', error)
    }
  }

  async function getAllTags() {
    try {
      searchResults.value = (await tagDatabase.getAllTags()) as Tag[]
    } catch (error) {
      console.error('Error getting all tags:', error)
    }
  }

  async function addTag(tag: string) {
    try {
      await tagDatabase.addTag(tag)
    } catch (error) {
      console.error('Error adding tag:', error)
    }
  }

  async function addTags(tags: Tag[] = []) {
    try {
      await tagDatabase.addTags(tags)
    } catch (error) {
      console.error('Error adding tags:', error)
    }
  }

  async function addEdges(edges: Edge[] = []) {
    try {
      await tagDatabase.addEdges(edges)
    } catch (error) {
      console.error('Error adding edges:', error)
    }
  }

  async function searchTagsBySpace(space: string) {
    try {
      searchResults.value = (await tagDatabase.findTagsBySpace(space)) as Tag[]
    } catch (error) {
      console.error('Error searching tags by space:', error)
    }
  }

  async function searchTagsByConnection(tagId: string) {
    try {
      searchResults.value = (await tagDatabase.findConnectedTags(tagId)) as Tag[]
    } catch (error) {
      console.error('Error searching tags by connection:', error)
    }
  }

  async function depthSearchTags(tagId: string) {
    try {
      const results = await tagDatabase.depthFirstSearchWithMetrics(tagId)
      searchResults.value = results.tags as Tag[]
    } catch (error) {
      console.error('Error performing depth search:', error)
    }
  }

  async function resetDatabase() {
    try {
      await tagDatabase.resetDatabase(databaseName)
      searchResults.value = []
    } catch (error) {
      console.error('Error resetting database:', error)
    }
  }

  return {
    databaseName,
    searchResults,
    searchTerms,
    searchTags,
    selectionManager,
    init,
    addSearchTag,
    removeSearchTag,
    createSearchTag,
    addTag,
    getAllTags,
    removeTag,
    addTags,
    addEdges,
    addtoSearch,
    removeFromSearch,
    searchTagsBySpace,
    searchTagsByConnection,
    depthSearchTags,
    resetDatabase,
  }
})

export default useSearchStore
