class Tag {
  private _id: string | number = 0
  private _icon: string = '$icon'
  private _color: string = '$primary'
  private _parent: Tag | object | string | number | null = null
  private _value: string | number | boolean | null = null
  private _namespace: string | null = null
  private _description?: string

  constructor(name: string) {
    this._value = name
    this._namespace = name
  }

  get id() {
    return this._id
  }

  get icon() {
    return this._icon
  }

  get color() {
    return this._color
  }

  get parent() {
    return this._parent
  }

  get value() {
    return this._value
  }

  get name() {
    return this._namespace
  }
  get namespace() {
    return this._namespace
  }

  get description() {
    return this._description
  }

  set id(value) {
    this._id = value
  }

  set icon(value) {
    this._icon = value
  }

  set color(value) {
    this._color = value
  }

  set parent(value) {
    this._parent = value
  }

  set value(value) {
    this._value = value
  }

  set namespace(value) {
    this._namespace = value
  }

  set description(value) {
    this._description = value
  }

  toString() {
    return this._namespace
  }

  toJSON() {
    return {
      id: this._id,
      icon: this._icon,
      color: this._color,
      parent: this._parent,
      value: this._value,
      name: this._namespace,
      namespace: this._namespace,
      description: this._description,
    }
  }
}

export { Tag }
