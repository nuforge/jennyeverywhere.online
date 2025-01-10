import Tag from '@/objects/nu/NuTag'

const TAG_WHITESPACE_REPLACER = '-'

class Legend extends Tag {
  protected _tags: Map<string, Tag> = new Map()
  protected _links: Record<string, Tag> = {}

  constructor(name?: string) {
    super(name)
    return this
  }

  static normalizeTagName = (name: string | number) => {
    return Tag.normalizeTagName(name)
  }

  get tags() {
    return [...this._tags.values()]
  }

  get keys() {
    return this._tags.keys()
  }

  selection = (tags: Tag[]) => {
    return this.tags.filter((tag) => tags.includes(tag))
  }

  difference(tags: Tag[]): Tag[] {
    const tagIds = new Set(tags.map((tag) => tag.id))
    return Array.from(this.tags).filter((tag) => !tagIds.has(tag.id))
  }

  clearTags() {
    this._tags.clear()
    return this
  }

  // Tag LookUp

  has(name: string) {
    return this._tags.get(name) !== undefined
  }

  getTag(name: string) {
    const tag = this._tags.get(name)
    if (tag) {
      this._links[name] = tag
    }
    return this._tags.get(this._links[name].id)
  }

  setTag(id: string, tag: Tag) {
    this._links[tag.name] = tag
    return this._tags.set(id, tag)
  }

  addTag(newTag: Tag) {
    return this._tags.set(newTag.id, newTag)
  }

  addTags(newTags: Tag[]) {
    newTags.forEach((tag) => this.addTag(tag))
    return
  }

  removeTag(tag: Tag) {
    return this._tags.delete(tag.id)
  }

  create(note: string | string[]) {
    if (Array.isArray(note)) {
      return this.createTags(note)
    }
    return this.createTag(note)
  }
  createTag(newName: string, newColor?: string, newIcon?: string): Tag {
    const tag = new Tag(newName, newColor, newIcon)
    this.setTag(tag.id, tag)
    return tag
  }

  createTags(newTags: string[], newColor?: string, newIcon?: string): Tag[] {
    return newTags.map((tag) => {
      const newTag = new Tag(tag, newColor, newIcon)
      this.setTag(newTag.id, newTag)
      return newTag
    })
  }

  stringTag(newText: string = 'tag'): Tag {
    const tag = new Tag(newText)
    // const parent = tag.space ? this.getTag(tag.space) : undefined
    // if (tag.space && parent) {
    //   tag.icon = parent.icon
    //   tag.color = parent.color
    // }
    this.setTag(tag.id, tag)
    return tag
  }

  delete(payload: Tag | string | Tag[] | string[]) {
    if (Array.isArray(payload)) {
      return this.deleteTags(payload)
    }
    return this.deleteTag(payload)
  }
  deleteTag(tag: Tag | string) {
    if (typeof tag === 'string') return this._tags.delete(tag)
    return this._tags.delete(tag.id)
  }

  deleteTags(tags: Tag[] | string[]) {
    return tags.forEach((tag) => this.deleteTag(tag))
  }

  linkText(text: string): string {
    let temp = text
    this._tags.forEach((tag) => {
      const pattern = tag.name
      const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const regex = new RegExp(escapedPattern, 'g')
      temp = temp.replace(
        regex,
        (match) => `[${match}](${match.toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)})`,
      )
    })
    return temp
  }
}

export default Legend
