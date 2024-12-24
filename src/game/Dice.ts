class Dice {
  protected _faces: number
  protected _value: number
  protected _rolls: Array<number>

  constructor(dieFaces: number) {
    this._faces = dieFaces
    this._value = 0
    this._rolls = []
  }

  get value() {
    return this._value
  }

  get rolls() {
    return this._rolls
  }

  get faces() {
    return this._faces
  }

  roll(dCount: number = 1) {
    console.log(`Rolling ${dCount}d${this._faces}`)
    this._rolls = []

    for (let i = 0; i < dCount; i++) {
      this._rolls.push(Math.floor(Math.random() * this._faces) + 1)
    }

    this._value = this._rolls.reduce((acc, val) => acc + val, 0)
    console.log(`Rolling ${dCount}d${this._faces}`)
    return this._value
  }
}

export default Dice
