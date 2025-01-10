import { ref } from 'vue'
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png'
const dragImage = ref<HTMLImageElement | null>(null)

const img = new Image()
img.src = imgSrc

img.onload = () => {
  dragImage.value = img
}

const writeDataTransfer = (event: DragEvent, type: string, data: string) => {
  console.log('writeDataTransfer', data)
  if (!event.dataTransfer) return
  event.dataTransfer.clearData()
  event.dataTransfer.setData(type, data)

  if (dragImage.value) {
    event.dataTransfer?.setDragImage(dragImage.value, 10, 10)
  } else {
    console.warn('Drag image not ready!')
  }
}

export default writeDataTransfer
