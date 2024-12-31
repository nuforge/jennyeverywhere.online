import Tag from '@/objects/Tag'
import { format } from 'date-fns'
import TagMap from './TagMap'
import { v4 as uuidv4 } from 'uuid'

class Event {
  protected _id = uuidv4()

  protected _name: string
  protected _title: string
  protected _stamp: Date = new Date()
  protected _body: string = ''
  protected _tags: TagMap = new TagMap()

  constructor(name: string, body?: string) {
    this._name = name.toLowerCase().replace(/\s/g, '-')
    this._title = name
    this._body = body || ''

    this._tags.addTag(new Tag(`stamp:${this._stamp}`))
    return this
  }

  get formattedDate() {
    return this._stamp
  }

  tagList() {
    const taglist: Array<Tag> = this._tags.tagList.reduce((acc: Array<Tag>, tag: Tag) => {
      acc.push(tag)
      return acc
    }, [])
    return taglist
  }

  get name() {
    return this._name
  }

  get title() {
    return this._title
  }

  get tags() {
    return this._tags
  }

  get body() {
    return this._body
  }

  get stamp() {
    return this._stamp
  }
  get date() {
    return format(this._stamp, 'yyww.h').toString()
  }

  get id() {
    return this._id
  }

  get icon() {
    return this._tags.getTag('icon')?.icon || 'default'
  }

  get color() {
    return this._tags.getTag('color')?.icon || 'default'
  }

  set name(newTitle: string) {
    this._name = newTitle
  }

  set body(newDescription: string) {
    this._body = newDescription
  }

  set stamp(newDate: Date) {
    this._stamp = newDate
  }

  set icon(newIcon: string) {
    this._tags.stringTag(newIcon)
  }

  set color(newColor: string) {
    this._tags.stringTag(newColor)
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
