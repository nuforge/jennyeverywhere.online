import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const theme = ref('dark')
  const tags = ref(true)
  const dice = ref(false)
  const snackbar = ref(false)
  const drawer = ref(true)

  function changeTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function toggleDrawer() {
    drawer.value = !drawer.value
  }
  function toggleTags() {
    tags.value = !tags.value
  }

  function toggleDice() {
    dice.value = !dice.value
  }

  function triggerSnackbar() {
    snackbar.value = true
  }

  return {
    theme,
    tags,
    dice,
    drawer,
    snackbar,
    changeTheme,
    toggleTags,
    toggleDice,
    toggleDrawer,
    triggerSnackbar,
  }
})
