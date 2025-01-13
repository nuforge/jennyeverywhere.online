import type { Directive } from 'vue'
import { useDragDrop } from '@/stores/dragDrop/useDragDrop'
import DragManager from '@/objects/drag/DragManager'

const { onDrop } = useDragDrop()
const dragManager = new DragManager()

export const droppable: Directive = {
  mounted(el, binding) {
    el.addEventListener('dragover', (event: DragEvent) => {
      dragManager.dragOver(event)
      el.classList.add('drag-over')
    })

    el.addEventListener('dragleave', () => {
      el.classList.remove('drag-over')
    })

    el.addEventListener('drop', (event: DragEvent) => {
      event.preventDefault()
      el.classList.remove('drag-over')

      const payload = event.dataTransfer?.getData('generic')
      console.log('drop', payload)
      if (!payload) return

      if (typeof binding.value === 'function') {
        // Pass type and data to the drop handler
        binding.value({ payload })
      }
      if (binding.value) onDrop(el.id, binding.value)
    })
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('dragleave', () => {})
    el.removeEventListener('dragover', () => {})
    el.removeEventListener('drop', () => {})
  },
}
