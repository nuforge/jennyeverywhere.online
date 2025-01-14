import type { Directive } from 'vue'
import { useDragDrop } from '@/stores/dragDrop/useDragDrop'
import DragDataHandler from '@/objects/drag/DragManager'

const { onDrop, dragState } = useDragDrop()
const dragManager = new DragDataHandler()

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

      const payload = event.dataTransfer?.getData('text/plain')
      if (!payload) return
      //console.log('drop', payload)
      const seeds = payload.split(',')
      const tags = Array.isArray(dragState.value.activeTags)
        ? dragState.value.activeTags?.filter((tag) => seeds.includes(tag.seed as string))
        : dragState.value.activeTags

      if (typeof binding.value === 'function') {
        binding.value({ tags })
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
