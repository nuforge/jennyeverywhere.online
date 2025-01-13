import { describe, it, expect, beforeEach, vi } from 'vitest'
import DragManager from '@/objects/drag/DragManager'

describe('DragManager', () => {
  let dragManager: DragManager
  let event: DragEvent

  beforeEach(() => {
    dragManager = new DragManager()
    event = new DragEvent('dragstart')
  })

  it('should set drag image', () => {
    dragManager.setDragImage(event)
    expect(event.dataTransfer?.setDragImage).toHaveBeenCalled()
  })

  it('should write data to dataTransfer', () => {
    dragManager.writeDataTransfer(event, 'text/plain', 'test')
    expect(event.dataTransfer?.getData('text/plain')).toBe('test')
  })

  it('should clear data from dataTransfer', () => {
    dragManager.writeDataTransfer(event, 'text/plain', 'test')
    dragManager.clearDataTransfer(event)
    expect(event.dataTransfer?.getData('text/plain')).toBe('')
  })

  it('should handle drag start', () => {
    dragManager.dragStart(event, 'text/plain', 'test')
    expect(event.dataTransfer?.getData('text/plain')).toBe('test')
    expect(event.dataTransfer?.setDragImage).toHaveBeenCalled()
  })

  it('should handle drag end', () => {
    dragManager.dragStart(event, 'text/plain', 'test')
    dragManager.dragEnd(event)
    expect(event.dataTransfer?.getData('text/plain')).toBe('')
  })

  it('should handle drag over', () => {
    const preventDefault = vi.fn()
    event.preventDefault = preventDefault
    dragManager.dragOver(event)
    expect(preventDefault).toHaveBeenCalled()
  })

  it('should handle drop', () => {
    const callback = vi.fn()
    dragManager.writeDataTransfer(event, 'text/plain', 'test')
    dragManager.drop(event, callback)
    expect(callback).toHaveBeenCalledWith('test')
  })
})
