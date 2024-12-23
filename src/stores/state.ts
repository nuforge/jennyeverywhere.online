import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const theme = ref('dark')
  const drawer = ref(false)

  function changeTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function toggleMenu() {
    drawer.value = !drawer.value
  }

  return { theme, drawer, changeTheme, toggleMenu }
})
