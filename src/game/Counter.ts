class Counter {
  private _name: string = 'Counter'
  private _count: number
  private _max: number = 7
  private _min: number = 0

  constructor(initialValue: number = 0) {
    // Initialize counter with a default or specified count.
    if (initialValue < this._min || initialValue > this._max) {
      throw new Error(`Counter count must be between ${this._min} and ${this._max}.`)
    }
    this._count = initialValue
  }

  // Getter for the counter count
  get count(): number {
    return this._count
  }

  set count(newValue: number) {
    if (newValue < this._min || newValue > this._max) {
      throw new Error(`Counter count must be between ${this._min} and ${this._max}.`)
    }
    this._count = newValue
  }

  // Increment counter (up to a max of 7)
  increment(): void {
    if (this._count < 7) {
      this._count++
    } else this._count = 0
  }

  // Decrement counter (down to a min of 0)
  decrement(): void {
    if (this._count > 0) {
      this._count--
    }
  }

  clear(): void {
    this._count = 0
  }

  // Get the icon name based on the current counter count
  getIcon(count: number = this._count): string {
    switch (count) {
      case 0:
        return 'mdi-hexagon-outline'
      case 7:
        return 'mdi-hexagon-multiple'
      default:
        return `mdi-hexagon-slice-${count}`
    }
  }
}

export default Counter
