import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png'
import type { DragManager as DragManagerInterface } from './DragManagerInterface'

class DragManager implements DragManagerInterface {
  private _dragImage: HTMLImageElement | null = null

  constructor() {
    const img = new Image()
    img.src = imgSrc
    img.onload = () => {
      this._dragImage = img
    }
  }

  setDragImage(event: DragEvent) {
    if (event.dataTransfer && this._dragImage) {
      event.dataTransfer.setDragImage(this._dragImage, 10, 10)
    }
  }

  writeDataTransfer(event: DragEvent, type: string, data: string) {
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData(type, data)
    }
  }

  clearDataTransfer(event: DragEvent) {
    if (event.dataTransfer) {
      event.dataTransfer.clearData()
    }
  }

  dragStart(event: DragEvent, type: string, data: string) {
    //console.log('dragStart', type, data)
    this.writeDataTransfer(event, type, data)
    this.setDragImage(event)
  }

  dragEnd(event: DragEvent) {
    this.clearDataTransfer(event)
  }

  dragOver(event: DragEvent) {
    event.preventDefault()
  }

  drop(event: DragEvent, callback: (data: string) => void) {
    event.preventDefault()
    const data = event.dataTransfer?.getData('text/plain')
    if (data) {
      callback(data)
    }
    this.clearDataTransfer(event)
  }
}

export default DragManager
