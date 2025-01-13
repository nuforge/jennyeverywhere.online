import Tag from '@/objects/nu/Tag'
import Legend from '@/objects/tags/Legend'

class Character {
  private _name: string
  private _taglist: Legend = new Legend()
  private _tags: { [key: string]: Tag } = {}

  constructor(name: string) {
    // Initialize momentum with a default or specified value.
    this._name = name
    this._tags = {}
  }

  get name(): string {
    return this._name
  }

  get taglist(): Legend {
    return this._taglist
  }

  //const selected = computed(() => selection.value.map((tag) => taglist.value.getTag(tag)))
  addTag(tag: Tag): void {
    this._taglist.setTag(tag.id, tag)
  }

  getTags(): { [key: string]: Tag } {
    return this._tags
  }
}

export default Character
