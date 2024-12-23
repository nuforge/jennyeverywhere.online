import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'
const TAG_WHITESPACE_REPLACER = '-'

export const useTagStore = defineStore('selection', () => {
  const selection = ref<string[]>(['jenny-everywhere'])
  const tags = ref<Record<string, Tag>>({})

  const cleanTag = (name: string | number) => {
    return name.toString().toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)
  }

  const addLabel = (newName: string, newColor: string, newIcon: string) => {
    const tag = cleanTag(newName)
    const newTag = !tags.value[tag] ? new Tag(newName) : tags.value[tag]
    newTag.icon = newIcon
    newTag.color = newColor
    return (tags.value[newTag.id] = newTag) //, newColor, newIcon )
  }

  // Actions
  const addTag = (newText: string = 'tag') => {
    const tag = new Tag(newText) // , newColor, newIcon)
    if (tag.space && tags.value[tag.space]) {
      tag.icon = tags.value[tag.space].icon
      tag.color = tags.value[tag.space].color
    }
    return (tags.value[tag.id] = tag) //, newColor, newIcon )
  }

  const removeTag = (tag: string) => {
    delete tags.value[tag]
    selection.value = selection.value.filter((item) => item !== tag)
  }

  function linkText(text: string) {
    // Create a RegExp if pattern is a string
    //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;
    let temp = text
    selection.value.forEach((id) => {
      if (!tags.value[id]) return
      const pattern = tags.value[id].name
      const icon = tags.value[id].icon
      const color = tags.value[id].color

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

    return temp
  }
  return { selection, tags, addTag, addLabel, removeTag, linkText }
})
