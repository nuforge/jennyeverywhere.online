import Tag from '@/objects/Tag'

class Link extends Tag {
  protected _tags: Map<Tag, Tag> = new Map()

  constructor(tag: Tag) {
    super(tag.name)
    return this
  }

  add(tag: Tag) {
    this._tags.set(tag, tag) // Placeholder... why?
  }
}

export default Link
