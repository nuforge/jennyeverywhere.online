import Tag from '@/objects/nu/v1/NuTag'
import { format } from 'date-fns'
import Legend from './tags/Legend'

class Event extends Tag {
  // Extends tag?
  protected _title: string // Title of Event (different from Name?)
  protected _tags: Legend = new Legend() // Tags for Event (actions as well)

  protected _body?: string // Description of Event
  protected _date?: Date // Description of Event

  // constructor

  constructor(name: string, body?: string, date?: Date) {
    super(name)
    this._title = name
    this._date = date
    this._body = body
    this.icon = 'mdi-calendar'
    this.color = 'text'
    this.addTag(new Tag(`stardate:${this.date}`, 'blue', 'mdi-web-clock'))
    return this
  }

  tagList() {
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

  createTag(tagName: string, tagColor: string, tagIcon: string) {
    const tag = new Tag(tagName)
    tag.color = tagColor
    tag.icon = tagIcon
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

export default Event
