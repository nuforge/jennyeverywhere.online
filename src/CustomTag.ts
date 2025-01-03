class CustomTag extends HTMLElement {
  connectedCallback() {
    const tag = this.getAttribute('tag') || ''
    const color = this.getAttribute('color') || 'inherit'
    const icon = this.getAttribute('icon') || ''

    this.innerHTML = `<i class="mdi ${icon} text-${color}" tag="${tag}" color="${color}" icon="${icon}"></i> <a tag="${tag}" color="${color}" icon="${icon}">${this.innerHTML}</a>`
    this.style.color = color
  }
}

// Define the custom element
window.customElements.define('custom-tag', CustomTag)

// template: `[<i class="mdi icon text-color"></i> tag](tag)
// <span><slot></slot></span>
