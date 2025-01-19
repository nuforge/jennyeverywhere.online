import { describe, it, expect, beforeEach, vi } from 'vitest'
import DragDataHandler from '@/objects/drag/DragDataHandler'

describe('DragDataHandler', () => {
  let dragDataHandler: DragDataHandler
  let event: DragEvent

  beforeEach(() => {
    dragDataHandler = new DragDataHandler()
    event = new DragEvent('dragstart')
    Object.defineProperty(event, 'dataTransfer', {
      value: {
        setDragImage: vi.fn(),
        setData: vi.fn(),
        getData: vi.fn().mockReturnValue(''),
        clearData: vi.fn(),
        effectAllowed: '',
      },
      writable: true,
    })
  })

  it('should set drag image', () => {
    dragDataHandler.setDragImage(event)
    expect(event.dataTransfer?.setDragImage).toHaveBeenCalled()
  })

  it('should write data to dataTransfer', () => {
    dragDataHandler.writeDataTransfer(event, 'text/plain', 'test')
    expect(event.dataTransfer?.setData).toHaveBeenCalledWith('text/plain', 'test')
    expect(event.dataTransfer?.effectAllowed).toBe('move')
  })

  it('should clear data from dataTransfer', () => {
    dragDataHandler.writeDataTransfer(event, 'text/plain', 'test')
    dragDataHandler.clearDataTransfer(event)
    expect(event.dataTransfer?.clearData).toHaveBeenCalled()
  })

  it('should handle drag start', () => {
    dragDataHandler.dragStart(event, 'text/plain', 'test')
    expect(event.dataTransfer?.setData).toHaveBeenCalledWith('text/plain', 'test')
    expect(event.dataTransfer?.setDragImage).toHaveBeenCalled()
  })

  it('should handle drag end', () => {
    dragDataHandler.dragEnd(event)
    expect(event.dataTransfer?.clearData).toHaveBeenCalled()
  })

  it('should prevent default on drag over', () => {
    const preventDefault = vi.fn()
    event.preventDefault = preventDefault
    dragDataHandler.dragOver(event)
    expect(preventDefault).toHaveBeenCalled()
  })

  it('should handle drop event and execute callback', () => {
    const callback = vi.fn()
    Object.defineProperty(event, 'dataTransfer', {
      value: {
        getData: vi.fn().mockReturnValue('test'),
        clearData: vi.fn(),
      },
      writable: true,
    })
    dragDataHandler.drop(event, callback)
    expect(callback).toHaveBeenCalledWith('test')
    expect(event.dataTransfer?.clearData).toHaveBeenCalled()
  })
})
