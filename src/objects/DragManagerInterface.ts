export interface DragManager {
  setDragImage(event: DragEvent): void
  writeDataTransfer(event: DragEvent, type: string, data: string): void
  clearDataTransfer(event: DragEvent): void
  dragStart(event: DragEvent, type: string, data: string): void
  dragEnd(event: DragEvent): void
  dragOver(event: DragEvent): void
  drop(event: DragEvent, callback: (data: string) => void): void
}
