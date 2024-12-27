import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStyleStore = defineStore('styles', () => {
  const closable = ref(false)
  const labels = ref(false)
  const icons = ref(false)

  return { closable, labels, icons }
})
