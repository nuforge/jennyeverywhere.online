import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Card from '@/objects/game/card/Card'
import Tag from '@/objects/nu/Tag'
import TagFactory from '@/objects/nu/TagFactory' // Import TagFactory

// Poker Playing Card class
class PokerPlayingCard extends Card {
  constructor(rank: number, suit: string) {
    super(rank, suit)
    console.log('PokerPlayingCard constructor: ', this.toString())
  }

  toString(): string {
    return `${this._value} of ${this._symbol}`
  }
}

const useCardStore = defineStore('cards', () => {
  const card = ref<PokerPlayingCard>(new Card(0))
  const defaultTimeout = 4000
  const timeout = ref(defaultTimeout)
  const snackbar = ref(false)

  const suits = ['spade', 'heart', 'club', 'diamond']
  const colorList: Record<string, string> = {
    spade: 'primary',
    heart: 'secondary',
    club: 'success',
    diamond: 'warning',
  }
  const ranks = [
    'ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'jack',
    'queen',
    'king',
    'joker',
  ]
  const rankIcons: Record<string, string> = {
    joker: 'mdi-star',
    ace: 'mdi-chess-bishop',
    '10': 'mdi-chess-rook',
    jack: 'mdi-chess-knight',
    queen: 'mdi-chess-queen',
    king: 'mdi-chess-king',
  }

  function clearCard() {
    card.value = new Card(0)
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

  const DeckOfCards = computed(() => {
    const deck: Tag[] = []
    const solid = false
    for (const suit of suits) {
      for (const rank of ranks) {
        const newIcon = `mdi-cards-${suit}`
        const append = solid ? `${newIcon}` : `${newIcon}` // FUTURE OUTLINE CHECK
        //console.log(append)
        const tag = TagFactory.create(`${suit}:${rank}.${rank}`, {
          color: colorList[suit],
          icon: append,
        })
        deck.push(tag)
      }
    }
    return deck
  })

  const DeckOfChess = computed(() => {
    const deck: Tag[] = []
    const solid = false
    for (const suit of suits) {
      for (const rank of ranks) {
        const newIcon = rankIcons[rank.toString()]
          ? rankIcons[rank]
          : typeof rank === 'number'
            ? `mdi-numeric-${rank}-circle`
            : `mdi-chess-pawn`
        const append = solid ? `${newIcon}` : `${newIcon}` // FUTURE OUTLINE CHECK
        //console.log(append)
        const tag = TagFactory.create(`${suit}:${rank}.${rank}`, {
          color: colorList[suit],
          icon: append,
        })
        deck.push(tag)
      }
    }
    return deck
  })

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
    DeckOfCards,
    DeckOfChess,
  }
})

export default useCardStore
