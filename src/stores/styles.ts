import { ref, computed } from 'vue'
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
  const global = ref(true)
  const labels = ref(true)
  const colors = ref(true)
  const icons = ref(true)
  const values = ref(true)

  const logs = ref(true)
  const trays = ref(true)

  const variants = ref(chipVariants[0])

  const closable = ref(false)
  const remove = ref(false)

  const gLabels = computed(() => !global.value || labels.value)
  const gColors = computed(() => !global.value || colors.value)
  const gIcons = computed(() => !global.value || icons.value)
  const gVariants = computed(() => !global.value || variants.value)
  const gValues = computed(() => !global.value || values.value)

  const display = computed(() => ({
    labels: gLabels.value,
    colors: gColors.value,
    icons: gIcons.value,
    variants: gVariants.value,
    values: gValues.value,
  }))

  return {
    global,
    closable,
    labels,
    icons,
    colors,
    remove,
    values,
    logs,
    trays,
    variants,
    chipVariants,
    display,
  }
})

export default useStyleStore
