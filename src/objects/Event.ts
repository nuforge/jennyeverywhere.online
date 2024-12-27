import Tag from '@/objects/Tag'
import { format } from 'date-fns'
import TagMap from './TagMap'

class Event {
  protected _id: string

  protected _name: string
  protected _stamp: Date
  protected _description: string
  protected _icon: string
  protected _color: string
  protected _tags: TagMap = new TagMap()

  constructor(name: string, description?: string) {
    this._name = name
    this._id = name.toLowerCase().replace(/\s/g, '-')
    this._description = description || ''

    this._icon = 'mdi-calendar'
    this._color = 'text'
    this._stamp = new Date()
    this._tags.addTag(new Tag(`stamp:${this._stamp}`, this._color, this._icon))
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
  get tags() {
    return this._tags
  }

  get description() {
    return this._description
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
    return this._icon
  }

  get color() {
    return this._color
  }

  set name(newTitle: string) {
    this._name = newTitle
  }

  set description(newDescription: string) {
    this._description = newDescription
  }

  set stamp(newDate: Date) {
    this._stamp = newDate
  }

  set icon(newIcon: string) {
    this._icon = newIcon
  }

  set color(newColor: string) {
    this._color = newColor
  }

  createTag(tagName: string, tagColor: string, tagIcon: string) {
    const tag = new Tag(tagName)
    tag.color = tagColor
    tag.icon = tagIcon
    this._icon = tag.icon
    this._color = tag.color
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
