import { ref } from 'vue'
import { defineStore } from 'pinia'
import NuCard from '@/objects/game/NuCard'
import Tag from '@/objects/nu/Tag'
import ranks from '@/assets/game/poker.ranks.json'
import suits from '@/assets/game/poker.suits.json'

const useCardStore = defineStore('cards', () => {
  const card = ref<NuCard>(new NuCard('0'))
  const deck = ref<Tag[]>([])
  const defaultTimeout = 4000
  const timeout = ref(defaultTimeout)
  const snackbar = ref(false)

  const pokerRanks = ranks
  const pokerSuits = suits

  function resetDeck() {
    deck.value.splice(0, deck.value.length)
    createDeck()
  }

  function createDeck() {
    Object.values(pokerSuits).forEach((suit) => {
      Object.values(pokerRanks).forEach((rank) => {
        const card = new NuCard(`${suit.name}:${rank.name}`)
          .add('color', suit.color)
          .add('icon', suit.icon)
          .add('symbol', `${rank.symbol}${suit.symbol}`)
        deck.value.push(card)
      })
    })
  }

  function shuffleDeck() {
    deck.value = deck.value.sort(() => Math.random() - 0.5)
  }

  function clearCard() {
    card.value = new NuCard(0)
  }

  function revealCard() {
    return card.value
  }

  function drawCard(dCount: number = 1) {
    clearCard()
    console.warn('drawCard. count set to only return 1:', dCount)
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

  return {
    deck,
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
    createDeck,
    resetDeck,
    shuffleDeck,
  }
})

export default useCardStore
