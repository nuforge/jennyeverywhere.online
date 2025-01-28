import { ref } from 'vue'
import { defineStore } from 'pinia'

// 'myCustomTheme'
import Tag from '@/objects/nu/Tag'
import Legend from '@/objects/tag/Legend'
import TagFactory from '@/objects/nu/TagFactory' // Import TagFactory

// Create a new store for different categories of sheets: attributes, image, description, actions
export interface Persona {
  name: string | null
  avatar: string | null
}

const usePersonaStore = defineStore('persona', () => {
  const display = ref(false)
  const name = ref<string | null>(null)
  const avatar = ref<string | null>(null)

  const lastKey = ref('')

  const focus = ref(TagFactory.create('mythological bird:Phoenix', {}))
  const attention = ref(new Legend())
  const memory = ref(new Legend())
  // Default to maintaining focus or no?
  function focusOn(tag: Tag, clear: boolean = false) {
    if (clear) {
      attention.value.clearTags()
    }
    if (!focus.value) {
      console.error('focus is undefined')
      focus.value = TagFactory.create('', {}) // Fallback to a new Tag if undefined
    }
    //console.log('focusOn', tag)
    return (focus.value = tag) // This updates the `focus` ref correctly
  }

  function getFocus() {
    return focus.value
  }

  async function randomAvatar() {
    //const rndAvatar = Math.floor(Math.random() * 33)
    await import(`@/assets/images/chatgpt/ee6ea922-3198-4bfb-8c11-c3171bc3f26b.webp`)
      .then((result) => (avatar.value = result.default))
      .catch((error) => console.error(error))
  }

  function note(note: string | string[]) {
    memory.value.create(note)
  }

  function tag(tag: Tag) {
    memory.value.addTag(tag)
  }

  function show() {
    display.value = true
  }

  function hide() {
    display.value = false
  }

  function toggle() {
    display.value = !display.value
  }

  const handleKeydown = (event: KeyboardEvent) => {
    //console.log(`keydown: ${event.key}`)

    const ignoredTags = ['INPUT', 'TEXTAREA', 'SELECT']
    if (
      !event.target ||
      ignoredTags.includes((event.target as HTMLElement).tagName) ||
      (event.target as HTMLElement).isContentEditable
    ) {
      // console.log('Ignoring keydown event')
      return
    }
    lastKey.value = event.key // Store the key that was pressed
    if (event.key === 'f') {
      display.value = true
    }
  }

  return {
    display,
    name,
    avatar,
    attention,
    memory,
    focus,
    getFocus,
    show,
    hide,
    toggle,
    focusOn,
    randomAvatar,
    note,
    tag,
    handleKeydown,
  }
})

export default usePersonaStore
