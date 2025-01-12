// src/directives/tagBehavior.ts
import type { Directive, DirectiveBinding } from 'vue'
import Tag from '@/objects/nu/Tag'

const tagBehavior: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const tag = binding.value as Tag

    if (tag && tag.name) {
      // Example: If the tag represents 'strong', apply bold style
      updateTagStyle(el, tag)

      el.addEventListener('dragend', () => {
        el.classList.remove('dragging')
      })
    }
    el.addEventListener('dragend', () => {
      updateTagStyle(el, tag)
    })
  },

  updated(el: HTMLElement, binding: DirectiveBinding) {
    const tag = binding.value as Tag
    // If tag changes, reapply the behavior
    updateTagStyle(el, tag)
    console.log('Tag directive updated:', tag)
  },

  unmounted(el: HTMLElement) {
    // Clean up if needed
    el.removeEventListener('click', () => {})
    el.removeEventListener('dragend', () => {})
  },
}

const updateTagStyle = (el: HTMLElement, tag: Tag) => {
  el.addEventListener('click', () => {
    //el.innerHTML = tag.name
    console.log('Tag clicked:', tag.name)
  })
  el.style.color = tag.color
  if (tag.name === 'strong') {
    el.style.fontWeight = 'bold'
  }

  if (tag.name === 'invisibility') {
    el.style.opacity = '0.2'
  }

  if (tag.name === 'fire') {
    el.style.color = 'orange'
  }
}

export default tagBehavior
