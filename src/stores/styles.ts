import { ref } from 'vue'
import { defineStore } from 'pinia'

export const chipVariants: Array<'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'> = [
  'text',
  'flat',
  'elevated',
  'tonal',
  'outlined',
  'plain',
]

const useStyleStore = defineStore('styles', () => {
  const labels = ref(true)
  const colors = ref(true)
  const icons = ref(true)

  const logs = ref(true)
  const trays = ref(true)

  const variant = ref(chipVariants[3])

  const closable = ref(false)
  const remove = ref(false)

  return { closable, labels, icons, colors, remove, logs, trays, variant, chipVariants }
})

export default useStyleStore
