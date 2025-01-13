import type { Directive } from 'vue'
import { useDragDrop } from '@/stores/dragDrop/useDragDrop'
//import Tag from '@/objects/nu/v1/ValTag'

const { onDragStart, onDragEnd } = useDragDrop()

export const draggable: Directive = {
  mounted(el, binding) {
    el.setAttribute('draggable', 'true')

    el.addEventListener('dragstart', (event: DragEvent) => {
      console.log('draggable', binding.value)
      if (!event.dataTransfer) return
      const { data, type } = binding.value
      const dragPayload = {
        type: type || 'generic', // Default to "generic" if no type is provided
        data, // Pass the object to be dragged (e.g., Tag, Image data)
      }
      if (binding.value) onDragStart(binding.value)

      event.dataTransfer.setData('application/json', JSON.stringify(dragPayload))
      event.dataTransfer.effectAllowed = 'move'

      el.classList.add('dragging')
    })

    el.addEventListener('dragend', () => {
      el.classList.remove('dragging')
      onDragEnd()
    })
  },
}
