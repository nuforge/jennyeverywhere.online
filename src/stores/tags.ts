import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'

export const useTagStore = defineStore('selection', () => {
  const selection = ref<string[]>(['jenny-everywhere'])
  const tags = ref<Record<string, Tag>>({})

  // Actions
  const addTag = (
    newText: string = 'tag',
    newColor: string = 'primary',
    newIcon: string = 'mdi-tag-outline',
  ) => {
    const tag = new Tag(newText, newColor, newIcon)
    tags.value[tag.id] = new Tag(newText, newColor, newIcon)
  }

  const removeTag = (tag: string) => {
    delete tags.value[tag]
    selection.value = selection.value.filter((item) => item !== tag)
  }

  function linkText(text: string) {
    // Create a RegExp if pattern is a string
    //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;
    let temp = text
    selection.value.forEach((tag) => {
      console.log('linkText', selection.value, tag, tags.value[tag])
      if (!tags.value[tag]) return
      const pattern = tags.value[tag].label
      const icon = tags.value[tag].icon
      const color = tags.value[tag].color

      // Escape special regex characters if pattern is a literal string
      const escapedPattern =
        typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern // If already a RegExp, use it as is

      const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern

      temp = temp.replace(
        regex,
        (match) =>
          `<span class="text-no-wrap" ><i class="mdi ${icon} text-${color}"></i> [${match}](${match.toLowerCase().replace(/\s/g, '-')})</span>`,
      )
    })
    // Replace matches with <b> tags

    return temp
  }
  return { selection, tags, addTag, removeTag, linkText }
})
