import { ref } from 'vue'
import { defineStore } from 'pinia'
import Dice from '@/objects/game/Dice'

export const useDiceStore = defineStore('dice', () => {
  const die = ref<Dice>(new Dice(20))
  const defaultTimeout = 4000
  const timeout = ref(defaultTimeout)
  const snackbar = ref(false)

  function rollDice(dCount: number = 1) {
    triggerSnackbar()
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
  return {
    die,
    timeout,
    snackbar,
    rollList,
    rollDice,
    getResults,
    getString,
    getFaces,
    getRolls,
    triggerSnackbar,
    clearSnackbar,
  }
})
