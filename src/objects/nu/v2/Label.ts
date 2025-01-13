import Tag from '@/objects/nu/v2/Tag'
const DEFAULT_ICON = 'mdi-information'
const DEFAULT_COLOR = 'grey'

export default class Label extends Tag {
  protected _label: string
  protected _color: string
  protected _icon: string

  constructor(name: string, color?: string, symbol?: string) {
    super(name)
    this._label = this._name
    this._color = color ?? DEFAULT_COLOR
    this._icon = symbol ?? DEFAULT_ICON
    return this
  }

  // const icons: { [key: string]: string } = {
  //   id: 'mdi-identifier',
  //   name: 'mdi-label-variant-outline',
  //   seed: 'mdi-label-outline',
  //   space: 'mdi-tray',
  //   color: 'mdi-circle-opacity',
  //   icon: this.icon,
  //   date: 'mdi-clock-outline',
  //   time: 'mdi-calendar-outline',
  // }

  get color() {
    return this._color
  }

  set color(value: string) {
    this._color = value
  }

  get icon() {
    return this._icon
  }

  set icon(value: string) {
    this._icon = value
  }

  get label() {
    return this._label
  }

  set label(value: string) {
    this._label = value
  }

  setIcon(icon: string) {
    this._icon = icon
    return this
  }

  setColor(color: string) {
    this._color = color
    return this
  }

  setLabel(label: string) {
    this._label = label
    return this
  }
}
