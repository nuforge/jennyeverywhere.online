import Tag from '@/objects/nu/Tag'
import type { TagAttributes } from '@/objects/nu/Tag'
import StringUtils from '@/utils/StringUtils'
import { NAMESPACE_SPLIT_CHAR } from '@/utils/StringUtils'

export default class TagFactory {
  private static _namespace: string = ''

  static set namespace(namespace: string) {
    this._namespace = StringUtils.CleanString(namespace, {
      toLowerCase: true,
      trimWhitespace: true,
    })
  }

  static get namespace() {
    return this._namespace
  }
  // Create a new Tag
  static create(name: string, attributes: TagAttributes = {}): Tag {
    const seed = this._namespace ? `${this._namespace}${NAMESPACE_SPLIT_CHAR}${name}` : name
    return new Tag(seed, attributes)
  }

  // Batch create tags
  static createBatch(names: string[], attributes: TagAttributes = {}): Tag[] {
    return names.map((name) => this.create(name, attributes))
  }

  // Save a Tag to LocalStorage
  static saveToLocalStorage(tag: Tag): void {
    const tagKey = tag.name // Use `space:name` if available
    const serializedTag = tag.serialize() // Serialize the tag
    localStorage.setItem(tagKey, serializedTag) // Save using `space:name` as the key
  }

  // Load a Tag from LocalStorage
  static loadFromLocalStorage(tagKey: string): Tag | null {
    const serializedTag = localStorage.getItem(tagKey)
    if (!serializedTag) return null

    const parsedData = JSON.parse(serializedTag)
    const { _seed, _attributes } = parsedData

    const tag = new Tag(_seed, _attributes)
    return tag
  }

  // Delete a Tag from LocalStorage
  static deleteFromLocalStorage(tagKey: string): void {
    localStorage.removeItem(tagKey)
  }
}
