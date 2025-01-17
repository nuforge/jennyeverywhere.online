import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/nu/Tag'
import Legend from '@/objects/tag/Legend'

const useTagStore = defineStore('tags', () => {
  const tagMap = ref(new Legend())
  const selection = ref<string[]>([''])
  const selected = computed(() =>
    selection.value
      .map((tag) => tagMap.value.getTag(tag))
      .filter((tag): tag is Tag => tag !== undefined),
  )
  const tags = computed(() => tagMap.value.tags)
  const clipboard = ref(new Tag(''))

  const snackbar = ref(false)
  const snackbarTag = ref(new Tag(''))
  const timeout = ref(3200)

  const taglist = tagMap

  const normalizeTagName = (name: string | number) => {
    return Tag.normalizeTagName(name)
  }

  const tempTag = (newText: string = 'tag') => {
    clipboard.value = new Tag(newText)
  }
  const copyTag = (tag: Tag) => {
    clipboard.value = tag
  }

  const clipboardSave = () => {
    return addTag(clipboard.value as Tag)
  }
  const clipboardEmpty = () => {
    return (clipboard.value = new Tag(''))
  }

  const pasteTag = () => {
    return clipboard.value as Tag
  }

  const addTag = (newTag: Tag) => {
    return tagMap.value.addTag(newTag)
  }

  const addLabel = (newName: string, newColor: string, newIcon: string) => {
    const tag = normalizeTagName(newName)
    const existingTag = tagMap.value.getTag(tag)
    const newTag = existingTag ? existingTag : new Tag(newName)
    newTag.icon = newIcon
    newTag.color = newColor
    return tagMap.value.addTag(newTag)
  }

  const createTag = (newText: string = 'tag') => {
    const tag = new Tag(newText)
    if (tag.space && tagMap.value.getTag(tag.space)) {
      tag.icon = tagMap.value.getTag(tag.space)?.icon || ''
      tag.color = tagMap.value.getTag(tag.space)?.color || ''
    }
    return tagMap.value.addTag(tag)
  }

  const removeTag = (tag: string) => {
    tagMap.value.deleteTag(tag)
    selection.value = selection.value.filter((item) => item !== tag)
  }

  const removeTags = (tags: Tag[]) => {
    tags.forEach((tag) => removeTag(tag.id))
  }

  function linkText(text: string) {
    return tagMap.value.linkText(text)
  }

  function clearSnackbar() {
    snackbar.value = false
  }

  function listToTags(list: string[], color?: string, icon?: string) {
    return list.map((item) => {
      tag: new Tag(item, color, icon)
    })
  }

  function triggerSnackbar(tag: Tag) {
    timeout.value = 3200
    if (snackbar.value) {
      clearSnackbar()
      setTimeout(() => {
        snackbar.value = true
        snackbarTag.value = tag || undefined
      }, 1)
    } else {
      snackbar.value = true
      snackbarTag.value = tag || undefined
    }
  }

  return {
    selection,
    selected,
    tagMap,
    taglist, //deprecated
    tags,
    clipboard,
    snackbar,
    snackbarTag,
    tempTag,
    addTag,
    createTag,
    addLabel,
    removeTag,
    removeTags,
    linkText,
    copyTag,
    pasteTag,
    listToTags,
    normalizeTagName,
    clipboardEmpty,
    clipboardSave,
    triggerSnackbar,
  }
})
export default useTagStore
