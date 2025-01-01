import Tag from '@/objects/Tag'
import Legend from '@/objects/Legend'
import { v4 as uuidv4 } from 'uuid'

class TagTray {
  protected _id = uuidv4()
  protected _tags = new Legend()
  protected _selected = [] as Tag[]

  protected _dragging = false

  // Styles
  protected _closable = false
  protected _labels = true
  protected _icons = true
  protected _colors = true

  constructor(tags: Tag[] | Legend | undefined = undefined) {
    if (tags instanceof Legend) {
      this._tags = tags
    }
    if (Array.isArray(tags)) {
      this._tags.addTags(tags)
    }
    return this
  }

  // GETTERS

  get id() {
    return this._id
  }

  get map() {
    return this._tags
  }

  get tags() {
    return this._tags.tags
  }

  get selected() {
    return this._selected
  }

  get closable() {
    return this._closable
  }

  get labels() {
    return this._labels
  }

  get icons() {
    return this._icons
  }

  get colors() {
    return this._colors
  }

  get dragging() {
    return this._dragging
  }

  // SETTERS

  set tags(tags: Tag[]) {
    this._tags.addTags(tags)
  }

  set selected(tags: Tag[]) {
    this._selected = tags
  }

  set closable(closable: boolean) {
    this._closable = closable
  }

  set labels(labels: boolean) {
    this._labels = labels
  }

  set icons(icons: boolean) {
    this._icons = icons
  }

  set colors(colors: boolean) {
    this._colors = colors
  }

  set dragging(dragging: boolean) {
    this._dragging = dragging
  }

  // ACTIONS

  copy(copyValue: Tag | Tag[]) {
    if (Array.isArray(copyValue)) {
      return this._tags.addTags(copyValue)
    } else {
      return this._tags.addTag(copyValue)
    }
  }

  //Drag Start
  dragStart = () => {
    this._dragging = true
  }

  dragTagStart = () => {
    this.dragStart()
  }

  dragTrayStart = () => {
    this.dragStart()
  }

  // DRAG OVER
  dragOver = () => {}

  // DRAG END
  dragEnd = () => {
    this._dragging = false
  }

  dragTagEnd = () => {
    this.dragEnd()
  }

  dragTrayEnd = () => {
    this.dragEnd()
  }

  // DRAG DROP
  dragDrop = (payload: Tag[]) => {
    this._tags.addTags(payload)
    this._dragging = false
  }
}
export default TagTray
