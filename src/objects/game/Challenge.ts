class Challenge {
  protected _level: number
  protected _score: number

  constructor() {
    this._level = 1
    this._score = 0
  }

  start() {
    console.log(`Challenge started at level ${this._level} with score ${this._score}`)
  }
}

export default Challenge
