import { ref } from 'vue'
import { defineStore } from 'pinia'
import Dice from '@/objects/game/Dice'
import Tag from '@/objects/nu/NuTag'

const useDiceStore = defineStore('dice', () => {
  const faces = ref([4, 6, 8, 10, 12, 20])
  const colors = ref(['accent', 'secondary', 'success', 'warning', 'error', 'primary'])
  const die = ref<Dice>(new Dice(20))
  const defaultTimeout = 4000
  const timeout = ref(defaultTimeout)
  const snackbar = ref(false)
  const lastKey = ref('')

  function nextDie() {
    const currentIndex = faces.value.indexOf(die.value.faces)
    const nextIndex = (currentIndex + 1) % faces.value.length
    die.value = new Dice(faces.value[nextIndex])
  }

  function newDie(faces: number) {
    return (die.value = new Dice(faces))
  }

  function clearDice() {
    die.value = newDie(die.value.faces)
  }

  function rollDice(dCount: number = 1, showSnackbar: boolean = true) {
    clearDice()
    if (showSnackbar) triggerSnackbar()
    return die.value.roll(dCount)
  }

  function rollList() {
    return [1, 2, 3]
  }

  function getColor() {
    return colors.value[faces.value.indexOf(die.value.faces)]
  }

  function getString(pad: number = 1) {
    return die.value.value.toString().padStart(pad, '0')
  }
  function getResults() {
    return die.value.value
  }

  function getTag() {
    const diecolor = colors.value[faces.value.indexOf(die.value.faces)]
    return new Tag(`${getType()}:${getString(2)}`, diecolor, `mdi-dice-${getType()}`)
  }

  function getIcon(): string {
    return `mdi-dice-${getType()}`
  }

  function getType() {
    return die.value.type
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
    faces,
    timeout,
    snackbar,
    rollList,
    rollDice,
    nextDie,
    getTag,
    getIcon,
    getColor,
    getType,
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
