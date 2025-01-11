// VUE Directive Binding

// File: src/directives/draggable.ts
import type { DirectiveBinding } from 'vue'

// Custom Draggable Directive
const draggableDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.draggable = true // Make the element draggable
    el.addEventListener('dragstart', (event) => {
      const data = binding.value || {} // Use the data passed into the directive
      if (event.dataTransfer) {
        event.dataTransfer.setData('text/plain', JSON.stringify(data)) // Set drag data
      }
    })
  },
  beforeUnmount(el: HTMLElement) {
    // Clean up listeners when element is unmounted
    el.removeEventListener('dragstart', () => {})
  },
}

export default draggableDirective
