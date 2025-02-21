class Timeline {
  protected _id: string = ''
  protected _name: string

  constructor(id: string | number, name?: string) {
    this._id = id.toString()
    this._name = name || 'timeline'
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  toString(): string {
    return `Timeline ${this._id}: ${this._name}`
  }
}

export default Timeline
