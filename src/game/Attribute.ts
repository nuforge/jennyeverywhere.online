class Attribute {
  private _id: string
  private _name: string
  private _value: string | number
  private _icon?: string = 'mdi mdi-account'
  private _color?: string = '$primary'
  private _description?: string

  private _maxValue = 15

  constructor(
    name: string,
    value?: string | number,
    icon?: string,
    color?: string,
    description?: string,
    id?: string,
  ) {
    this._name = name
    this._value = value !== undefined ? value : name
    this._icon = icon
    this._description = description
    this._color = color
    this._id = id || name.toLowerCase().replace(/\s/g, '_')
  }

  get value(): number | string {
    return this._value
  }

  set value(newValue: number | string) {
    if (typeof newValue === 'number' && (newValue < 0 || newValue > this._maxValue)) {
      throw new Error(`Attribute value must be between 0 and ${this._maxValue}.`)
    }
    this._value = newValue
  }

  get name(): string {
    return this._name
  }

  set name(newName: string) {
    this._name = newName
  }

  get description(): string | undefined {
    return this._description
  }

  set description(newDescription: string) {
    this._description = newDescription
  }

  get icon(): string | undefined {
    return this._icon
  }

  set icon(newIcon: string) {
    this._icon = newIcon
  }

  get color(): string | undefined {
    return this._color
  }

  set color(newColor: string) {
    this._color = newColor
  }

  get id(): string {
    return this._id
  }

  increment(): void {
    if (typeof this._value === 'number' && this._value < this._maxValue) {
      this._value++
    }
  }

  decrement(): void {
    if (typeof this._value === 'number' && this._value > 0) {
      this._value--
    }
  }

  toJSON(): { [key: string]: string | number } {
    return {
      id: this._id,
      name: this._name,
      value: this._value,
    }
  }
}

export default Attribute
