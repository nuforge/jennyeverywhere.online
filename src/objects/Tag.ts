const NAMESPACE_SPLIT_CHAR = ':'
const TAG_WHITESPACE_REPLACER = '-'

class Tag {
  protected _id: string
  protected _name: string
  protected _space?: string
  protected _style: Record<string, string> = {}

  constructor(name: string | number, id?: string) {
    const label = name.toString()
    this._id = id ? id : Tag.cleanTag(label)
    const { value, namespace } = this.splitTag(label)
    this._name = value
    this._space = namespace
    return this
  }

  static cleanTag = (name: string | number) => {
    return name.toString().toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)
  }

  splitTag = (tagName: string) => {
    const label = tagName.toString()
    const value = label.includes(NAMESPACE_SPLIT_CHAR)
      ? label.split(NAMESPACE_SPLIT_CHAR)[1]
      : label
    const namespace = label.includes(NAMESPACE_SPLIT_CHAR)
      ? label.split(NAMESPACE_SPLIT_CHAR)[0]
      : undefined
    return { value, namespace }
  }

  set(name: string, namespace: string) {
    this._name = name
    this._space = namespace
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

  get icon() {
    return this._style.icon
  }

  set symbol(value: { icon: string; color: string }) {
    this._style.icon = value.icon
    this._style.color = value.color
  }

  set icon(value: string) {
    this._style.icon = value
  }

  get color() {
    return this._style.color
  }

  set color(value: string) {
    this._style.color = value
  }
}

export default Tag
