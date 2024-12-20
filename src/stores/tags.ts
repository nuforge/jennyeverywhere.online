import { defineStore } from 'pinia'
import { ref } from 'vue'
import Tag from '@/objects/Tag'

export const useTagStore = defineStore('selection', () => {
  const selection = ref([0]) // Initial value is 3

  const tags = ref<Tag[]>([])

  // Actions
  const addTag = (
    newText: string = 'tag',
    newIcon: string = 'mdi-tag-outline',
    newColor: string = 'primary',
  ) => {
    tags.value.push(new Tag(newText, newColor, newIcon))
  }

  return { selection, tags, addTag }
})
