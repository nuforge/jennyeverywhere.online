import Tag from '@/objects/Tag'
import { format } from 'date-fns'
import TagMap from './TagMap'

class Event {
  protected _id: string
  protected _title: string
  protected _description: string
  protected _date: Date
  protected _tags: TagMap = new TagMap()
  protected _tag: Tag

  constructor(title: string, description: string, date?: Date) {
    this._title = title
    this._id = title.toLowerCase().replace(/\s/g, '-')
    this._description = description

    this._date = date || new Date()
    this._tag = new Tag(`date:${this.formattedDate}`, 'datetime', 'mdi-web-clock')
    console.log('Event', this._tag)
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
  get tag() {
    return this._tag
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
