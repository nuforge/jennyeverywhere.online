import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'
import TagList from '@/objects/TagList'
const TAG_WHITESPACE_REPLACER = '-'

export const useTagStore = defineStore('selection', () => {
  const selection = ref<string[]>(['jenny-everywhere'])
  const taglist = ref<TagList>(new TagList())

  const tags = computed(() => taglist.value.tags)

  const cleanTag = (name: string | number) => {
    return name.toString().toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)
  }

  const copyTag = (tag: Tag) => {
    console.log('copyTag', tag)
    return taglist.value.addTag(tag)
  }
  const addTag = (newTag: Tag) => {
    taglist.value.addTag(newTag)
  }

  const addLabel = (newName: string, newColor: string, newIcon: string) => {
    const tag = cleanTag(newName)
    const newTag = !taglist.value.getTag(tag) ? new Tag(newName) : taglist.value.getTag(tag)
    newTag.icon = newIcon
    newTag.color = newColor
    return taglist.value.addTag(newTag) //, newColor, newIcon )
  }

  // Actions
  const createTag = (newText: string = 'tag') => {
    const tag = new Tag(newText) // , newColor, newIcon)
    if (tag.space && taglist.value.getTag(tag.space)) {
      tag.icon = taglist.value.getTag(tag.space).icon
      tag.color = taglist.value.getTag(tag.space).color
    }
    return taglist.value.addTag(tag) //, newColor, newIcon )
  }

  const removeTag = (tag: string) => {
    taglist.value.removeTag(tag)
    selection.value = selection.value.filter((item) => item !== tag)
  }

  function linkText(text: string) {
    // Create a RegExp if pattern is a string
    //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;
    let temp = text
    selection.value.forEach((id) => {
      console.log('linkText', id)
      if (!taglist.value.getTag(id)) return
      const pattern = taglist.value.getTag(id).name

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
    taglist,
    tags,
    addTag,
    createTag,
    addLabel,
    removeTag,
    linkText,
    copyTag,
    cleanTag,
  }
})
