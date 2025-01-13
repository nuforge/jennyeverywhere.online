import type { Directive } from 'vue'
import { useDragDrop } from '@/stores/dragDrop/useDragDrop'
import DragManager from '@/objects/drag/DragManager'

const { onDragStart, onDragEnd } = useDragDrop()
const dragManager = new DragManager()

export const draggable: Directive = {
  mounted(el, binding) {
    el.setAttribute('draggable', 'true')

    el.addEventListener('dragstart', (event: DragEvent) => {
      //console.log('draggable', binding.value)
      if (!event.dataTransfer) return
      console.log(binding.value)
      if (binding.value) onDragStart(binding.value)
      el.classList.add('dragging')
      dragManager.dragStart(event, 'generic', binding.value)
    })

    el.addEventListener('dragend', (event: DragEvent) => {
      onDragEnd()
      el.classList.remove('dragging')
      dragManager.dragEnd(event)
    })
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('dragstart', () => {})
    el.removeEventListener('dragend', () => {})
  },
}
