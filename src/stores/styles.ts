import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStyleStore = defineStore('styles', () => {
  const closable = ref(false)
  const add = ref(false)
  const labels = ref(false)
  const icons = ref(false)

  return { closable, add, labels, icons }
})
