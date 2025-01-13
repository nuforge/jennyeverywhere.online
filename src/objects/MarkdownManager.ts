import markdownit from 'markdown-it'
import Tag from '@/objects/nu/v1/NuTag'

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

  textToMarkdown(text: string, tags?: Array<Tag>) {
    //const selected = taglist.value.filter(tag => tags.selection.includes(tag.id))
    const markdown = tags ? this.linkTags(tags, text) : text
    return this.markitdown(markdown)
  }

  markitdown(text: string) {
    return this._md.render(text)
  }

  escapePattern(pattern: string): string {
    return pattern.replace(/\[([^\]]+)\](?:\(([^)]+)\))?/g, (match, p1, p2) => {
      return p2 ? `[${p1}](${p2})` : `[${p1}](${p1})` // If p2 exists, return [a](b); otherwise, return [a](a)
    })
    //return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escape special regex characters
  }

  // Escape special regex characters if pattern is a literal string
  generateRegex(pattern: string): RegExp {
    return new RegExp(`(?<!\\w)${this.escapePattern(pattern)}(?!\\w)`, 'gi') // Matches exact words
    // return new RegExp(`\\b${this.escapePattern(pattern)}\\b`, 'gi') // Whole word match, case-insensitive
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
      const escapedPlaceholder = this.escapePattern(placeholder)
      modifiedText = modifiedText.replace(new RegExp(escapedPlaceholder, 'g'), replacement.name)
    }

    return tags.reduce((modifiedText, tag) => {
      const icon = tag.icon || 'default'
      const color = tag.color || 'default'
      const pattern = tag.label
      const regex = this.escapePattern(pattern)
      // OLD:  `<i class="mdi ${icon} text-${color}" icon="${icon}" color="${color}" tag="${match}"></i> [${match}]()`
      return modifiedText.replace(
        new RegExp(regex, 'g'),
        (match) =>
          `<custom-tag tag="${match}" color="${color}" icon="${icon}" >${match}</custom-tag>`,
      )
    }, modifiedText)
  }

  cleanAndCountWords(text: string, limit?: number, stopWords: string[] = []) {
    // Remove all non-word characters (everything except letters and spaces)
    const cleanedText = text.replace(/[^a-zA-Z\s]/g, ' ').toLowerCase()

    // Split text into words, filtering out any empty strings
    const words = cleanedText.split(/\s+/).filter(Boolean)

    // Create a map to count occurrences
    const wordCountMap: Record<string, number> = {}

    // Count occurrences of each word
    words.forEach((word) => {
      if (!stopWords.includes(word) && word.length > 2) {
        wordCountMap[word] = (wordCountMap[word] || 0) + 1
      }
    })

    // Convert the map to an array of [word, count] pairs
    const sortedWordCount = Object.entries(wordCountMap)
      .sort(([, a], [, b]) => b - a) // Sort by count (highest to lowest)
      .map(([word, count]) => ({ word, count })) // Map to objects for better readability

    // Optionally limit the number of results
    if (limit) {
      return sortedWordCount.slice(0, limit)
    }

    return sortedWordCount
  }

  async loadMarkdown(filePath: string, render: boolean = true) {
    try {
      const response = await fetch(filePath)

      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`)
      }

      const rawMarkdown = await response.text()

      return render ? this._md.render(rawMarkdown) : rawMarkdown
      // Insert the HTML content into your app (example below)
      //document.getElementById('markdown-container').innerHTML = htmlContent;
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message)
      } else {
        console.error('An unknown error occurred')
      }
    }
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

  // Convert HTML string to an array of tags

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

  stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '') // Remove all HTML tags
  }
  stripMarkdown(markdown: string): string {
    return markdown
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
      .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
      .replace(/[`*_~]/g, '') // Remove inline formatting
      .replace(/#+\s/g, '') // Remove headers
      .replace(/>\s?/g, '') // Remove blockquotes
      .replace(/[-*+]\s+/g, '') // Remove list markers
      .replace(/\d+\.\s+/g, '') // Remove numbered list markers
      .replace(/(?:\r\n|\r|\n)/g, ' ') // Convert line breaks to spaces
      .trim() // Trim any extra whitespace
  }
  stripFormatting(content: string): string {
    const noHtml = this.stripHtml(content) // Strip HTML tags
    return this.stripMarkdown(noHtml) // Strip Markdown formatting
  }
}

export default MarkdownManager
