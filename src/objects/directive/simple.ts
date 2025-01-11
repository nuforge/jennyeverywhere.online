import type { Directive } from 'vue'

const simpleDirective: Directive = {
  mounted(el: HTMLElement) {
    el.addEventListener('click', () => {
      console.log('Simple directive clicked!')
    })

    //console.log('Simple directive mounted', el)
  },
  updated(el: HTMLElement) {
    //console.log('Simple directive updated', el)
    el.removeEventListener('click', () => {})
  },
}

export default simpleDirective
// Usage: main.ts main.js

//app.directive('simple-directive', simpleDirective)
// <div v-simple-directive></div>
