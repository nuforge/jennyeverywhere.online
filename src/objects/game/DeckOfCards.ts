import { v4 as uuidv4 } from 'uuid'
import Tag from '@/objects/nu/Tag'
import NuCard from '@/objects/game/NuCard'

class DeckOfCards {
  protected _id = uuidv4() // Unique ID
  protected _cards: NuCard[] = []

  constructor(name: string) {
    this._id = name

    return this.pokerDeck()
  }

  pokerDeck() {
    const suits = ['♠', '♣', '♥', '♦']
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        this.addCard(new NuCard(rank, suit))
      })
    })

    return this
  }

  shuffleDeck() {
    this._cards = this._cards.sort(() => Math.random() - 0.5)
    return this
  }

  get id() {
    return this._id
  }

  get cards() {
    return this._cards
  }

  addCard(newCard: NuCard) {
    this._cards.push(newCard)
    return this
  }

  addCards(newCards: NuCard[]) {
    newCards.forEach((card) => {
      this._cards.push(card)
    })
    return this
  }

  clearCards() {
    this._cards = []
    return this
  }

  selection = (selection: Tag[]) => {
    return this.cards.filter((card) => selection.includes(card))
  }

  getCard(name: string) {
    return this.cards.find((card) => card.name === name)
  }

  getCardByTag(tag: Tag) {
    return this.cards.filter((card) => card.has(tag.name))
  }

  getCardByTags(tags: Tag[]) {
    return this.cards.filter((card) => tags.every((tag) => card.has(tag.name)))
  }

  getCardByTagNames(tagNames: string[]) {
    return this.cards.filter((card) => tagNames.every((tagName) => card.has(tagName)))
  }

  getCardByTagValues(tagValues: string[]) {
    return this.cards.filter((card) => tagValues.every((tagValue) => card.has(tagValue)))
  }

  getCardByTagValue(tagName: string, tagValue: string) {
    return this.cards.filter((card) => card.has(tagName) && card.has(tagValue))
  }

  getCardByTagValuePairs(tagPairs: [string, string][]) {
    return this.cards.filter((card) =>
      tagPairs.every(([tagName, tagValue]) => card.has(tagName) && card.has(tagValue)),
    )
  }

  getCardByTagValuePairsOr(tagPairs: [string, string][]) {
    return this.cards.filter((card) =>
      tagPairs.some(([tagName, tagValue]) => card.has(tagName) && card.has(tagValue)),
    )
  }

  getCardByTagValuePairsAnd(tagPairs: [string, string][]) {
    return this.cards.filter((card) =>
      tagPairs.every(([tagName, tagValue]) => card.has(tagName) && card.has(tagValue)),
    )
  }

  getCardByTagValuePairsNot(tagPairs: [string, string][]) {
    return this.cards.filter((card) =>
      tagPairs.every(([tagName, tagValue]) => !card.has(tagName) && !card.has(tagValue)),
    )
  }

  getCardByTagValuePairsXor(tagPairs: [string, string][]) {
    return this.cards.filter((card) =>
      tagPairs.some(([tagName, tagValue]) => card.has(tagName) && card.has(tagValue)),
    )
  }

  getCardByTagValuePairsNand(tagPairs: [string, string][]) {
    return this.cards.filter((card) =>
      tagPairs.every(([tagName, tagValue]) => !card.has(tagName) && !card.has(tagValue)),
    )
  }

  getCardByTagValuePairsNor(tagPairs: [string, string][]) {
    return this.cards.filter((card) =>
      tagPairs.every(([tagName, tagValue]) => !card.has(tagName) && !card.has(tagValue)),
    )
  }

  getCardByTagValuePairsXnor(tagPairs: [string, string][]) {
    return this.cards.filter((card) =>
      tagPairs.some(([tagName, tagValue]) => !card.has(tagName) && !card.has(tagValue)),
    )
  }

  getCardByTagValuePairsNxor(tagPairs: [string, string][]) {
    return this.cards.filter((card) =>
      tagPairs.every(([tagName, tagValue]) => !card.has(tagName) && !card.has(tagValue)),
    )
  }
}

export default DeckOfCards
