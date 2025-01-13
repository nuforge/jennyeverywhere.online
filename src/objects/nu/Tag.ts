import { v4 as uuidv4 } from 'uuid'
import type TagInterface from './TagInterface'

const NAMESPACE_SPLIT_CHAR = ':'
const VALUE_SPLIT_CHAR = '.'
const TAG_WHITESPACE_REPLACER = '-'

const DEFAULT_COLOR = 'accent'
const DEFAULT_ICON = 'mdi-tag-outline'

type Value = boolean | number | string | Tag | undefined
type Name = string
type Space = string | undefined

interface Keywords {
  space: string[]
  label: string[]
  value: string[]
}

// If the Value of Tag is itself, then it [... is a Tag] ??? CoPilot's contribution to my comment.

class Tag implements TagInterface {
  // System Attributes
  protected _id = uuidv4() // Unique ID
  protected _stamp: Date = new Date()
  protected _type: string = this.constructor.name
  protected _at: Value
  protected _split: string[] = []

  // Tag Attributes
  protected _name: string
  protected _space?: string
  protected _value?: Value

  protected _label: string
  protected _color?: string

  constructor(seed?: string, color?: Value, symbol?: Value) {
    const { space, label, value } = Tag.parseString(Tag.cleanValue(seed ?? this._id))

    this._space = space?.trim()
    this._label = label.trim()
    this._name = seed ? Tag.normalizeTagName(seed) : this._type
    this._value = value ? value : color ? color : this._type
    this._color = color?.toString()

    this._at = symbol
    return this
  }

  static cleanValue = (text: Value) => {
    return text !== undefined ? text.toString().trim() : ''
  }

  static normalizeTagName = (name: string | number) => {
    return name.toString().trim().toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)
  }

  static parseString(input: string): { space?: string; label: string; value?: string } {
    // Normalize the string: lowercase and replace spaces with hyphens
    const normalized = Tag.cleanValue(input)

    // Initialize result
    const result: { space?: string; label: string; value?: string } = { label: '' }

    // Split into space and the rest
    const [spaceLabel, valuePart] = normalized.split(NAMESPACE_SPLIT_CHAR) // ':' is the namespace separator
    if (valuePart !== undefined) {
      result.space = spaceLabel
      const [label, value] = valuePart.split(VALUE_SPLIT_CHAR) // '.' is the value separator
      result.label = label
      if (value !== undefined) result.value = value
    } else if (normalized.includes(VALUE_SPLIT_CHAR)) {
      // No colon found; split by period for label and value
      const [label, value] = spaceLabel.split(VALUE_SPLIT_CHAR) // '.' is the value separator
      result.label = label
      if (value !== undefined) result.value = value
    } else {
      // If neither colon nor period exists, the whole string is the label
      result.label = normalized
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
  static extractScopedKeywords(input: string): Keywords {
    const normalized = input.trim().toLowerCase().replace(/\s+/g, ' ') // Normalize spacing and case
    const [spaceLabel, valuePart] = normalized.split(':')
    const [space, labelPart] = spaceLabel.includes('.')
      ? spaceLabel.split('.')
      : [undefined, spaceLabel]
    const [label, value] = (valuePart || labelPart).split('.')

    const scopes: Keywords = {
      space: space ? Tag.extractPhrases(space) : [],
      label: Tag.extractPhrases(label),
      value: value ? Tag.extractPhrases(value) : [],
    }

    return scopes
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
    return this.reconstructString({ space: this._space, name: this._name, value: this._value })
  }

  reconstructString = ({
    space,
    name,
    value,
  }: {
    space?: Space
    name: string
    value?: Value
  }): string => {
    // Construct the string step-by-step, adding only existing parts
    let result = name // Start with the label, as it's always present
    if (space) {
      result = `${space}:${result}` // Add space if it exists
    }
    if (value) {
      result = `${result}.${value}` // Add value if it exists
    }
    return result
  }

  attributesToTags = () => {
    const attributes = {
      id: this._id,
      name: this._name,
      type: this._type,
      space: this._space,
      color: this.color,
      icon: this.icon,
      date: this.stamp.toLocaleDateString(),
      time: this.stamp.toLocaleTimeString(),
    }
    const icons: { [key: string]: string } = {
      id: 'mdi-identifier',
      name: 'mdi-label-variant-outline',
      type: 'mdi-label-outline',
      space: 'mdi-tray',
      color: 'mdi-circle-opacity',
      icon: this.icon,
      date: 'mdi-clock-outline',
      time: 'mdi-calendar-outline',
    }

    return Object.entries(attributes)
      .map(([key, value]) => {
        if (value) {
          return new Tag(`${key}:${value}`, DEFAULT_COLOR, icons[key as keyof typeof icons])
        }
        return undefined
      })
      .filter((tag): tag is Tag => tag !== undefined)
  }

  set(name: string, namespace: string) {
    this._name = name
    this._space = namespace
  }

  get color(): string {
    return this._color ?? DEFAULT_COLOR
  }

  set color(value: string) {
    this._color = value
  }

  set icon(value: string) {
    this._at = value
  }

  get icon(): string {
    return this._at?.toString() ?? DEFAULT_ICON
  }

  get symbol(): string {
    return this._name
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get label() {
    return this._label
  }

  set label(value: string) {
    this._label = value
  }

  get id() {
    return this._id
  }

  set id(value: string) {
    this._id = value
  }

  get type() {
    return this._type
  }

  set type(value: string) {
    this._type = value
  }

  get namespace(): string | undefined {
    return this._space
  }

  set namespace(value: string | undefined) {
    this._space = value
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
}

export default Tag
export type { Value, Name, Space }
