import Tag from '@/objects/Tag'

class Persona {
  protected _id: string
  protected _name: string
  protected _attributes: Record<string, Tag> = {}

  constructor(name: string) {
    this._id = name.toString().toLowerCase().replace(/\s/g, '-')
    this._name = name
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get attributes() {
    return this._attributes
  }

  set attributes(value: Record<string, Tag>) {
    this._attributes = value
  }

  addTag(newTag: string | number) {
    const tag = new Tag(newTag.toString())
    this._attributes[tag.id] = tag
  }

  addLabel(newName: string, newColor?: string, newIcon?: string) {
    const newTag = new Tag(newName)
    newTag.icon = newIcon ? newIcon : 'mdi-label'
    newTag.color = newColor ? newColor : 'text'
    return (this._attributes[newTag.id] = newTag) //, newColor, newIcon )
  }

  addAttribute(newName: string, newColor?: string, newIcon?: string) {
    console.log(this.addLabel(newName, newColor, newIcon))
  }

  removeAttribute(namespace: string) {
    delete this._attributes[namespace]
  }

  getAttribute(namespace: string) {
    return this._attributes[namespace]
  }

  getAttributes() {
    return this._attributes
  }
}

export default Persona
