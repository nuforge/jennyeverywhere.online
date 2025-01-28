import StringUtils from '@/utils/StringUtils'
import TagFactory from '@/objects/nu/TagFactory'
import { NAMESPACE_SPLIT_CHAR } from '@/utils/StringUtils'

export type TagValue = Tag | string | number | boolean | undefined | null
export type TagAttributes = Record<string, TagValue>

class Tag {
  // System Attributes
  protected readonly _id: string // Unique ID
  protected _stamp: Date = new Date()

  // Tag Attributes
  protected _attributes: TagAttributes

  constructor(seed: string, attributes: TagAttributes = {}) {
    this._id = crypto.randomUUID()
    this._attributes = attributes
    this.setSeed(seed)
  }

  add(seed: string): Tag {
    // Parse the string in the format 'name:space'
    const { space, name } = StringUtils.parseString(seed)

    const key = space ?? seed

    // Now handle space and name without manually checking separately
    if (!(key in this._attributes)) {
      this._attributes[key] = name // Add new attribute if not already set
    }
    return this
  }

  attribute(key: string, value?: TagValue): Tag | TagValue | undefined {
    if (value !== undefined) {
      // Set the value for the attribute (if provided)
      this._attributes[key] = value
      return this // Return the instance to allow method chaining
    }
    // Otherwise, just return the value (getter behavior)
    return this._attributes[key] || undefined
  }

  hasAttribute(key: string): boolean {
    return key in this._attributes
  }
  // Getter for all attributes
  get allAttributes() {
    return this._attributes
  }

  // Serialize the tag for storage or transfer
  serialize(): string {
    return JSON.stringify({
      id: this._id,
      attributes: this._attributes,
    })
  }

  static deserialize(json: string): Tag {
    const { space, name, attributes } = JSON.parse(json)
    const tag = TagFactory.create(`${space ? space + NAMESPACE_SPLIT_CHAR : ''}${name}`)
    // tag._id = id // Preserve original ID
    Object.entries(attributes).forEach(([key, value]) => {
      tag.attribute(key, value as TagValue)
    })
    return tag
  }

  setSeed(seed: object | string | number | boolean) {
    const { space, name } = StringUtils.parseString(seed as string)
    this.attribute('space', space)
    this.attribute('name', name)
    return this
  }

  returnAs(object: object) {
    return Object.assign(object, this)
  }

  static normalizeTagName = (name: string | number) => {
    return StringUtils.normalizeTagName(String(name))
  }

  static parseString(input: string): { space?: string; name: string } {
    return StringUtils.parseString(input)
  }

  static extractKeywords(input: string): { individual: string[]; grouped: string[] } {
    return StringUtils.extractKeywords(input)
  }

  static extractPhrases(input: string): string[] {
    return StringUtils.extractPhrases(input)
  }
  static extractScopedKeywords(input: string): string[] {
    return StringUtils.extractScopedKeywords(input)
  }

  attributesToTags = () => {
    const attributes = {
      id: this._id,
      stamp: this._stamp,
    }

    return [
      attributes,
      ...Object.entries(this._attributes)
        .map(([key, value]) => {
          if (value) {
            return TagFactory.create(`${key}:${value}`)
          }
          return undefined
        })
        .filter((tag): tag is Tag => tag !== undefined),
    ]
  }

  set seed(seed: string) {
    this.setSeed(seed)
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return String(this.attribute('name'))
  }

  set name(name: string) {
    this.attribute('name', name)
  }

  get space(): string {
    return String(this.attribute('space'))
  }
  get label(): string {
    return String(this.attribute('label') ?? this.name)
  }
  get icon() {
    return String(this.attribute('icon'))
  }
  get color() {
    return String(this.attribute('color'))
  }
}

export default Tag
