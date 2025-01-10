import { ref } from 'vue'
import { defineStore } from 'pinia'
import Meme from '@/objects/Meme' // Assuming you have a Meme class defined
import Tag from '@/objects/nu/NuTag' // Assuming Tag is defined

// Type from earlier
type Value = boolean | number | string | Tag | undefined

export const useMemoryStore = defineStore('meme', () => {
  // State
  const memories = ref<Meme[]>([])

  const addMeme = (meme: Meme) => {
    console.log('Adding meme:', meme.name)
    const existingMemoryIndex = memories.value.findIndex(
      (existingMeme) => existingMeme.name === meme.name,
    )

    console.log('existingMemoryIndex:', existingMemoryIndex)
    if (existingMemoryIndex !== -1) {
      const existingMeme = memories.value[existingMemoryIndex]

      console.log('existingMeme:', existingMeme)
      // If the values are the same, just call touched()
      if (existingMeme.value === meme.value) {
        console.log(' existingMeme.touch()')
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
      console.log('memories.value.push(meme)', meme)
      // If no existing memory found, just add the new one
      memories.value.push(meme)
      console.log('memories', memories.value)
    }
  }

  // Optional: You could create a method to retrieve memes if needed
  const getMemeById = (name: string) => {
    return memories.value.find((meme) => meme.name === name)
  }

  function getMemories(limit: number = 10): Tag[] {
    // Sort by score
    memories.value.sort((a, b) => a.score - b.score)

    // Return a limited number of memories

    return memories.value
      .slice(0, limit)
      .map((meme) => new Tag(meme.name, meme.color, meme.icon)) as Tag[]
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
