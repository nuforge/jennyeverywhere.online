class Tag {
  protected _id: string
  protected _label: string
  protected _namespace?: string
  protected _color?: string
  protected _icon?: string

  constructor(label: string, color?: string, icon?: string) {
    this._id = this.cleanTag(label)
    this._label = label.includes(':') ? label.split(':')[1] : label
    this._namespace = label.includes(':') ? label.split(':')[0] : undefined
    this._color = color
    this._icon = icon
  }

  cleanTag = (label: string) => {
    return label.toLowerCase().replace(/\s/g, '-')
  }

  set(label: string, namespace: string) {
    this._label = label
    this._namespace = namespace
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
  get icon(): string | undefined {
    return this._icon
  }

  set icon(value: string) {
    this._icon = value
  }

  get color(): string | undefined {
    return this._color
  }

  set color(value: string) {
    this._color = value
  }

  get namespace(): string | undefined {
    return this._namespace
  }

  set namespace(value: string | undefined) {
    this._namespace = value
  }
}

export default Tag
