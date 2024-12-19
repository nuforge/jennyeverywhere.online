import Attribute from './Attribute'

class Character {
  private _name: string
  private _attributes: { [key: string]: Attribute } = {}
  private _index: { [key: string]: Array<string> } = {}

  constructor(name: string) {
    // Initialize momentum with a default or specified value.
    this._name = name
    this._attributes = {}
  }

  get name(): string {
    return this._name
  }

  get attributes(): { [key: string]: Attribute } {
    return this._attributes
  }

  addAttribute(attribute: Attribute, type: string = 'attribute'): void {
    this._attributes[attribute.id] = attribute
    this._index[type] = (this._index[type] ?? []).concat(attribute.id)
  }

  getAttributes = (type: string = 'attribute'): { [key: string]: Attribute } => {
    const results = Object.keys(this._attributes).filter((attribute) => {
      console.log(attribute, this._index[type])
      return this._index[type].includes(attribute)
    })

    const attributeObjects: { [key: string]: Attribute } = {}
    results.forEach((id) => {
      attributeObjects[id] = this._attributes[id]
    })
    return attributeObjects
  }
}

export default Character
