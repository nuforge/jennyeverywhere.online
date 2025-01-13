import { v4 as uuidv4 } from 'uuid'

const NAMESPACE_SPLIT_CHAR = ':'
const TAG_WHITESPACE_REPLACER = '-'

class Tag {
  // System Attributes
  protected _id = uuidv4() // Unique ID
  protected _stamp: Date = new Date()
  protected _seed?: object | string | number | boolean = this.constructor.name
  protected _tag: Tag

  // string Attributes
  protected _name: string
  protected _space?: string

  constructor(seed: string) {
    //, color?: string, symbol?: string
    this._seed = Tag.cleanstring(seed)

    const { space, name } = Tag.parseString(this._seed)

    this._name = name ? Tag.cleanstring(name) : this._seed
    this._space = space ? Tag.cleanstring(space) : undefined
    this._tag = this
    return this
  }

  setName(name: string) {
    this._name = name
    return this
  }

  setSpace(space: string) {
    this._space = space
    return this
  }

  setStamp(stamp: Date) {
    this._stamp = stamp
    return this
  }

  setSeed(seed: object | string | number | boolean) {
    this._seed = seed
    return this
  }

  returnAs(object: object) {
    return Object.assign(object, this)
  }

  static cleanstring = (text: string) => {
    return text !== undefined ? text.toString().trim() : ''
  }

  static normalizeTagName = (name: string | number) => {
    return name.toString().trim().toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)
  }

  static parseString(input: string): { space?: string; name: string } {
    // Normalize the string: lowercase and replace spaces with hyphens
    const normalized = Tag.cleanstring(input)

    // Initialize result
    const result: { space?: string; name: string } = { name: '' }

    // Split into space and the rest
    const [space, name] = normalized.split(NAMESPACE_SPLIT_CHAR) // ':' is the namespace separator
    if (name !== undefined) {
      result.space = space
      result.name = name
    } else {
      // If neither colon nor period exists, the whole string is the name
      result.name = normalized
    }
    return result
  }

  static extractKeywords(input: string): { individual: string[]; grouped: string[] } {
    const normalized = input.trim().toLowerCase().replace(/\s+/g, ' ') // Normalize spacing and case
    const words = normalized.match(/\w+/g) || [] // Match individual words/numbers

    const individual = Array.from(new Set(words)) // Unique individual words
    const grouped = new Set<string>()

    // Generate grouped keywords (adjacent word pairs)
    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j <= words.length; j++) {
        const phrase = words.slice(i, j).join(' ')
        if (phrase.split(' ').length > 1) grouped.add(phrase)
      }
    }

    return {
      individual,
      grouped: Array.from(grouped),
    }
  }

  static extractScopedKeywords(input: string): string[] {
    const normalized = input.trim().toLowerCase().replace(/\s+/g, ' ') // Normalize spacing and case
    return normalized.split(':')
  }

  static extractPhrases(input: string): string[] {
    const words = input.match(/\w+/g) || []
    const phrases = new Set<string>()

    for (let i = 0; i < words.length; i++) {
      for (let j = i + 1; j <= words.length; j++) {
        const phrase = words.slice(i, j).join(' ')
        phrases.add(phrase)
      }
    }

    return Array.from(phrases)
  }

  toString() {
    return this.reconstructString({ space: this._space, name: this._name })
  }

  reconstructString = ({ space, name }: { space?: string; name: string }): string => {
    return space ? `${space}:${name}` : name
  }

  attributesToTags = () => {
    const attributes = {
      id: this._id,
      space: this._space,
      name: this._name,
      seed: this._seed,
      date: this.stamp.toLocaleDateString(),
      time: this.stamp.toLocaleTimeString(),
    }

    return Object.entries(attributes)
      .map(([key, value]) => {
        if (value) {
          return new Tag(`${key}:${value}`)
        }
        return undefined
      })
      .filter((tag): tag is Tag => tag !== undefined)
  }

  set(name: string, space: string) {
    this._name = name
    this._space = space
    return this
  }

  get label() {
    return this._name
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get id() {
    return this._id
  }

  get seed() {
    return this._seed ?? ''
  }

  get tag() {
    return this as Tag
  }

  set seed(value: object | string | number | boolean) {
    this._seed = value
  }

  get space(): string | undefined {
    return this._space
  }

  set space(value: string | undefined) {
    this._space = value
  }

  get stamp(): Date {
    return this._stamp
  }

  set stamp(value: Date) {
    this._stamp = value
  }
  static clone(tag: Tag): Tag {
    const newTag = new Tag(tag._seed as string)
    Object.assign(newTag, tag)
    return newTag
  }
}

export default Tag
