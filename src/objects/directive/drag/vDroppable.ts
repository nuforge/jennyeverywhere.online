import type { DirectiveBinding } from 'vue'
import { useDragDrop } from '@/stores/dragDrop/useDragDrop'
import Tag from '@/objects/nu/v1/ValTag'

const { onDrop } = useDragDrop()

export const vDroppable = {
  mounted(el: HTMLElement, binding: DirectiveBinding<(tags: Tag[]) => void>) {
    el.addEventListener('dragover', (event) => {
      event.preventDefault() // Allows the element to accept drops
      el.classList.add('active')
    })

    el.addEventListener('dragleave', () => {
      el.classList.remove('active')
    })

    el.addEventListener('drop', () => {
      el.classList.remove('active')
      if (binding.value) onDrop(el.id, binding.value)
    })
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('dragover', () => {})
    el.removeEventListener('drop', () => {})
  },
}
