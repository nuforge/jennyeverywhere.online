import NuTag from '@/objects/nu/Tag'
import type { Value, Name, Space } from '@/objects/nu/Tag'

// NuCard class

//const NAMESPACE_SPLIT_CHAR = ' of '
//const TAG_WHITESPACE_REPLACER = '-'

class NuCard extends NuTag {
  protected _face: Value
  protected _value: Value = true

  protected _back: Value = 'card.back'

  // name, value, default ->
  // Name Color Icon
  constructor(value: Name, face?: Value, symbol?: Space) {
    super(value?.toString(), face?.toString(), symbol?.toString())
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
