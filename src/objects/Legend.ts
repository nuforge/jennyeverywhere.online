import Tag from '@/objects/Tag'

const TAG_WHITESPACE_REPLACER = '-'

class Legend extends Tag {
  protected _tags: Map<string, Tag> = new Map()

  constructor(name?: string) {
    super(name)
    return this
  }

  static cleanTag = (name: string | number) => {
    return Tag.cleanTag(name)
  }

  get tags() {
    return [...this._tags.values()] as Tag[]
  }

  get keys() {
    return this._tags.keys()
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

  getTag(id: string): Tag | undefined {
    return this._tags.get(id)
  }

  setTag(id: string, tag: Tag) {
    return this._tags.set(id, tag)
  }

  // Tag Creation

  add(newTag: Tag | Tag[]) {
    if (Array.isArray(newTag)) {
      return this.addTags(newTag)
    }
    return this.addTag(newTag)
  }

  addTag(newTag: Tag) {
    return this._tags.set(newTag.id, newTag)
  }

  addTags(newTags: Tag[]) {
    newTags.forEach((tag) => this.addTag(tag))
    return
  }

  createTag(newName: string, newColor?: string, newIcon?: string): Tag {
    const tag = new Tag(newName)
    tag.icon = newIcon
    tag.color = newColor
    this.setTag(tag.id, tag)
    return tag
  }

  createTags(newTags: string[], newColor?: string, newIcon?: string): Tag[] {
    return newTags.map((tag) => {
      const newTag = new Tag(tag)
      newTag.icon = newIcon
      newTag.color = newColor
      this.setTag(newTag.id, newTag)
      return newTag
    })
  }

  stringTag(newText: string = 'tag'): Tag {
    const tag = new Tag(newText)
    const parent = tag.space ? this.getTag(tag.space) : undefined
    if (tag.space && parent) {
      tag.icon = parent.icon
      tag.color = parent.color
    }
    this.setTag(tag.id, tag)
    return tag
  }

  deleteTag(tag: Tag | string) {
    if (typeof tag === 'string') return this._tags.delete(tag)
    return this._tags.delete(tag.id)
  }

  deleteTags(tags: Tag[] | string[]) {
    tags.forEach((tag) => this.deleteTag(tag))
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
