import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Tag {
  text: string
  icon: string
  color: string
  count?: number
}

export const useTagStore = defineStore('selection', () => {
  const selection = ref([]) // Initial value is 3
  const tags = ref<Tag[]>([
    { text: 'Jenny Everywhere', icon: 'mdi-account-circle-outline', color: 'teal' },
    { text: 'portal', icon: 'mdi-orbit', color: 'green' },
    { text: 'window', icon: 'mdi-window-closed-variant', color: 'primary' },
    { text: 'jetpack', icon: 'mdi-rocket-launch', color: 'warning' },
    { text: 'flamethrower', icon: 'mdi-fire', color: 'error' },
    { text: 'confidence', icon: 'mdi-emoticon-cool', color: 'yellow' },
    { text: 'dude with a mohawk', icon: 'mdi-face-man', color: 'orange' },
    { text: 'Control', icon: '$sta-control', color: 'teal' },
  ])

  // Actions
  const addTag = (
    newText: string = 'tag',
    newIcon: string = 'mdi-tag-outline',
    newColor: string = 'primary',
  ) => {
    tags.value.push({ text: newText, icon: newIcon, color: newColor })
  }

  return { selection, tags, addTag }
})
