import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 'myCustomTheme'

import { useTheme } from 'vuetify'
import Tag from '@/objects/NuTag'
import Legend from '@/objects/Legend'

import { findByKey, namedColors } from '@/objects/color/ColorNames'

// Create a new store for different categories of sheets: attributes, image, description, actions
export interface Persona {
  name: string | null
  avatar: string | null
}

const usePersonaStore = defineStore('persona', () => {
  const display = ref(false)
  const name = ref<string | null>(null)
  const avatar = ref<string | null>(null)
  const drawer = ref(false)
  const rail = ref(false)
  const permanent = ref(false)

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

  function getThemeHexByName(name: string) {
    if (!myTheme.value.colors[name]) {
      return findByKey(namedColors, name)
    }
    return myTheme.value.colors[name]
  }

  // Default to maintaining focus or no?
  function focusOn(tag: Tag, clear: boolean = false) {
    if (clear) {
      attention.value.clearTags()
    }
    if (!focus.value) {
      console.error('focus is undefined')
      focus.value = new Tag() // Fallback to a new Tag if undefined
    }
    //console.log('focusOn', tag)
    return (focus.value = tag) // This updates the `focus` ref correctly
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

  function tag(tag: Tag) {
    memory.value.addTag(tag)
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

  function toggleRail() {
    rail.value = !rail.value
  }
  function openRail() {
    rail.value = true
  }

  function closeRail() {
    rail.value = false
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

  /// WTF am I doing here?
  // Add theme colors as tags to a legend... I think
  // Mutating in a computed is not great... I think
  const themeLegend = computed(() => {
    const legend = new Legend()
    Object.entries(myTheme.value.colors)
      .filter(([name]) => themeBase.includes(name))
      .map(([name]) => {
        const tagToAdd = new Tag(name, name, 'mdi-circle-opacity')
        legend.addTag(tagToAdd)
      })
    return legend
  })

  const themeTags = computed(() => {
    return themeLegend.value.tags
  })

  const handleKeydown = (event: KeyboardEvent) => {
    //console.log(`keydown: ${event.key}`)

    const ignoredTags = ['INPUT', 'TEXTAREA', 'SELECT']
    if (
      !event.target ||
      ignoredTags.includes((event.target as HTMLElement).tagName) ||
      (event.target as HTMLElement).isContentEditable
    ) {
      // console.log('Ignoring keydown event')
      return
    }
    lastKey.value = event.key // Store the key that was pressed
    if (event.key === 'f') {
      toggleDrawer()
    }
    if (event.key === 'r') {
      toggleRail()
    }
  }

  const copyToClipboard = async (name: string) => {
    try {
      const textToCopy = myTheme.value.colors[name].toString().replace('#', '')
      await navigator.clipboard.writeText(textToCopy)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  async function pickColor(name: string) {
    if (window.EyeDropper) {
      const eyeDropper = new window.EyeDropper()
      try {
        const result = await eyeDropper.open()
        if (result.sRGBHex !== null) {
          const updatedColors = { ...myTheme.value.colors }
          updatedColors[name] = result.sRGBHex
          myTheme.value = { ...myTheme.value, colors: updatedColors }
        }
        console.log('EyeDropper', result.sRGBHex)
      } catch (error) {
        console.error('EyeDropper canceled or failed', error)
      }
    } else {
      console.error('EyeDropper API is not supported in this browser.')
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
    themeLegend,
    focus,
    rail,
    permanent,
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
    toggleRail,
    openRail,
    closeRail,
    drawer,
    themeBase,
    handleKeydown,
    copyToClipboard,
    pickColor,
    getThemeHexByName,
  }
})

export default usePersonaStore
