import Tag from './Tag'

class Label {
  protected _id: string | number
  protected _tag: Tag
  protected _namespace?: Tag

  constructor(name: string | number, id?: string | number) {
    const label = name.toString()
    this._id = id ? id : this.cleanTag(label)
    this._tag = new Tag(label)
    this._namespace = new Tag(label)
  }

  cleanTag = (name: string) => {
    return name.toLowerCase().replace(/\s/g, '-')
  }

  get id() {
    return this._id
  }

  set id(value: string | number) {
    this._id = value
  }

  get namespace(): Tag | undefined {
    return this._namespace
  }

  set namespace(value: Tag) {
    this._namespace = value
  }

  get icon() {
    return 'mdi-' + this._namespace
  }
  get color() {
    return 'primary'
  }
}

export default Label
