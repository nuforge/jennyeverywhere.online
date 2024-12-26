import Tag from '@/objects/Tag'
const TAG_WHITESPACE_REPLACER = '-'

class TagList {
  protected _list: Map<string, Tag> = new Map()
  protected _tags: Record<string, Tag> = {}

  constructor() {
    this._tags = {}
    return this
  }

  get tags() {
    return this._tags
  }

  get tagList() {
    return Object.values(this._tags)
  }

  get tagKeys() {
    return Object.keys(this._tags)
  }

  static cleanTag = (name: string | number) => {
    return Tag.cleanTag(name)
  }

  getTag(id: string) {
    return this._tags[id]
  }

  addTag = (newTag: Tag) => {
    return (this._tags[newTag.id] = newTag)
  }

  createTag = (newName: string, newColor: string, newIcon: string) => {
    const tag = Tag.cleanTag(newName)
    const newTag = !this._tags[tag] ? new Tag(newName) : this._tags[tag]
    newTag.icon = newIcon
    newTag.color = newColor
    return (this._tags[newTag.id] = newTag) //, newColor, newIcon )
  }

  stringTag = (newText: string = 'tag') => {
    const tag = new Tag(newText) // , newColor, newIcon)
    if (tag.space && this._tags[tag.space]) {
      tag.icon = this._tags[tag.space].icon
      tag.color = this._tags[tag.space].color
    }
    return (this._tags[tag.id] = tag) //, newColor, newIcon )
  }

  removeTag = (tag: string) => {
    delete this._tags[tag]
  }

  linkText(text: string) {
    // Create a RegExp if pattern is a string
    //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;
    let temp = text
    Object.keys(this._tags).forEach((id) => {
      if (!this._tags[id]) return
      const pattern = this._tags[id].name

      // Escape special regex characters if pattern is a literal string
      const escapedPattern =
        typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern // If already a RegExp, use it as is

      const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern

      temp = temp.replace(
        regex,
        (match) => `[${match}](${match.toLowerCase().replace(/\s/g, TAG_WHITESPACE_REPLACER)})`,
      )
    })
    return temp
  }
}

export default TagList
