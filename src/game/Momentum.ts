import Counter from '@/objects/Counter'

class Momentum extends Counter {
  protected _icon: string = 'mdi-hexagon'

  constructor(initialValue: number = 0) {
    super(initialValue)
  }

  getIcon(count: number = this.count): string {
    if (count >= 1 && count <= 6) {
      return `${this._icon}-slice-${count}`
    }
    return count === 0 ? `${this._icon}-outline` : `${this._icon}-multiple`
  }
}

export default Momentum
