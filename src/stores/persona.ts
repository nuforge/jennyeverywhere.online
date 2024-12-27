import { ref } from 'vue'
import { defineStore } from 'pinia'

// Create a new store for different categories of sheets: attributes, image, description, actions
export interface Persona {
  name: string | null
  avatar: string | null
}

export const usePersonaStore = defineStore('persona', () => {
  const display = ref(false)
  const name = ref<string | null>(null)
  const avatar = ref<string | null>(null)

  function show() {
    display.value = true
  }

  function hide() {
    display.value = false
  }

  function toggle() {
    display.value = !display.value
  }

  async function randomAvatar() {
    //const rndAvatar = Math.floor(Math.random() * 33)
    await import(`@/assets/images/avatars/jenny-everywhere-avatar-33.png`)
      .then((result) => (avatar.value = result.default))
      .catch((error) => console.error(error))
  }

  return { display, name, avatar, show, hide, toggle, randomAvatar }
})
