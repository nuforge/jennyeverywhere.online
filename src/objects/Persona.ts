class Persona {
  protected _id: string
  protected _name: string
  protected _avatar?: string

  constructor(name: string, avatar?: string) {
    this._id = name.toString().toLowerCase().replace(/\s/g, '-')
    this._name = name
    this._avatar = avatar
  }
}

console.log('Hello World!')

export default Persona
