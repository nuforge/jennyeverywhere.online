import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const theme = ref('dark')
  const tags = ref(true)
  const dice = ref(true)
  const drawer = ref(false)

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

  return { theme, tags, dice, drawer, changeTheme, toggleTags, toggleDice, toggleDrawer }
})
