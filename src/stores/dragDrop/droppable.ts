import type { Directive } from 'vue'

export const droppable: Directive = {
  mounted(el, binding) {
    el.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault()
      el.classList.add('drag-over')
    })

    el.addEventListener('dragleave', () => {
      el.classList.remove('drag-over')
    })

    el.addEventListener('drop', (event: DragEvent) => {
      event.preventDefault()
      el.classList.remove('drag-over')

      const payload = event.dataTransfer?.getData('application/json')
      if (!payload) return

      const { type, data } = JSON.parse(payload)

      if (typeof binding.value === 'function') {
        // Pass type and data to the drop handler
        binding.value({ type, data })
      }
    })
  },
}
