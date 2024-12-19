import Attribute from './Attribute'

class Character {
  private _name: string
  private _attributes: { [key: string]: Attribute } = {}

  constructor(name: string) {
    // Initialize momentum with a default or specified value.
    this._name = name
    this._attributes = { might: new Attribute('Might', 1, 'mdi mdi-home') }
  }

  get name(): string {
    return this._name
  }

  get attributes(): { [key: string]: Attribute } {
    return this._attributes
  }

  addAttribute(attribute: Attribute): void {
    this._attributes[attribute.id] = attribute
  }
}

export default Character
