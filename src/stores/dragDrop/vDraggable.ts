import type { DirectiveBinding } from 'vue'
import { useDragDrop } from '@/stores/dragDrop/useDragDrop'
import Tag from '@/objects/nu/NuTag'

const { onDragStart, onDragEnd } = useDragDrop()

export const vDraggable = {
  mounted(el: HTMLElement, binding: DirectiveBinding<Tag[]>) {
    el.draggable = true

    el.addEventListener('dragstart', () => {
      if (binding.value) onDragStart(binding.value)
    })

    el.addEventListener('dragend', onDragEnd)
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('dragstart', () => {})
    el.removeEventListener('dragend', () => {})
  },
}
