import Tag from '@/objects/nu/v1/NuTag'
type Value = boolean | number | string | Tag | undefined

class Meme extends Tag {
  private _text: string // Core content of the Meme
  private _score: number // Scoring for relevance/decay
  private _lastAccessed: Date = new Date() // Timestamp for the last interaction

  constructor(text: string, color?: Value, symbol?: Value, initialScore: number = 0) {
    super(text, color, symbol) // Initialize Tag properties
    this._text = text
    this._score = initialScore
  }

  get lastAccessed(): Date {
    return this._lastAccessed ? this._lastAccessed : this.stamp
  }
  // Accessor and Mutator for text
  get text(): string {
    return this._text
  }

  set text(value: string) {
    this._text = value
    this.touch()
  }

  // Accessor and Mutator for score
  get score(): number {
    return this._score
  }

  set score(value: number) {
    this._score = value
    this.touch()
  }

  adjustScore(value: number) {
    this._score += value
    this.touch()
  }

  // Update last accessed timestamp
  touch() {
    this._lastAccessed = new Date()
  }

  // Decay mechanism for score
  decay(rate: number = 0.01) {
    this._score -= this._score * rate
    if (this._score < 0) {
      this._score = 0
    }
  }

  // Serialize Meme as a string for storage or sharing
  serialize(): string {
    return JSON.stringify({
      id: this._id,
      type: this._type,
      text: this._text,
      score: this._score,
      lastAccessed: this._lastAccessed.toISOString(),
    })
  }

  // Deserialize Meme from a string
  static deserialize(serialized: string): Meme {
    const data = JSON.parse(serialized)
    const meme = new Meme(data.text, data.id, undefined, data.score)
    meme._lastAccessed = new Date(data.lastAccessed)
    return meme
  }
}

export default Meme
