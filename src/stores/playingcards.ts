import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import NuCard from '@/objects/game/NuCard'
import CardLibrary from '@/objects/game/CardLibrary'

export const useCardStore = defineStore('cards', () => {
  const deck = ref<CardLibrary>(new CardLibrary())
  const hand = ref<CardLibrary>(new CardLibrary())
  const discardPile = ref<NuCard[]>([])
  const topCard = computed(() => deck.value.top)

  function shuffle() {
    deck.value.shuffle()
  }

  function cut(index = Math.floor(deck.value.length / 2)) {
    const top = deck.value.draw(index)
    deck.value.add(top)
  }

  function draw(count = 1) {
    const cards = deck.value.draw(count)
    hand.value.add(cards)
    console.log(hand.value.library)
    return cards
  }

  function reset() {
    deck.value.reset()
    hand.value.empty()
    discardPile.value = []
  }

  function discard(card: NuCard) {
    discardPile.value.push(card)
  }

  function peek(index = 0) {
    return deck.value.peek(index)
  }

  function isFaceCard(card: NuCard) {
    const rank = card.rank?.toString().toLowerCase()
    return ['jack', 'queen', 'king'].includes(rank || '')
  }

  function getSuit(card: NuCard) {
    return card.suit
  }

  return {
    deck,
    hand,
    discardPile,
    shuffle,
    topCard,
    reset,
    top,
    draw,
    discard,
    peek,
    cut,
    isFaceCard,
    getSuit,
  }
})

export default useCardStore
