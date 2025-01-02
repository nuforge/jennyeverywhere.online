import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 'myCustomTheme'

import { useTheme } from 'vuetify'
import Tag from '@/objects/Tag'
import Legend from '@/objects/Legend'

// Create a new store for different categories of sheets: attributes, image, description, actions
export interface Persona {
  name: string | null
  avatar: string | null
}

export const usePersonaStore = defineStore('persona', () => {
  const display = ref(false)
  const name = ref<string | null>(null)
  const avatar = ref<string | null>(null)

  const focus = ref(new Legend())
  const theme = useTheme()

  const myTheme = ref(theme.global.current.value)
  const themeBase = [
    'primary',
    'secondary',
    'accent',
    'error',
    'info',
    'success',
    'warning',
    'background',
    'surface',
  ]

  function show() {
    display.value = true
  }

  function hide() {
    display.value = false
  }

  function toggle() {
    display.value = !display.value
  }

  function focusOn(word: string) {
    return focus.value.createTag(word)
  }

  async function randomAvatar() {
    //const rndAvatar = Math.floor(Math.random() * 33)
    await import(`@/assets/images/avatars/jenny-everywhere-avatar.png`)
      .then((result) => (avatar.value = result.default))
      .catch((error) => console.error(error))
  }

  const themeTags = computed(() => {
    const tagList = [] as Tag[]
    Object.entries(myTheme.value.colors)
      .filter(([name]) => {
        return themeBase.includes(name)
      })
      .forEach(([name, color]) => {
        return tagList.push(new Tag(name, color, 'mdi-circle-opacity'))
      })
    return tagList as Tag[]
  })

  return {
    display,
    name,
    avatar,
    focus,
    theme,
    myTheme,
    themeTags,
    show,
    hide,
    toggle,
    focusOn,
    randomAvatar,
    themeBase,
  }
})
