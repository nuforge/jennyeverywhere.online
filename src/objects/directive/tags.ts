// src/directives/tagBehavior.ts
import type { Directive, DirectiveBinding } from 'vue'

const tagBehavior: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { tag } = binding.value

    // Example: If the tag represents 'strong', apply bold style
    if (tag.name === 'strong') {
      el.style.fontWeight = 'bold'
    }

    // Example: If the tag represents 'visibility' (invisibility), hide the element
    if (tag.value === 'invisibility') {
      el.style.display = 'none'
    }

    // You could also handle adding more complex behaviors based on other tag attributes
    if (tag.value === 'fire') {
      el.classList.add('fire-class') // Apply a class for fire-based styling
    }
  },

  updated(el: HTMLElement, binding: DirectiveBinding) {
    const { tag } = binding.value

    // Recheck tag values in case they change
    if (tag.name === 'strong') {
      el.style.fontWeight = 'bold'
    }
    // ... handle other dynamic updates based on tag changes
  },

  unmounted(el: HTMLElement, binding: DirectiveBinding) {
    // Clean up if needed
    el.classList.remove('fire-class')
  },
}

export default tagBehavior
