import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/Tag'
import TagMap from '@/objects/TagMap'
const TAG_WHITESPACE_REPLACER = '-'

export const useTagStore = defineStore('tags', () => {
  const taglist = ref(new TagMap())
  const selection = ref<string[]>(['jenny-everywhere'])
  const selected = computed(() => selection.value.map((tag) => taglist.value.getTag(tag)))
  const tags = computed(() => Array.from(taglist.value.tags.values()))
  const cleanTag = (name: string | number) => {
    return name.toString().toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)
  }

  const copyTag = (tag: Tag) => {
    return taglist.value.addTag(tag)
  }
  const addTag = (newTag: Tag) => {
    return taglist.value.addTag(newTag)
  }

  const addLabel = (newName: string, newColor: string, newIcon: string) => {
    const tag = cleanTag(newName)
    const existingTag = taglist.value.getTag(tag)
    const newTag = existingTag ? existingTag : new Tag(newName)
    newTag.icon = newIcon
    newTag.color = newColor
    return taglist.value.addTag(newTag)
  }

  const createTag = (newText: string = 'tag') => {
    const tag = new Tag(newText)
    if (tag.space && taglist.value.getTag(tag.space)) {
      tag.icon = taglist.value.getTag(tag.space)?.icon || ''
      tag.color = taglist.value.getTag(tag.space)?.color || ''
    }
    return taglist.value.addTag(tag)
  }

  const removeTag = (tag: string) => {
    taglist.value.removeTag(tag)
    selection.value = selection.value.filter((item) => item !== tag)
  }

  function linkText(text: string) {
    return taglist.value.linkText(text)
  }

  return {
    selection,
    selected,
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
