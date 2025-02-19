import Tag from '@/objects/nu/Tag'

type Value = boolean | number | string | Tag | undefined
type Space = string | undefined
// NuCard class

//const NAMESPACE_SPLIT_CHAR = ' of '
//const TAG_WHITESPACE_REPLACER = '-'

type TagAttributes = {
  seed?: string
  [key: string]: string | number | boolean | Tag | unknown | undefined // Allow flexibility for additional attributes
}
class NuCard<T extends TagAttributes = { seed?: string }> extends Tag {
  protected _face: Value
  protected _back: Value = 'card.back'

  // name, value, default ->
  // Name Color Icon
  constructor(value: Value, initialAttributes: T = {} as T) {
    super(value?.toString(), initialAttributes)
    //this.add('value', value)
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
    return this._name
  }

  set rank(value: Value) {
    this._name = value?.toString() ?? ''
  }

  get suit(): Space {
    return this._space
  }

  set suit(value: Space) {
    this._space = value
  }

  get face(): Value {
    return this._face ?? this._space
  }

  set face(value: Value) {
    this._face = value
  }
}

export default NuCard
