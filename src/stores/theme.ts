import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useTheme } from 'vuetify'
import Tag from '@/objects/nu/Tag'
import Legend from '@/objects/tag/Legend'

import { findByKey, namedColors } from '@/objects/color/ColorNames'

// Create a new store for different categories of sheets: attributes, image, description, actions
export interface Theme {
  name: string | null
  avatar: string | null
}

const useThemeStore = defineStore('theme', () => {
  const display = ref(false)
  const name = ref<string | null>(null)
  const avatar = ref<string | null>(null)
  const drawer = ref(false)
  const rail = ref(false)
  const permanent = ref(false)
  const menuSelection = ref([''])

  const theme = useTheme()
  const lastKey = ref('')
  const customColors = ref(new Legend())

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

  function addCustomColor(name: string, hex: string) {
    const cTag = new Tag(hex).attribute('color', name).attribute('icon', 'mdi-circle-opacity')
    customColors.value.addTag(cTag)
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
        const tagToAdd = new Tag(name)
          .attribute('color', name)
          .attribute('icon', 'mdi-circle-opacity')
        legend.addTag(tagToAdd)
      })
    return legend
  })

  const themeTags = computed(() => {
    return themeLegend.value.tags
  })

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
      menuSelection.value = ['focus']
      toggleDrawer()
    }
    if (event.key === 'g') {
      menuSelection.value = ['global']
      openDrawer()
    }
    if (event.key === 'h') {
      menuSelection.value = ['history']
      openDrawer()
    }
    if (event.key === 'r') {
      toggleRail()
    }
    if (event.key === 'Escape') {
      closeDrawer()
    }
  }

  return {
    display,
    name,
    avatar,
    theme,
    myTheme,
    themeTags,
    themeLegend,
    focus,
    rail,
    permanent,
    menuSelection,
    customColors,
    show,
    hide,
    toggle,
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
    addCustomColor,
  }
})

export default useThemeStore
