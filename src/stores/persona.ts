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

const usePersonaStore = defineStore('persona', () => {
  const display = ref(false)
  const name = ref<string | null>(null)
  const avatar = ref<string | null>(null)
  const drawer = ref(true)

  const theme = useTheme()
  const lastKey = ref('')

  const focus = ref(new Tag('mythological bird:Phoenix', 'warning', 'mdi-fire'))
  const attention = ref(new Legend())
  const memory = ref(new Legend())

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

  function focusOn(tag: Tag, clear: boolean = false) {
    if (clear) {
      attention.value.clearTags()
    }
    if (!focus.value) {
      console.error('focus is undefined')
      focus.value = new Tag() // Fallback to a new Tag if undefined
    }
    focus.value = tag // This updates the `focus` ref correctly
    return attention.value.add(tag)
  }

  function getFocus() {
    return focus.value
  }

  async function randomAvatar() {
    //const rndAvatar = Math.floor(Math.random() * 33)
    await import(`@/assets/images/avatars/jenny-everywhere-avatar.png`)
      .then((result) => (avatar.value = result.default))
      .catch((error) => console.error(error))
  }

  function note(note: string | string[]) {
    memory.value.create(note)
  }

  function tag(tag: Tag | Tag[]) {
    memory.value.add(tag)
  }

  function show() {
    display.value = true
  }

  function hide() {
    display.value = false
  }

  function toggle() {
    display.value = !display.value
  }

  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  function openDrawer() {
    drawer.value = true
  }

  function closeDrawer() {
    drawer.value = false
  }

  const themeTags = computed(() => {
    const tagList = [] as Tag[]
    Object.entries(myTheme.value.colors)
      .filter(([name]) => {
        return themeBase.includes(name)
      })
      .forEach(([name]) => {
        return tagList.push(new Tag(name, name, 'mdi-circle-opacity'))
      })
    return tagList as Tag[]
  })

  const handleKeydown = (event: KeyboardEvent) => {
    //console.log(`keydown: ${event.key}`)

    const ignoredTags = ['INPUT', 'TEXTAREA', 'SELECT']
    if (
      !event.target ||
      ignoredTags.includes((event.target as HTMLElement).tagName) ||
      (event.target as HTMLElement).isContentEditable
    ) {
      console.log('Ignoring keydown event')
      return
    }
    lastKey.value = event.key // Store the key that was pressed
    if (event.key === 'f') {
      toggleDrawer()
    }
  }

  return {
    display,
    name,
    avatar,
    attention,
    theme,
    memory,
    myTheme,
    themeTags,
    focus,
    getFocus,
    show,
    hide,
    toggle,
    focusOn,
    randomAvatar,
    note,
    tag,
    toggleDrawer,
    openDrawer,
    closeDrawer,
    drawer,
    themeBase,
    handleKeydown,
  }
})

export default usePersonaStore
