// src/directives/tagBehavior.ts
import type { Directive, DirectiveBinding } from 'vue'

const tagBehavior: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const tag = binding.value
    console.log('Tag directive mounted:', binding.value)

    if (tag && tag.name) {
      // Example: If the tag represents 'strong', apply bold style
      if (tag.name === 'strong') {
        el.style.fontWeight = 'bold'
      }

      // Example: If the tag represents 'visibility' (invisibility), hide the element
      if (tag.name === 'invisibility') {
        el.style.opacity = '20'
      }

      // You could also handle adding more complex behaviors based on other tag attributes
      if (tag.name === 'fire') {
        el.style.color = '#FF0000' // Apply a class for fire-based styling
      }

      el.addEventListener('click', () => {
        console.log('Tag clicked:', tag.name)
      })

      el.addEventListener('dragend', () => {
        el.classList.remove('dragging')
      })
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

  unmounted(el: HTMLElement) {
    // Clean up if needed
    el.classList.remove('fire-class')
    el.removeEventListener('click', () => {})
    el.removeEventListener('dragend', () => {})
  },
}

export default tagBehavior
