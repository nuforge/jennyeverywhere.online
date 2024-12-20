import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSheetStore = defineStore('bottom-sheet', () => {
  const display = ref(false)

  function show() {
    display.value = true
  }

  function hide() {
    display.value = false
  }

  function toggle() {
    display.value = !display.value
  }

  return { display, show, hide, toggle }
})
