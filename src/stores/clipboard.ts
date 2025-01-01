import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'

export const useClipboardStore = defineStore('clipboard', () => {
  const dragging = ref(false)
  const clipboard = ref<Tag[]>([])

  function cut(tag: Tag) {
    return copy(tag)
  }

  function copy(copyValue: Tag | Tag[]) {
    if (Array.isArray(copyValue)) {
      return copyTags(copyValue)
    } else {
      return copyTag(copyValue)
    }
  }

  function copyTag(tag: Tag) {
    return clipboard.value.push(tag)
  }

  function copyTags(tags: Tag[]) {
    return clipboard.value.push(...tags)
  }

  function clear() {
    dragging.value = false
    return (clipboard.value = [])
  }

  function paste(clear: boolean = false) {
    const pasted = [...clipboard.value]
    if (clear) {
      clipboard.value = []
    }
    return pasted
  }

  function pasteTag(clear: boolean = false) {
    return clear ? clipboard.value[0] : clipboard.value.pop()
  }

  return {
    dragging,
    clipboard,
    copy,
    cut,
    clear,
    paste,
    copyTag,
    pasteTag,
  }
})
