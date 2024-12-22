import Tag from './Tag'

class Namespace extends Tag {
  protected _style: Record<string, string> = {}

  constructor(name: string | number, id?: string | number) {
    super(name, id)
    this.icon = this._space ? `mdi-${this._space}` : 'mdi-tag-outline'
    this.color = this._space ? `${this._space}` : 'error'
  }

  get icon() {
    return this._style.icon
  }

  set icon(value: string) {
    this._style.icon = value
  }

  get color() {
    return this._style._color
  }

  set color(value: string) {
    this._style.color = value
  }
}

export default Namespace
