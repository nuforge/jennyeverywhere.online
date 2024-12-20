import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'

export const useTagStore = defineStore('selection', () => {
  const selection = ref([0])
  const tags = ref<Tag[]>([])

  // Actions
  const addTag = (
    newText: string = 'tag',
    newIcon: string = 'mdi-tag-outline',
    newColor: string = 'primary',
  ) => {
    tags.value.push(new Tag(newText, newColor, newIcon))
  }

  function linkText(text: string) {
    // Create a RegExp if pattern is a string
    //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;
    let temp = text
    selection.value.forEach((tag) => {
      const pattern = tags.value[tag].text
      const icon = tags.value[tag].icon
      const color = tags.value[tag].color

      // Escape special regex characters if pattern is a literal string
      const escapedPattern =
        typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern // If already a RegExp, use it as is

      const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern

      temp = temp.replace(
        regex,
        (match) =>
          `<span class="text-no-wrap" ><i class="text-no-wrap mdi ${icon} text-${color}"></i> [${match}](${match.toLowerCase().replace(/\s/g, '-')})</span>`,
      )
    })
    // Replace matches with <b> tags

    return temp
  }
  return { selection, tags, addTag, linkText }
})
