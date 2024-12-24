import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const theme = ref('dark')
  const drawer = ref(false)
  const dice = ref(false)

  function changeTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function toggleMenu() {
    drawer.value = !drawer.value
  }

  function toggleDice() {
    dice.value = !dice.value
  }

  return { theme, drawer, dice, changeTheme, toggleMenu, toggleDice }
})
