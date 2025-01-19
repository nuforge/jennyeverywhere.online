import Card from '@/objects/game/NuCard'
import ranks from '@/assets/game/poker.ranks.json'
import suits from '@/assets/game/poker.suits.json'

class CardLibrary {
  private _cards: Card[] = []

  constructor() {}

  newDeck() {
    const newDeck: Card[] = []
    for (const s of Object.values(suits)) {
      for (const r of Object.values(ranks)) {
        const card = new Card(`${s.name}:${r.name}`, { color: s.color, icon: s.icon })
        newDeck.push(card)
      }
    }
    return newDeck
  }

  get cards() {
    return this._cards
  }

  get top() {
    return this._cards[0]
  }

  get library() {
    return this._cards as Card[]
  }

  reset() {
    return (this._cards = this.newDeck()) // reuse existing newDeck from [src/stores/playingcards.ts](src/stores/playingcards.ts)
  }

  empty() {
    return (this._cards = [])
  }

  shuffle() {
    let currentIndex = this._cards.length
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[this._cards[currentIndex], this._cards[randomIndex]] = [
        this._cards[randomIndex],
        this._cards[currentIndex],
      ]
    }
  }

  draw(count = 1) {
    return this._cards.splice(0, count)
  }

  add(card: Card | Card[]) {
    return this._cards.push(...(Array.isArray(card) ? card : [card]))
  }

  addToBottom(card: Card | Card[]) {
    return this._cards.unshift(...(Array.isArray(card) ? card : [card]))
  }

  peek(index = 0) {
    return this._cards[index]
  }

  cut(index = Math.floor(this._cards.length / 2)) {
    const top = this._cards.splice(0, index)
    return this._cards.push(...top)
  }

  get length() {
    return this._cards.length
  }

  get remaining() {
    return this._cards
  }

  discard(card: Card) {
    return this._cards.push(card)
  }

  isFaceCard(card: Card) {
    const rank = card.rank?.toString().toLowerCase()
    return ['jack', 'queen', 'king'].includes(rank || '')
  }

  getSuit(card: Card) {
    return card.suit
  }

  getRank(card: Card) {
    return card.rank
  }

  getCard(card: Card) {
    return card
  }
}

export default CardLibrary
