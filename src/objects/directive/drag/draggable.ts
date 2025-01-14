import type { Directive } from 'vue'
import { useDragDrop } from '@/stores/dragDrop/useDragDrop'
import DragDataHandler from '@/objects/drag/DragManager'
import Tag from '@/objects/nu/Tag'

const { onDragStart, onDragEnd } = useDragDrop()
const dragManager = new DragDataHandler()

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
        dragManager.dragStart(event, 'text/plain', binding.value.seed as string)
      }
    })

    el.addEventListener('dragend', (event: DragEvent) => {
      el.classList.remove('dragging')
      onDragEnd()
      dragManager.dragEnd(event)
    })
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('dragstart', () => {})
    el.removeEventListener('dragend', () => {})
  },
}
