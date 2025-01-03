class Counter {
  protected _name: string = 'Counter'
  protected _count: number
  protected _max: number = 9
  protected _min: number = 0
  protected _icon: string = 'mdi-circle'

  constructor(initialValue: number = 0) {
    if (initialValue < this._min || initialValue > this._max) {
      throw new Error(`${this._name} count must be between ${this._min} and ${this._max}.`)
    }
    this._count = initialValue
  }

  get count(): number {
    return this._count
  }

  set count(newValue: number) {
    if (newValue < this._min || newValue > this._max) {
      throw new Error(`${this._name} count must be between ${this._min} and ${this._max}.`)
    }
    this._count = newValue
  }

  increment(): void {
    this._count = this._count < this._max ? this._count + 1 : 0
  }

  decrement(): void {
    if (this._count > this._min) {
      this._count--
    }
  }

  clear(): void {
    this._count = 0
  }

  getIcon(count: number = this._count): string {
    if (count >= 1 && count <= 8) {
      return `${this._icon}-slice-${count}`
    }
    return count === 0 ? `${this._icon}-outline` : `${this._icon}-multiple`
  }
}

export default Counter
