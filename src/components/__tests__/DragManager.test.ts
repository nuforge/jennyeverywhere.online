import { describe, it, expect, beforeEach, vi } from 'vitest'
import DragDataHandler from '@/objects/drag/DragDataHandler'

describe('DragDataHandler', () => {
  let dragDataHandler: DragDataHandler
  let event: DragEvent

  beforeEach(() => {
    dragDataHandler = new DragDataHandler()
    event = new DragEvent('dragstart')
  })

  it('should set drag image', () => {
    dragDataHandler.setDragImage(event)
    expect(event.dataTransfer?.setDragImage).toHaveBeenCalled()
  })

  it('should write data to dataTransfer', () => {
    dragDataHandler.writeDataTransfer(event, 'text/plain', 'test')
    expect(event.dataTransfer?.getData('text/plain')).toBe('test')
  })

  it('should clear data from dataTransfer', () => {
    dragDataHandler.writeDataTransfer(event, 'text/plain', 'test')
    dragDataHandler.clearDataTransfer(event)
    expect(event.dataTransfer?.getData('text/plain')).toBe('')
  })

  it('should handle drag start', () => {
    dragDataHandler.dragStart(event, 'text/plain', 'test')
    expect(event.dataTransfer?.getData('text/plain')).toBe('test')
    expect(event.dataTransfer?.setDragImage).toHaveBeenCalled()
  })

  it('should handle drag end', () => {
    dragDataHandler.dragStart(event, 'text/plain', 'test')
    dragDataHandler.dragEnd(event)
    expect(event.dataTransfer?.getData('text/plain')).toBe('')
  })

  it('should handle drag over', () => {
    const preventDefault = vi.fn()
    event.preventDefault = preventDefault
    dragDataHandler.dragOver(event)
    expect(preventDefault).toHaveBeenCalled()
  })

  it('should handle drop', () => {
    const callback = vi.fn()
    dragDataHandler.writeDataTransfer(event, 'text/plain', 'test')
    dragDataHandler.drop(event, callback)
    expect(callback).toHaveBeenCalledWith('test')
  })
})
