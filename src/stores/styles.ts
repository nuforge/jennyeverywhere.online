import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStyleStore = defineStore('styles', () => {
  const labels = ref(true)
  const colors = ref(true)
  const icons = ref(true)

  const logs = ref(true)
  const trays = ref(true)

  const closable = ref(false)
  const remove = ref(false)

  return { closable, labels, icons, colors, remove, logs, trays }
})
