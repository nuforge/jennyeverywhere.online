import { ref } from 'vue'
import { defineStore } from 'pinia'
import Dice from '@/objects/game/Dice'
import Tag from '@/objects/NuTag'

const useDiceStore = defineStore('dice', () => {
  const die = ref<Dice>(new Dice(20))
  const defaultTimeout = 4000
  const timeout = ref(defaultTimeout)
  const snackbar = ref(false)
  const lastKey = ref('')

  function clearDice() {
    die.value = new Dice(20)
  }

  function rollDice(dCount: number = 1, showSnackbar: boolean = false) {
    clearDice()
    if (showSnackbar) triggerSnackbar()
    return die.value.roll(dCount)
  }

  function rollList() {
    return [1, 2, 3]
  }

  function getString(pad: number = 1) {
    return die.value.results.toString().padStart(pad, '0')
  }
  function getResults() {
    return die.value.results
  }

  function getTag() {
    return new Tag(`d20:${getString(2)}`, 'primary', `mdi-dice-d${getFaces()}`)
  }

  function getIcon(): string {
    return `mdi-dice-d${getFaces()}`
  }

  function getFaces() {
    return die.value.faces
  }
  function getRolls() {
    return die.value.rolls
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
      // console.log('Ignoring keydown event')
      return
    }
    lastKey.value = event.key // Store the key that was pressed
    if (event.key === 'd') {
      rollDice()
    }
  }
  return {
    die,
    timeout,
    snackbar,
    rollList,
    rollDice,
    getTag,
    getIcon,
    getResults,
    getString,
    getFaces,
    getRolls,
    clearDice,
    triggerSnackbar,
    handleKeydown,
    clearSnackbar,
  }
})

export default useDiceStore
