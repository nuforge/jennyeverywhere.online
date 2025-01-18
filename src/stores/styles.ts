import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import SettingsManager from '@/objects/SettingsManager'

export type SettingValue = string | number | boolean // Shared by Map and Record
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

  const remove = ref(false)
  const variants = ref('tonal')
  const filterThemeColors = ref([''])
  const filterBaseColors = ref([''])
  const filterColors = computed(() => [...filterThemeColors.value, ...filterBaseColors.value])

  const settings = ref(
    new SettingsManager({
      global: true,
      spaces: false,
      labels: true,
      colors: true,
      icons: true,
      badges: true,
      closable: false,
      logs: true,
      bodys: true,
      trays: true,
      titles: true,
      tooltips: true,
      variants: true,
    }),
  )

  const toggleSetting = (name: string): void => {
    settings.value.toggleSetting(name)
  }
  // How is global affecting Tag Cards?

  const set = (name: string, value: SettingValue): void => {
    settings.value.setSetting(name, value)
  }

  const checkGlobal = (name: string): boolean => {
    return Boolean(settings.value.get('global')) ? Boolean(settings.value.get(name)) : true
  }

  const get = (name: string) => {
    return settings.value.get(name)
  }

  return {
    set,
    get,
    variants,
    checkGlobal,
    settings,
    remove,
    chipVariants,
    filterThemeColors,
    filterBaseColors,
    filterColors,
    toggleSetting,
  }
})

export default useStyleStore
