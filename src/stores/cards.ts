import { ref } from 'vue'
import { defineStore } from 'pinia'
import Card from '@/objects/game/Card'

const useCardStore = defineStore('cards', () => {
  const card = ref<Card>(new Card(0))
  const defaultTimeout = 4000
  const timeout = ref(defaultTimeout)
  const snackbar = ref(false)
  const lastKey = ref('')

  function clearCard() {
    card.value = new Card(20)
  }

  function revealCard() {
    return card.value
  }

  function drawCard(dCount: number = 1, showSnackbar: boolean = false) {
    clearCard()
    if (showSnackbar) triggerSnackbar()
    console.warn('drawCard. count:', dCount)
    return card.value
  }

  function cardList() {
    return [1, 2, 3]
  }

  function toString(pad: number = 1) {
    return card.value.toString().padStart(pad, '0')
  }
  function getResults() {
    return card.value
  }

  function getFaces() {
    return card.value
  }

  function clearSnackbar() {
    snackbar.value = false
  }

  function triggerSnackbar() {
    timeout.value = defaultTimeout
    if (snackbar.value) {
      clearSnackbar()
      setTimeout(() => {
        snackbar.value = true
      }, 1)
    } else {
      snackbar.value = true
    }
  }

  const handleKeydown = (event: KeyboardEvent) => {
    //console.log(`keydown: ${event.key}`)

    const ignoredTags = ['INPUT', 'TEXTAREA', 'SELECT']
    if (
      !event.target ||
      ignoredTags.includes((event.target as HTMLElement).tagName) ||
      (event.target as HTMLElement).isContentEditable
    ) {
      console.log('Ignoring keydown event')
      return
    }
    lastKey.value = event.key // Store the key that was pressed
    if (event.key === 'd') {
      drawCard()
    }
  }
  return {
    card,
    timeout,
    snackbar,
    cardList,
    drawCard,
    getResults,
    revealCard,
    toString,
    getFaces,
    clearCard,
    triggerSnackbar,
    handleKeydown,
    clearSnackbar,
  }
})

export default useCardStore
