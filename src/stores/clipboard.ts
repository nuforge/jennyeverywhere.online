import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'

export const useClipboardStore = defineStore('clipboard', () => {
  const dragging = ref(false)
  const clipboard = ref<any>(undefined)

  function copyTag(tag: Tag) {
    clipboard.value = tag
  }

  function clear() {
    dragging.value = false
    clipboard.value = undefined
  }
  function pasteTag() {
    return clipboard.value
  }
  // Dragging

  function dragStart() {
    dragging.value = true
  }
  function dragEnd() {
    dragging.value = false
  }
  function dragDrop() {}

  return {
    dragging,
    clipboard,
    clear,
    copyTag,
    pasteTag,
    dragStart,
    dragEnd,
    dragDrop,
  }
})
