import type { Directive } from 'vue'

export const draggable: Directive = {
  mounted(el, binding) {
    el.setAttribute('draggable', 'true')

    el.addEventListener('dragstart', (event: DragEvent) => {
      if (!event.dataTransfer) return

      const { data, type } = binding.value
      const dragPayload = {
        type: type || 'generic', // Default to "generic" if no type is provided
        data, // Pass the object to be dragged (e.g., Tag, Image data)
      }

      event.dataTransfer.setData('application/json', JSON.stringify(dragPayload))
      event.dataTransfer.effectAllowed = 'move'

      el.classList.add('dragging')
    })

    el.addEventListener('dragend', () => {
      el.classList.remove('dragging')
    })
  },
}
