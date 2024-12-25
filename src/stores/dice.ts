import { ref } from 'vue'
import { defineStore } from 'pinia'
import Dice from '@/game/Dice'

export const useDiceStore = defineStore('dice', () => {
  const die = ref<Dice>(new Dice(20))

  function rollDice(dCount: number = 1) {
    return die.value.roll(dCount)
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

  return { die, rollDice, getResults, getFaces, getRolls }
})
