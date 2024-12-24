import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'
const TAG_WHITESPACE_REPLACER = '-'

export const useTagStore = defineStore('selection', () => {
  const selection = ref<string[]>(['jenny-everywhere'])
  const tags = ref<Record<string, Tag>>({})

  const filterSpace = (spaceName: string) => {
    console.log('spacename', spaceName)
    console.log('tags', tags.value)
    const filtered = Object.values(tags.value).filter((tag: Tag) => tag.space === spaceName)
    console.log('Filtered', filtered)
  }

  const cleanTag = (name: string | number) => {
    return name.toString().toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)
  }

  const copyTag = (tag: Tag) => {
    console.log('copyTag', tag)
    return (tags.value[tag.id] = tag)
  }

  const addLabel = (newName: string, newColor: string, newIcon: string) => {
    const tag = cleanTag(newName)
    const newTag = !tags.value[tag] ? new Tag(newName) : tags.value[tag]
    newTag.icon = newIcon
    newTag.color = newColor
    return (tags.value[newTag.id] = newTag) //, newColor, newIcon )
  }

  const addTag = (newTag: Tag) => {
    tags.value[newTag.id] = newTag
  }

  // Actions
  const createTag = (newText: string = 'tag') => {
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

      // Escape special regex characters if pattern is a literal string
      const escapedPattern =
        typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern // If already a RegExp, use it as is

      const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern

      temp = temp.replace(
        regex,
        (match) => `[${match}](${match.toLowerCase().replace(/\s/g, '-')})`,
      )
    })

    return temp
  }
  return {
    selection,
    tags,
    addTag,
    createTag,
    addLabel,
    removeTag,
    linkText,
    copyTag,
    cleanTag,
    filterSpace,
  }
})
