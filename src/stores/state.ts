import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useTheme } from 'vuetify'

export const useStateStore = defineStore('state', () => {
  const theme = ref('myCustomTheme')
  const tags = ref(true)
  const add = ref(false)
  const dice = ref(false)
  const event = ref(false)
  const drawer = ref(false)
  const details = ref(false)
  const dragging = ref(false)
  const navigation = ref(false)
  const undo = ref(false)
  const vuetify = useTheme()
  const lastKey = ref('')

  const tagmanager = computed(() => drawer.value || dragging.value)

  function changeTheme() {
    theme.value = theme.value === 'myCustomTheme' ? 'light' : 'myCustomTheme'
    vuetify.global.name.value = theme.value
    //console.log(vuetify.global.current.value.colors.background)
  }

  // Drawer
  function drawerOpen() {
    drawer.value = true
  }
  function drawerClose() {
    drawer.value = false
  }
  function drawerToggle() {
    drawer.value = !drawer.value
  }

  // Tags
  function toggleTags() {
    tags.value = !tags.value
  }

  // Tags Details
  function toggleDetails() {
    details.value = !details.value
  }

  function openDetails() {
    details.value = true
  }
  function closeDetails() {
    details.value = false
  }
  // Dice
  function toggleDice() {
    dice.value = !dice.value
  }

  // Event
  function eventOpen() {
    event.value = true
  }
  function eventClose() {
    event.value = false
  }
  function eventToggle() {
    event.value = !event.value
  }

  // Dragging

  function dragStart() {
    dragging.value = true
  }
  function dragEnd() {
    dragging.value = false
  }
  function dragDrop() {
    dragging.value = false
  }

  const handleKeydown = (event: KeyboardEvent) => {
    const ignoredTags = ['INPUT', 'TEXTAREA', 'SELECT']

    console.log(`Key pressed: ${event.key}`)
    if (
      !event.target ||
      ignoredTags.includes((event.target as HTMLElement).tagName) ||
      (event.target as HTMLElement).isContentEditable
    ) {
      console.log('Ignoring keydown event')
      return
    }
    lastKey.value = event.key // Store the key that was pressed
    if (event.ctrlKey && event.key === 'z') {
      undo.value = true
    }
    if (event.key === 'd') {
      toggleDetails()
    }
    if (event.key === 't' || event.code === 'Space') {
      drawerToggle()
      event.preventDefault()
    }
    if (event.key === 'Escape') {
      drawerClose()
      details.value = false
    }
  }

  return {
    theme,
    tags,
    add,
    undo,
    dice,
    drawer,
    details,
    dragging,
    tagmanager,
    navigation,
    handleKeydown,
    event,
    toggleDetails,
    openDetails,
    closeDetails,
    changeTheme,
    toggleTags,
    toggleDice,
    drawerToggle,
    drawerOpen,
    drawerClose,
    eventOpen,
    eventClose,
    eventToggle,
    dragStart,
    dragEnd,
    dragDrop,
  }
})
