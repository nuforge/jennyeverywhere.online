import Tag from '@/objects/nu/Tag'
import Legend from '@/objects/tag/Legend'
import SettingsManager from '@/objects/SettingsManager'
type SettingValue = string | number | boolean // Shared by Map and Record

class TagTray extends Tag {
  protected _legend = new Legend()
  protected _order: string[] = []
  protected _selection = [] as Tag[]
  protected _settings = new SettingsManager({
    tray: true,
    labels: true,
    icons: true,
    colors: true,
    closable: false,
    logs: true,
    bodys: true,
    titles: true,
    sortable: true,
    values: false,
  })

  constructor(tags?: Tag[] | Legend) {
    super('Tray')
    if (tags) {
      this._legend.addTags(tags as Tag[])
    }
    return this
  }

  setSetting(key: string, value: SettingValue): void {
    this._settings.setSetting(key, value)
  }

  setting<T extends SettingValue>(key: string, defaultValue?: T): T {
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

  addTags(payload: Tag[]) {
    this._order.push(...payload.map((tag) => tag.name))
    return this._legend.addTags(payload)
  }

  // ChatGPT
  addTag(tag: Tag): void {
    this._legend.addTag(tag)
    this._order.push(tag.name)
  }

  create(payload: string) {
    this._legend.addTag(new Tag(payload))
  }

  remove(payload: Tag | Tag[]) {
    if (Array.isArray(payload)) {
      payload.forEach((tag) => this._legend.removeTag(tag))
    } else {
      this._legend.removeTag(payload)
    }
  }

  // ChatGPT
  removeTag(name: string): void {
    if (this._legend.has(name)) {
      this._legend.delete(name)
      this._order = this._order.filter((tagName) => tagName !== name)
    } else {
      throw new Error(`Tag with name "${name}" does not exist.`)
    }
  }

  moveIndex(currentIndex: number, newIndex: number): void {
    if (newIndex < 0 || newIndex >= this._order.length) {
      throw new Error(`Invalid newIndex: ${newIndex}`)
    }
    const oldname = this._order[currentIndex]
    // Reorder the array
    this._order.splice(currentIndex, 1) // Remove from current position
    this._order.splice(newIndex, 0, oldname) // Insert at new position
  }

  // ChatGPT
  moveTag(name: string, newIndex: number): void {
    const currentIndex = this._order.indexOf(name)
    if (currentIndex === -1) {
      throw new Error(`Tag with name "${name}" does not exist.`)
    }

    if (newIndex < 0 || newIndex >= this._order.length) {
      throw new Error(`Invalid newIndex: ${newIndex}`)
    }

    // Reorder the array
    this._order.splice(currentIndex, 1) // Remove from current position
    this._order.splice(newIndex, 0, name) // Insert at new position
  }

  getTag(name: string): Tag | undefined {
    return this._legend.getTag(name)
  }

  getOrderedTags(): Tag[] {
    return this._order.map((name) => this._legend.getTag(name)!)
  }
  getTagIndex(name: string): number {
    return this._order.indexOf(name)
  }

  //Drag Start
  dragStart = () => {
    this._settings.setSetting('dragging', true)
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
    this._settings.setSetting('dragging', false)
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
    this._settings.setSetting('dragging', false)
  }

  dropString = (payload: string) => {
    console.log('dropString: ', payload, new Tag(payload))
    this._legend.addTag(new Tag(payload))
    this._settings.setSetting('dragging', false)
  }

  // GETTERS

  get settings() {
    return this._settings
  }

  get selection() {
    this._legend.tags.filter((tag) => this._selection.includes(tag))
    return this._selection
  }

  get tags() {
    return this._legend.tags
  }

  // SETTERS
  set settings(settings: SettingsManager) {
    this._settings = settings
  }

  set selection(tags: Tag[]) {
    this._selection = tags
  }

  set tags(tags: Tag[]) {
    this._legend.clearTags()
    this._legend.addTags(tags)
  }
}

export default TagTray
