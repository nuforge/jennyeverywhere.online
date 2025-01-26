import Tag from '@/objects/nu/Tag'
import TagFactory from '@/objects/nu/TagFactory'
import Legend from '@/objects/tag/Legend'

class Persona extends Tag {
  protected _legend: Legend = new Legend()

  constructor(name: string) {
    super(name)
  }

  get attributes() {
    return this._legend.tags
  }

  addTag(newTag: string | number) {
    const tag = new Tag(newTag.toString())
    this._legend.setTag(tag.id, tag)
  }

  addLabel(newName: string, newColor?: string, newIcon?: string) {
    const newTag = TagFactory.create(newName, { color: newColor, icon: newIcon })
    return this._legend.setTag(newTag.id, newTag)
  }

  addAttribute(newName: string, newColor?: string, newIcon?: string) {
    console.log(this.addLabel(newName, newColor, newIcon))
  }

  removeAttribute(namespace: string) {
    return this._legend.deleteTag(namespace)
  }

  getAttribute(namespace: string) {
    return this._legend.getTag(namespace)
  }

  getAttributes() {
    return this._legend
  }
}

export default Persona
