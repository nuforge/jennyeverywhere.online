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
  // IS global affecting everyhing? Yes | No?
  const global = ref(true)

  // How is global affecting Tags?
  const labels = ref(true)
  const colors = ref(true)
  const icons = ref(true)
  const values = ref(true)
  const tooltips = ref(true)
  const variants = ref('tonal') // text as default?

  const filterThemeColors = ref([''])
  const filterBaseColors = ref([''])

  // How is global affecting Tag Cards?
  const logs = ref(true)
  const trays = ref(true)

  const closable = ref(false)
  const remove = ref(false)

  const gLabels = computed(() => !global.value || labels.value)
  const gColors = computed(() => !global.value || colors.value)
  const gIcons = computed(() => !global.value || icons.value)
  const gVariants = computed(() => !global.value || variants.value)
  const gValues = computed(() => !global.value || values.value)
  const gTooltips = computed(() => !global.value || tooltips.value)
  const filterColors = computed(() => [...filterThemeColors.value, ...filterBaseColors.value])

  const display = computed(() => ({
    labels: gLabels.value,
    colors: gColors.value,
    icons: gIcons.value,
    variants: gVariants.value,
    values: gValues.value,
    tooltips: gTooltips.value,
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
    tooltips,
    variants,
    chipVariants,
    display,
    filterThemeColors,
    filterBaseColors,
    filterColors,
  }
})

export default useStyleStore
