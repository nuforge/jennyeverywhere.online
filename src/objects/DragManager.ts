import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png'

class MarkdownManager {
  protected _dragImage: HTMLImageElement | null = null
  // Track who starts and ends the drag
  // Tags can drag to text area, so we need to know who starts the drag
  // And text can be dragged into Tags to create tags
  // ANd Trays and selections of trays can be dragged into tags, text, and other trays
  constructor() {
    const img = new Image()
    img.src = imgSrc

    img.onload = () => {
      this._dragImage = img
    }
    return this
  }

  setDragImage = (event: DragEvent) => {
    if (!event.dataTransfer) return
    if (this._dragImage) {
      event.dataTransfer?.setDragImage(this._dragImage, 10, 10)
    } else {
      console.warn('Drag image not ready!')
    }
  }

  hasDataTransfer = (event: DragEvent, type: string) => {
    if (!event.dataTransfer) return false
    return event.dataTransfer.types.includes(type)
  }

  writeDataTransfer = (event: DragEvent, type: string, data: string) => {
    console.log('writeDataTransfer', data)
    if (!event.dataTransfer) return
    this.clearDataTransfer(event)
    event.dataTransfer.setData(type, data)
    return this.setDragImage(event)
  }

  clearDataTransfer = (event: DragEvent) => {
    if (!event.dataTransfer) return
    return event.dataTransfer.clearData()
  }

  readDataTransfer = (event: DragEvent, type: string) => {
    if (!event.dataTransfer) return
    return event.dataTransfer.getData(type)
  }

  // Global Drag and Drop Event Handlers

  drop = (event: DragEvent, type: string) => {
    console.log('onDrop:', type)
    event.preventDefault()
    const data = event.dataTransfer?.getData(type)
    this.clearDataTransfer(event)
    console.log(data)
    return data
  }

  dragStart = (event: DragEvent, type: string) => {
    console.log('dragStart', type)
    return this.writeDataTransfer(event, 'tag', type)
  }

  dragEnd = (event: DragEvent, type: string) => {
    console.log('dragEnd', type)
    return this.clearDataTransfer(event)
  }

  dragOver = (event: DragEvent, type: string) => {
    console.log('dragOver', type)

    return event.preventDefault()
  }
}

export default MarkdownManager
