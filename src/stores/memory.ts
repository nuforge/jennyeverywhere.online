import { ref } from 'vue'
import { defineStore } from 'pinia'
import Meme from '@/objects/Meme' // Assuming you have a Meme class defined
import Tag from '@/objects/nu/Tag' // Assuming Tag is defined

export const sortOptions = ['score', 'lastAccessed', 'creation']

type sortBy = 'score' | 'last' | 'creation'
// Type from earlier
type Value = boolean | number | string | Tag | undefined

export const useMemoryStore = defineStore('meme', () => {
  // State
  const memories = ref<Meme[]>([])

  const addMeme = (meme: Meme) => {
    const existingMemoryIndex = memories.value.findIndex(
      (existingMeme) => existingMeme.name === meme.name,
    )

    if (existingMemoryIndex !== -1) {
      const existingMeme = memories.value[existingMemoryIndex]

      // If the values are the same, just call touched()
      if (existingMeme.value === meme.value) {
        existingMeme.touch()
      } else {
        // Weigh the score and replace the old meme with the higher score one
        if (meme.score > existingMeme.score) {
          memories.value[existingMemoryIndex] = meme
        } else {
          existingMeme.score = Math.max(existingMeme.score, meme.score)
        }
      }
    } else {
      // If no existing memory found, just add the new one
      memories.value.push(meme)
    }
  }

  // Optional: You could create a method to retrieve memes if needed
  const getMemeById = (name: string) => {
    return memories.value.find((meme) => meme.name === name)
  }

  function getMemories(limit?: number, sortBy: sortBy = 'score'): Tag[] {
    // Sort by the specified criteria
    memories.value.sort((a, b) => {
      if (sortBy === 'score') {
        return b.score - a.score
      } else if (sortBy === 'last') {
        return (b.lastAccessed?.getTime() ?? 0) - (a.lastAccessed?.getTime() ?? 0)
      } else if (sortBy === 'creation') {
        return (b.stamp?.getTime() ?? 0) - (a.stamp?.getTime() ?? 0)
      }
      return 0
    })

    // Return a limited number of memories if limit is specified
    const sortedMemories = limit && limit != -1 ? memories.value.slice(0, limit) : memories.value

    return sortedMemories.map((meme) => new Tag(meme.name, meme.color, meme.icon)) as Tag[]
  }

  // Actions
  function addMemory(value: Value, initialScore: number = 0) {
    // Handle different value types
    let meme: Meme
    if (value instanceof Meme) {
      meme = value
    } else if (value instanceof Tag) {
      meme = new Meme(value.label, value.color, value.symbol, initialScore)
    } else if (typeof value === 'string') {
      meme = new Meme(value, undefined, undefined, initialScore)
    } else {
      throw new Error('Unsupported value type for Meme')
    }

    // Add the meme to the store
    memories.value.push(meme)
  }

  function removeMemory(id: string) {
    memories.value = memories.value.filter((meme) => meme.id !== id)
  }

  function updateMemory(id: string, updatedFields: Partial<Meme>) {
    const meme = memories.value.find((meme) => meme.id === id)
    if (meme) {
      Object.assign(meme, updatedFields)
    }
  }

  function decayMemories(rate: number = 0.01) {
    memories.value.forEach((meme) => meme.decay(rate))
    memories.value = memories.value.filter((meme) => meme.score > 0)
  }

  function serializeAll(): string[] {
    return memories.value.map((meme) => meme.serialize())
  }

  function deserializeAll(serializedList: string[]) {
    memories.value = serializedList.map((item) => Meme.deserialize(item))
  }

  // Return state and actions
  return {
    memories,
    addMeme,
    addMemory,
    getMemories,
    getMemeById,
    removeMemory,
    updateMemory,
    decayMemories,
    serializeAll,
    deserializeAll,
  }
})

export default useMemoryStore
