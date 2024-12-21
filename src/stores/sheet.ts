import { ref } from 'vue'
import { defineStore } from 'pinia'

import Tag from '@/objects/Tag'

// Create a new store for different categories of sheets: attributes, image, description, actions

export const useSheetStore = defineStore('bottom-sheet', () => {
  const display = ref(false)
  const data = ref<Tag>()

  function setTag(tagText: string, tagColor: string, tagIcon: string) {
    data.value = new Tag(tagText, tagColor, tagIcon)
  }

  function openTag(tagText: string, tagColor: string, tagIcon: string) {
    setTag(tagText, tagColor, tagIcon)
    show()
  }

  function show() {
    display.value = true
  }

  function hide() {
    display.value = false
  }

  function toggle() {
    display.value = !display.value
  }

  return { display, show, hide, toggle, data, setTag, openTag }
})
