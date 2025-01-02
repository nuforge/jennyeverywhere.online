import Tag from '@/objects/Tag'
import Legend from '@/objects/Legend'
import { v4 as uuidv4 } from 'uuid'

class TagTray {
  protected _id = uuidv4()
  protected _legend = new Legend()
  protected _selected = [] as Tag[]

  protected _dragging = false

  // Styles
  protected _closable = false
  protected _labels = true
  protected _icons = true
  protected _colors = true

  protected _tag: Tag

  constructor(tags: Tag[] | Legend | undefined = undefined) {
    if (typeof tags === 'string') {
      this._tag = new Tag(tags)
    } else if (tags instanceof Legend) {
      this._tag = new Tag('Legend', 'info', 'mdi-map-legend')
      this._legend = tags
    } else if (Array.isArray(tags)) {
      this._tag = new Tag('list', 'accent', 'mdi-list-box-outline')
      this._legend.addTags(tags)
    } else {
      this._tag = new Tag('default', 'default', 'mdi-tray')
    }
    return this
  }

  get selection() {
    //persona.themeTags.filter(tag => props.filter?.includes(tag.name)) || []

    this._legend.tags.filter((tag) => this._selected.includes(tag))
    return this._selected
  }

  // GETTERS

  get id() {
    return this._id
  }

  get map() {
    return this._legend
  }

  get tag() {
    return this._tag
  }

  get tags() {
    return this._legend.tags
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

  set id(id: string) {
    this._id = id
  }

  set map(tags: Legend) {
    this._legend = tags
  }

  set tag(tag: Tag) {
    this._tag = tag
  }

  set tags(tags: Tag[]) {
    this._legend.addTags(tags)
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
      return this._legend.addTags(copyValue)
    } else {
      return this._legend.addTag(copyValue)
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
    this._legend.addTags(payload)
    this._dragging = false
  }
}
export default TagTray
