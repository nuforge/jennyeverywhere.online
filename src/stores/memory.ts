// stores/memoryStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { MemoryManager } from '@/objects/storage/MemoryManager'
import Tag from '@/objects/nu/Tag'
import type { Memory } from '@/types/Memory'

export const useMemoryStore = defineStore('memory', () => {
  // State
  const memories = ref<Memory[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Dependencies
  const memoryManager = new MemoryManager()

  // Actions
  const saveMemory = async (content: string, tags: Tag[]) => {
    try {
      isLoading.value = true
      const newMemory: Memory = {
        id: crypto.randomUUID(),
        content,
        tags,
        metadata: {
          source: window.location.href,
          timestamp: new Date(),
        },
      }

      await memoryManager.saveMemory(newMemory)
      memories.value.unshift(newMemory) // Add to beginning for chronological display
    } catch (err) {
      error.value = `Failed to save memory: ${(err as Error).message}`
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const loadMemoriesByTag = async (tag: Tag) => {
    try {
      isLoading.value = true
      memories.value = await memoryManager.getMemoriesByTag(tag)
    } catch (err) {
      error.value = `Failed to load memories: ${(err as Error).message}`
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const deleteMemory = async (memoryId: string) => {
    try {
      isLoading.value = true
      await memoryManager.deleteMemory(memoryId)
      memories.value = memories.value.filter((m) => m.id !== memoryId)
    } catch (err) {
      error.value = `Failed to delete memory: ${(err as Error).message}`
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Getters
  const memoryTags = computed(() => {
    const allTags = new Map<string, Tag>()
    memories.value.forEach((memory) => {
      memory.tags.forEach((tag) => {
        const key = tag.space ? `${tag.space}:${tag.name}` : tag.name
        allTags.set(key, tag)
      })
    })
    return Array.from(allTags.values())
  })

  return {
    // State
    memories,
    isLoading,
    error,

    // Getters
    memoryTags,

    // Actions
    saveMemory,
    loadMemoriesByTag,
    deleteMemory,
  }
})
