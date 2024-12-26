import Tag from '@/objects/Tag'
const TAG_WHITESPACE_REPLACER = '-'

class TagMap {
  protected _tags: Map<string, Tag> = new Map()
  static cleanTag = (name: string | number) => {
    return Tag.cleanTag(name)
  }

  constructor() {
    return this
  }

  get tags() {
    return this._tags
  }

  get tagKeys() {
    return Array.from(this._tags.keys())
  }

  setTag(id: string, tag: Tag): void {
    this._tags.set(id, tag)
  }

  getTag(id: string): Tag | undefined {
    return this._tags.get(id)
  }

  addTag(newTag: Tag): Tag {
    this._tags.set(newTag.id, newTag)
    return newTag
  }

  createTag(newName: string, newColor: string, newIcon: string): Tag {
    const newTag = new Tag(newName)
    newTag.icon = newIcon
    newTag.color = newColor
    this.setTag(newTag.id, newTag)
    return newTag
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

  removeTag(tag: string): void {
    this._tags.delete(tag)
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

export default TagMap
