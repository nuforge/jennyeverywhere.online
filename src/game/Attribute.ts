import Tag from '@/objects/Tag'

class Attribute extends Tag {
  protected _value: number | string = 0
  protected _minValue: number = 0
  protected _maxValue: number = 10
  protected _description?: string

  constructor(name: string, value?: string | number, icon?: string, color?: string) {
    super(name)
    this._description = name
    this._style.icon = icon ?? 'mdi-numeric-0'
    this._style.color = color ?? 'primary'
    this._value = value !== undefined ? value : name
  }

  get value(): number | string | undefined {
    return this._value
  }

  set value(newValue: number | string | undefined) {
    if (typeof newValue === 'number' && (newValue < this._minValue || newValue > this._maxValue)) {
      throw new Error(`Attribute value must be between ${this._minValue} and ${this._maxValue}.`)
    }
    this._value = newValue ? newValue : 0
  }

  get description(): string | undefined {
    return this._description
  }

  set description(newDescription: string) {
    this._description = newDescription
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
    if (typeof this._value === 'number' && this._value > this._minValue) {
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
