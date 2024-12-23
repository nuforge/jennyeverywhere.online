import Tag from '@/objects/Tag'
import { format } from 'date-fns'

class Event {
  protected _id: string
  protected _title: string
  protected _description: string
  protected _date: Date
  protected _tags: Tag[] = []

  constructor(title: string, description: string, date?: Date) {
    this._title = title
    this._id = title.toLowerCase().replace(/\s/g, '-')
    this._description = description

    this._date = date || new Date()

    return this
  }

  get formattedDate() {
    return format(this._date, 'yywwe.H')
  }

  get title() {
    return this._title
  }

  get description() {
    return this._description
  }

  get date() {
    return this._date
  }

  get tags() {
    return this._tags
  }

  get icon() {
    return this._tags[0].icon
  }
  get color() {
    return this._tags[0].color
  }

  addTag(tag: string) {
    this._tags.push(new Tag(tag))
    return this
  }

  addIcon(icon: string) {
    this._tags[this._tags.length - 1].icon = icon
    return this
  }

  addColor(color: string) {
    this._tags[this._tags.length - 1].color = color
    return this
  }
}

export default Event
