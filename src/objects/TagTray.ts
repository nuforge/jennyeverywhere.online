import Tag from '@/objects/Tag'
import TagMap from '@/objects/TagMap'

class TagTray {
  protected _tags = new TagMap()
  protected _selected = [] as Tag[]
  protected _closable = false
  protected _labels = false
  protected _icons = false
  protected _remove = false
  protected _color = true
  protected _dragging = false

  constructor(tags: Tag[] | TagMap | undefined = undefined) {
    if (tags instanceof TagMap) {
      this._tags = tags
    }
    if (Array.isArray(tags)) {
      this._tags.addTags(tags)
    }
    return this
  }

  // GETTERS

  get map() {
    return this._tags
  }

  get tags() {
    return this._tags.tagList
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

  get remove() {
    return this._remove
  }

  get color() {
    return this._color
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

  set remove(remove: boolean) {
    this._remove = remove
  }

  set color(color: boolean) {
    this._color = color
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
