import Tag from '@/objects/Tag'
import { format } from 'date-fns'
import TagMap from './TagMap'

class Event {
  protected _id: string

  protected _title: string
  protected _date: string
  protected _description?: string
  protected _icon?: string
  protected _color?: string
  protected _tags: TagMap = new TagMap()

  constructor(title: string, description?: string, date?: string) {
    this._title = title
    this._id = title.toLowerCase().replace(/\s/g, '-')
    this._description = description || undefined

    this._icon = 'mdi-web-clock'
    this._color = '#323232'
    this._date = date || format(new Date(), 'yywwe.H').toString()
    this._tags.addTag(new Tag(`date:${this.formattedDate}`, this._color, this._icon))
    return this
  }

  get formattedDate() {
    return format(this._date, 'yywwe.H')
  }

  tagList() {
    const taglist: Array<Tag> = this._tags.tagList.reduce((acc: Array<Tag>, tag: Tag) => {
      acc.push(tag)
      return acc
    }, [])
    return taglist
  }

  get title() {
    return this._title
  }
  get tags() {
    return this._tags
  }

  get description() {
    return this._description
  }

  get date() {
    return this._date
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

  set title(newTitle: string) {
    this._title = newTitle
  }

  set description(newDescription: string | undefined) {
    this._description = newDescription
  }

  set date(newDate: string) {
    this._date = newDate
  }

  set icon(newIcon: string | undefined) {
    this._icon = newIcon
  }

  set color(newColor: string | undefined) {
    this._color = newColor
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
