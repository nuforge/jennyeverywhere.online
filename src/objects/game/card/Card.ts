// Card class
export default class Card {
  protected _value: number | string | boolean
  protected _symbol?: string
  protected _show: boolean = false // Start Face Down?
  protected _back: string = 'card.back'

  constructor(value: number, symbol?: string, back?: string) {
    this._value = value
    this._symbol = symbol
    this._back = back || this._back // A message when face down or failing to reveal-check
    console.log('Card constructor')
  }

  get value(): number | string | boolean {
    return this._value
  }

  get symbol(): string | undefined {
    return this._symbol
  }

  get face(): string | undefined {
    return this._show ? '' : undefined
  }

  get faceUp(): number | string | boolean {
    return this.reveal(true)
  }
  // if faceDown is being asked: it will return the value of _show instead of the value of reveal()
  get faceDown() {
    const revealedValue = this.reveal(false)
    return typeof revealedValue === 'boolean' ? revealedValue : false
  }

  // Physical Mechanisms
  reveal(confirm: boolean = false): number | string | boolean {
    return this._show && confirm ? this._value : this._back
  }

  // FACE UP
  show() {
    return (this._show = true)
  }

  // FACE DOWN
  hide() {
    return (this._show = false)
  }

  // TOGGLE
  flip(): boolean {
    return (this._show = !this._show)
  }

  // FACING OR VALUE ??
  // if faceUp is being asked: it will return the value of _show instead of the value of reveal()

  toString(): string {
    return `${this._symbol} ${this._value}`
  }

  static create(value: number, symbol: string): Card {
    return new Card(value, symbol)
  }
}

class DeckofCards {}

export { Card, DeckofCards }
