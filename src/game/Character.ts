import Tag from '@/objects/Tag'

class Character {
  private _name: string
  private _tags: { [key: string]: Tag } = {}
  private _index: { [key: string]: Array<string> } = {}

  constructor(name: string) {
    // Initialize momentum with a default or specified value.
    this._name = name
    this._tags = {}
  }

  get name(): string {
    return this._name
  }

  get tags(): { [key: string]: Tag } {
    return this._tags
  }

  addTag(tag: Tag, type: string = 'tag'): void {
    this._tags[tag.id] = tag
    this._index[type] = (this._index[type] ?? []).concat(tag.id)
  }

  getTags = (type: string = 'tag'): { [key: string]: Tag } => {
    const results = Object.keys(this._tags).filter((tag) => {
      return this._index[type].includes(tag)
    })

    const tagObjects: { [key: string]: Tag } = {}
    results.forEach((id) => {
      tagObjects[id] = this._tags[id]
    })
    return tagObjects
  }
}

export default Character
