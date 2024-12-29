import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useTheme } from 'vuetify'

export const useStateStore = defineStore('state', () => {
  const theme = ref('dark')
  const tags = ref(true)
  const add = ref(false)
  const dice = ref(false)
  const event = ref(false)
  const snackbar = ref(false)
  const drawer = ref(true)
  const dragging = ref(false)
  const vuetify = useTheme()

  const tagmanager = computed(() => drawer.value || dragging.value)

  function changeTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    vuetify.global.name.value = theme.value
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

  // Dice
  function toggleDice() {
    dice.value = !dice.value
  }

  function triggerSnackbar() {
    snackbar.value = true
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

  return {
    theme,
    tags,
    add,
    dice,
    drawer,
    snackbar,
    dragging,
    tagmanager,
    event,
    changeTheme,
    toggleTags,
    toggleDice,
    drawerToggle,
    drawerOpen,
    drawerClose,
    triggerSnackbar,
    eventOpen,
    eventClose,
    eventToggle,
    dragStart,
    dragEnd,
    dragDrop,
  }
})
