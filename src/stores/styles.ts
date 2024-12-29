import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStyleStore = defineStore('styles', () => {
  const closable = ref(false)
  const labels = ref(false)
  const icons = ref(false)

  const remove = ref(false)
  const color = ref(true)

  return { closable, labels, icons, color, remove }
})
