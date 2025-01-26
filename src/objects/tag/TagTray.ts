import Tag from '@/objects/nu/Tag'
import Legend from '@/objects/tag/Legend'
import SettingsManager from '@/objects/SettingsManager'
import TagFactory from '@/objects/nu/TagFactory' // Import TagFactory
type SettingValue = string | number | boolean // Shared by Map and Record
import { v4 as uuidv4 } from 'uuid'

class TagTray {
  protected _id = uuidv4()
  protected _legend = new Legend()
  protected _selected = [] as Tag[]
  protected _settings = new SettingsManager({
    tray: true,
    labels: true,
    icons: true,
    colors: true,
    closable: false,
    logs: true,
    bodys: true,
    titles: true,
  })

  protected _dragging = false

  // Styles

  protected _tray = true

  protected _labels = true
  protected _icons = true
  protected _colors = true
  protected _closable = false
  protected _logs = true
  protected _bodys = true
  protected _titles = true

  protected _tag: Tag

  constructor(tags: Tag[] | Legend | undefined = undefined) {
    if (typeof tags === 'string') {
      this._tag = TagFactory.create(tags)
    } else if (tags instanceof Legend) {
      this._tag = TagFactory.create('Legend', { color: 'info', icon: 'mdi-map-legend' })
      this._legend = tags
    } else if (Array.isArray(tags)) {
      this._tag = TagFactory.create('list', { color: 'accent', icon: 'mdi-list-box-outline' })
      this._legend.addTags(tags)
    } else {
      this._tag = TagFactory.create('default', { color: 'default', icon: 'mdi-tray' })
    }
    return this
  }

  setSetting(key: string, value: SettingValue): void {
    this._settings.setSetting(key, value)
  }

  getSetting<T extends SettingValue>(key: string, defaultValue?: T): T {
    return (this._settings.getSetting(key) as T) ?? defaultValue!
  }

  toggleSetting(key: string): void {
    const current = this.settings.getSetting(key)
    if (typeof current === 'boolean') {
      this._settings.setSetting(key, !current)
    } else {
      throw new Error(`Cannot toggle a non-boolean setting: ${key}`)
    }
  }

  // ACTIONS

  add(payload: Tag | Tag[]) {
    if (Array.isArray(payload)) {
      this._legend.addTags(payload)
    } else {
      this._legend.addTag(payload)
    }
  }

  remove(payload: Tag | Tag[]) {
    if (Array.isArray(payload)) {
      payload.forEach((tag) => this._legend.removeTag(tag))
    } else {
      this._legend.removeTag(payload)
    }
  }

  create(payload: string) {
    this._legend.addTag(TagFactory.create(payload))
  }
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

  dropString = (payload: string) => {
    console.log('dropString: ', payload, TagFactory.create(payload))
    this._legend.addTag(TagFactory.create(payload))
    this._dragging = false
  }

  get settings() {
    return this._settings
  }

  get selection() {
    //persona.themeTags.filter(tag => props.filter?.includes(tag.name)) || []

    this._legend.tags.filter((tag) => this._selected.includes(tag))
    return this._selected
  }

  // GETTERS

  get selected() {
    return this._selected
  }

  get id() {
    return this._id
  }

  get name() {
    return this._tag.name
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

  get tray() {
    return this._settings.getSetting('tray')
  }

  get dragging() {
    return this._settings.getSetting('dragging')
  }

  // STYLES

  get labels() {
    return this._settings.getSetting('labels')
  }

  get icons() {
    return this._settings.getSetting('icons')
  }

  get colors() {
    return this._settings.getSetting('colors')
  }

  get closable() {
    return this._settings.getSetting('closable')
  }

  get logs() {
    return this._settings.getSetting('logs')
  }

  get bodys() {
    return this._settings.getSetting('bodys')
  }

  get titles() {
    return this._settings.getSetting('titles')
  }

  // SETTERS
  set tray(tray: boolean) {
    this._tray = tray
  }

  set selected(tags: Tag[]) {
    this._selected = tags
  }

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

  set dragging(dragging: boolean) {
    this._settings.setSetting('dragging', dragging)
  }

  // STYLES

  set labels(labels: boolean) {
    this._settings.setSetting('labels', labels)
  }

  set icons(icons: boolean) {
    this._settings.setSetting('icons', icons)
  }

  set colors(colors: boolean) {
    this._settings.setSetting('colors', colors)
  }

  set closable(closable: boolean) {
    this._settings.setSetting('closable', closable)
  }

  set logs(logs: boolean) {
    this._settings.setSetting('logs', logs)
  }

  set bodys(bodys: boolean) {
    this._settings.setSetting('bodys', bodys)
  }

  set titles(titles: boolean) {
    this._settings.setSetting('titles', titles)
  }
}
export default TagTray
