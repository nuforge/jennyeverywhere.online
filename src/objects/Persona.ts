import Tag from '@/objects/nu/Tag'
import Legend from '@/objects/tag/Legend'

class Persona extends Tag {
  protected _attributes: Legend = new Legend()

  constructor(name: string) {
    super(name)
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
    return this._attributes.tags
  }

  addTag(newTag: string | number) {
    const tag = new Tag(newTag.toString())
    this._attributes.setTag(tag.id, tag)
  }

  addLabel(newName: string, newColor?: string, newIcon?: string) {
    const newTag = new Tag(newName)
      .attribute('color', newColor ?? 'text')
      .attribute('icon', newIcon ?? 'mdi-label')
    return this._attributes.setTag(newTag.id, newTag)
  }

  addAttribute(newName: string, newColor?: string, newIcon?: string) {
    console.log(this.addLabel(newName, newColor, newIcon))
  }

  removeAttribute(namespace: string) {
    return this._attributes.deleteTag(namespace)
  }

  getAttribute(namespace: string) {
    return this._attributes.getTag(namespace)
  }

  getAttributes() {
    return this._attributes
  }
}

export default Persona
