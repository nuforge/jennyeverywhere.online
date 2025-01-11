import type { DirectiveBinding } from 'vue'

// src/directives/tag.ts
const tagDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // Assume the tag passed has a 'color' property
    const { color, type } = binding.value // binding.value contains the tag object

    if (color) {
      el.style.color = color // Apply the color as inline style
    }

    // Example: Add other behaviors based on tag type
    if (type === 'home') {
      el.addEventListener('click', () => {
        console.log('Home tag clicked!')
      })
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    // If the tag data changes, update styles accordingly
    const { color } = binding.value
    if (color) {
      el.style.color = color // Update color if the tag data changes
    }
  },
}

export default tagDirective
