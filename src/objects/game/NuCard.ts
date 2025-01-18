import Tag from '@/objects/nu/Tag'

type Value = boolean | number | string | Tag | undefined
type Space = string | undefined
// NuCard class

//const NAMESPACE_SPLIT_CHAR = ' of '
//const TAG_WHITESPACE_REPLACER = '-'

class NuCard extends Tag {
  protected _face: Value
  protected _value: Value = true
  protected _back: Value = 'card.back'

  // name, value, default ->
  // Name Color Icon
  constructor(value: Value, face?: Value, symbol?: Space) {
    super(value?.toString())
    this.add('color', face?.toString() || 'text')
    this.add('icon', symbol?.toString() || 'mdi-cards')
    //this.add('value', value)
    this.rank = value
    this.suit = symbol
    return this
  }
  protected ask(question?: boolean, answer?: boolean): boolean {
    return question && answer ? true : false
  }
  protected answer(question?: boolean, answer?: boolean) {
    return question && answer ? answer : false
  }
  protected question(question?: boolean, answer?: boolean) {
    return question && answer ? question : false
  }

  has(check: string): boolean {
    return this.rank === check || this.suit === check
  }

  get rank(): Value {
    return this._value
  }

  set rank(value: Value) {
    this._value = value
  }

  get suit(): Space {
    return this._space
  }

  set suit(value: Space) {
    this._space = value
  }

  get face(): Value {
    return this._space
  }

  set face(value: Value) {
    this._face = value
  }
}

export default NuCard
