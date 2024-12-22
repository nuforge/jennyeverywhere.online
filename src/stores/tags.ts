import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'

export const useTagStore = defineStore('selection', () => {
  const selection = ref<string[]>(['jenny-everywhere'])
  const tags = ref<Record<string, Tag>>({})

  const addStyle = (tag: string, color: string, icon: string) => {
    const newTag = !tags.value[tag] ? new Tag(tag) : tags.value[tag]
    newTag.color = color
    newTag.icon = icon
    return (tags.value[newTag.id] = newTag) //, newColor, newIcon )
  }

  addStyle('name', 'warning', 'mdi-error')
  addStyle('occupation', 'warning', 'mdi-shield-account')

  // Actions
  const addTag = (newText: string = 'tag') => {
    const tag = new Tag(newText) // , newColor, newIcon)
    console.log('addTag', tag)
    if (tag.space && tags.value[tag.space]) {
      tag.icon = tags.value[tag.space].icon
      tag.color = tags.value[tag.space].color
    }
    return (tags.value[tag.id] = new Tag(newText)) //, newColor, newIcon )
  }
  addTag('occupation:test')

  const removeTag = (tag: string) => {
    delete tags.value[tag]
    selection.value = selection.value.filter((item) => item !== tag)
  }

  function linkText(text: string) {
    // Create a RegExp if pattern is a string
    //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;
    let temp = text
    selection.value.forEach((tag) => {
      if (!tags.value[tag]) return
      const pattern = tags.value[tag].name
      const icon = 'mdi-tag' // tags.value[tag].icon
      const color = 'primary' // tags.value[tag].color

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
  return { selection, tags, addTag, addStyle, removeTag, linkText }
})
