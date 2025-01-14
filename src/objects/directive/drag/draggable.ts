import type { Directive } from 'vue'
import { useDragDrop } from '@/stores/dragDrop/useDragDrop'
import DragDataHandler from '@/objects/drag/DragDataHandler'
import Tag from '@/objects/nu/Tag'

const { onDragStart, onDragEnd } = useDragDrop()
const dragDataHandler = new DragDataHandler()

export const draggable: Directive = {
  mounted(el, binding) {
    el.setAttribute('draggable', 'true')

    el.addEventListener('dragstart', (event: DragEvent) => {
      //console.log('draggable', binding.value)
      if (!event.dataTransfer) return
      el.classList.add('dragging')

      //console.log(binding.value)
      if (binding.value) onDragStart(binding.value)

      if (binding.value instanceof Tag) {
        dragDataHandler.dragStart(event, 'text/plain', binding.value.seed as string)
      }
    })

    el.addEventListener('dragend', (event: DragEvent) => {
      el.classList.remove('dragging')
      onDragEnd()
      dragDataHandler.dragEnd(event)
    })
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('dragstart', () => {})
    el.removeEventListener('dragend', () => {})
  },
}
