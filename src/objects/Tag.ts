class Tag {
  private _text: string
  private _namespace?: string
  private _color?: string
  private _icon?: string

  constructor(text: string, parentTagOrColor?: Tag | string, icon?: string) {
    this._text = text.includes(':') ? text.split(':')[1] : text
    this._namespace = text.includes(':') ? text.split(':')[0] : undefined

    if (typeof parentTagOrColor === 'string') {
      this._color = parentTagOrColor
      this._icon = icon
    } else if (parentTagOrColor instanceof Tag) {
      this._color = parentTagOrColor.color
      this._icon = parentTagOrColor.icon
    }
  }

  set(text: string, namespace: string) {
    this._text = text
    this._namespace = namespace
  }

  get text() {
    return this._text
  }

  set text(value: string) {
    this._text = value
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
