import Tag from '@/objects/nu/Tag'
import { format } from 'date-fns'
import Legend from './tag/Legend'

class Log extends Tag {
  // Extends tag?
  protected _title: string // Title of Log (different from Name?)
  protected _tags: Legend = new Legend() // Tags for Log (actions as well)

  protected _body?: string // Description of Log
  protected _date?: Date // Description of Log

  // constructor

  constructor(name: string, body?: string, date?: Date) {
    super(name)
    this._title = name
    this._date = date
    this._body = body
    this.addTag(
      new Tag(`stardate:${this.date}`)
        .attribute('color', 'blue')
        .attribute('icon', 'mdi-web-clock'),
    )
    return this
  }

  taglist() {
    const taglist: Array<Tag> = this._tags.tags.reduce((acc: Array<Tag>, tag: Tag) => {
      acc.push(tag)
      return acc
    }, [])
    return taglist as Tag[]
  }

  get title() {
    return this._title
  }

  get tags() {
    return this._tags.tags as Tag[]
  }

  get body() {
    return this._body || ''
  }

  get date() {
    return format(this._stamp, 'yyww.h').toString()
  }

  set body(newDescription: string) {
    this._body = newDescription
  }

  createTag(tagName: string, color: string = `accent`, icon: string = `mdi-circle-small`) {
    const tag = new Tag(tagName).attribute('color', color).attribute('icon', icon)
    this.addTag(tag)
    return this
  }

  newTag(tagName: string) {
    this.addTag(new Tag(tagName))
    return this
  }
  addTag(newTag: Tag) {
    this._tags.addTag(newTag)
    return this
  }
}

export default Log
