import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useTheme } from 'vuetify'

export const useStateStore = defineStore('state', () => {
  const theme = ref('dark')
  const tags = ref(true)
  const add = ref(false)
  const dice = ref(false)
  const snackbar = ref(false)
  const drawer = ref(false)
  const vuetify = useTheme()

  function changeTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    vuetify.global.name.value = theme.value
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
    add,
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
