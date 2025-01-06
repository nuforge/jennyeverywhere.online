import { v4 as uuidv4 } from 'uuid'
// const NAMESPACE_SPECIAL_CHARS = ['-', '_', ' ', '.', ':', ',', ';', "'", '"', '[', ']', '{', '}', '|', ' ']
const NAMESPACE_SPLIT_CHAR = ':'
const TAG_WHITESPACE_REPLACER = '-'

const DEFAULT_COLOR = 'accent'
const DEFAULT_ICON = 'mdi-tag'

type Value = boolean | number | string | Tag | undefined
type Name = string
type Space = string | undefined

// If the Value of Tag is itself, then it [... is a Tag] ??? CoPilot's contribution to my comment.

class Tag {
  // System Attributes
  protected _id = uuidv4() // Unique ID
  protected _stamp: Date = new Date()
  protected _type: string = this.constructor.name
  protected _at: Value

  // Tag Attributes
  protected _name: Name
  protected _space?: Space
  protected _value?: Value

  constructor(name?: Value, value?: Value, origin?: Value) {
    const normalizedName = Tag.cleanValue(name ?? this._id)
    const { label, namespace } = Tag.splitTag(normalizedName.toString())
    this._name = label.trim()
    this._space = namespace?.trim()
    this._value = value
    this._at = origin
    console.log(this._name, this)
    return this
  }

  get color(): string {
    return this._value?.toString() ?? DEFAULT_COLOR
  }
  get icon(): string {
    return this._at?.toString() ?? DEFAULT_ICON
  }

  static cleanValue = (text: Value) => {
    return text !== undefined ? text.toString() : ''
  }
  static normalizeTagName = (name: string | number) => {
    return name.toString().trim().toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)
  }

  static splitTag = (tagName: string) => {
    const tagString = tagName.toString()
    const label = tagString.includes(NAMESPACE_SPLIT_CHAR)
      ? tagString.split(NAMESPACE_SPLIT_CHAR)[1]
      : tagString
    const namespace = tagString.includes(NAMESPACE_SPLIT_CHAR)
      ? tagString.split(NAMESPACE_SPLIT_CHAR)[0]
      : undefined
    return { label, namespace }
  }

  toString() {
    return this._space ? `${this._space}:${this._name}` : this._name
  }

  attributesToTags = () => {
    const attributes = {
      id: this._id,
      name: this._name,
      type: this._type,
      space: this._space,
    }
    const icons: { [key: string]: string } = {
      id: 'mdi-identifier',
      name: 'mdi-label-variant-outline',
      type: 'mdi-label-outline',
      space: 'mdi-tray',
    }

    return Object.entries(attributes)
      .map(([key, value]) => {
        if (value) {
          return new Tag(`${key}:${value}`, 'accent', icons[key as keyof typeof icons])
        }
        return undefined
      })
      .filter((tag): tag is Tag => tag !== undefined)
  }

  set(name: string, namespace: string) {
    this._name = name
    this._space = namespace
  }

  get value(): Value {
    return this._value
  }

  set value(value: Value) {
    this._value = value
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
}

export default Tag
export type { Value, Name, Space }
