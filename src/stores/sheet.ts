import { ref } from 'vue'
import { defineStore } from 'pinia'

import Tag from '@/objects/Tag'

// Create a new store for different categories of sheets: attributes, image, description, actions

export const useSheetStore = defineStore('bottom-sheet', () => {
  const display = ref(false)
  const data = ref<Tag>(new Tag('tag'))

  function setTag(tagText: string, tagColor: string, tagIcon: string) {
    const newTag = new Tag(tagText)
    newTag.color = tagColor
    newTag.icon = tagIcon
    data.value = newTag
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
