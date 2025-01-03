import markdownit from 'markdown-it'
import Tag from '@/objects/Tag'

class MarkdownManager {
  protected _md = markdownit({
    html: true,
    linkify: true,
  })

  constructor() {
    this._md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      const token = tokens[idx]

      // Remove the href attribute if it's empty
      const hrefIndex = token.attrIndex('href')
      if (hrefIndex !== -1 && token.attrs && !token.attrs[hrefIndex][1]) {
        token.attrs.splice(hrefIndex, 1)
      }

      // Render the opening tag
      return self.renderToken(tokens, idx, options)
    }

    return this
  }

  getTagFromEvent(event: MouseEvent) {
    const target = event.target as HTMLElement

    if (target.tagName === 'A' || target.tagName === 'I') {
      const newTag = new Tag(
        target.getAttribute('tag') || undefined,
        target.getAttribute('color') || undefined,
        target.getAttribute('icon') || undefined,
      )
      return newTag
    }

    if (target.tagName === 'P') {
      console.log(target.tagName, window.getSelection())
      const selectedText = window.getSelection()?.toString().trim()
      if (selectedText && typeof selectedText === 'string') {
        console.log('P:', selectedText)
        const newTag = new Tag(selectedText)

        return newTag
      }
    }
    return false
  }

  escapePattern(pattern: string): string {
    return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  // Escape special regex characters if pattern is a literal string
  generateRegex(pattern: string): RegExp {
    // Escape special regex characters
    return new RegExp(`\\b${this.escapePattern(pattern)}\\b`, 'gi') // Whole word match, case insensitive
  }

  linkTags(tags: Array<Tag>, text?: string) {
    //match.toLowerCase().replace(/\s/g, '-') // Convert to lowercase and replace spaces with hyphens
    const placeholders: Record<string, Tag> = {}
    let modifiedText = text || ''
    const sortedTags = [...tags].sort((a, b) => b.name.length - a.name.length)

    // Replace matches with unique placeholders
    for (const tag of sortedTags) {
      const placeholder = `__PLACEHOLDER_${tag.name}__`
      placeholders[placeholder] = tag

      // Match tag name as a whole word (case insensitive)
      const regex = this.generateRegex(tag.name)
      //console.log('regex:', regex)
      modifiedText = modifiedText.replace(regex, placeholder)
    }

    // Replace placeholders with their final values
    for (const [placeholder, replacement] of Object.entries(placeholders)) {
      modifiedText = modifiedText?.replace(new RegExp(placeholder, 'g'), replacement.name)
    }

    return tags.reduce((modifiedText, tag) => {
      const icon = tag.icon || 'default'
      const color = tag.color || 'default'
      const pattern = tag.name
      const regex = this.escapePattern(pattern)
      // OLD:  `<i class="mdi ${icon} text-${color}" icon="${icon}" color="${color}" tag="${match}"></i> [${match}]()`
      return modifiedText.replace(
        regex,
        (match) =>
          `<custom-tag tag="${match}" color="${color}" icon="${icon}" >${match}</custom-tag>`,
      )
    }, text || '')
  }

  textToMarkdown(text: string, tags: Array<Tag>) {
    //const selected = taglist.value.filter(tag => tags.selection.includes(tag.id))
    const markdown = this.linkTags(tags, text)
    return this.markitdown(markdown)
  }

  htmlToTags(html: string) {
    // Create a DOM element to parse the HTML string
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    // Get all <a> and <i> elements from the document
    const links = Array.from(doc.querySelectorAll('a')).map((a) => ({
      tag: 'a',
      href: a.getAttribute('href'),
      text: a.textContent?.trim(),
    }))

    const icons = Array.from(doc.querySelectorAll('i')).map((i) => ({
      name: 'i',
      icon: i.className,
      text: i.textContent?.trim(),
    }))

    const custom = Array.from(doc.querySelectorAll('custom-tag')).map(
      (custom) =>
        new Tag(
          custom.getAttribute('tag') || undefined,
          custom.getAttribute('color') || undefined,
          custom.getAttribute('icon') || undefined,
        ),
    )

    // Return both lists
    return { links, icons, custom }
  }

  markitdown(text: string) {
    return this._md.render(text)
  }
}

export default MarkdownManager
