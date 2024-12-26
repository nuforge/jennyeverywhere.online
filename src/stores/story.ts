import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import markdownit from 'markdown-it'
import story from '@/assets/stories/story.json'

export interface Story {
  title: string
  body: string
  image: string
}

interface Tag {
  id: string
  name: string
}

export const useStoryStore = defineStore('story', () => {
  const title = ref(story.title)
  const raw = ref<string>(story.content.reduce((acc, curr) => acc + curr + `\n\n`, ''))
  const markdown = computed(() => markitdown(raw.value))
  const HTML = ref(raw.value)
  console.log(raw.value)

  const md = markdownit({
    html: true,
    linkify: true,
  })

  function renderMd() {
    return HTML.value
  }

  function markitdown(text: string) {
    return md.render(text)
  }

  function linkTag(tag: string, body: string = markdown.value) {
    const pattern = tag
    // Escape special regex characters if pattern is a literal string
    const escapedPattern =
      typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern // If already a RegExp, use it as is
    const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern

    return body.replace(regex, (match) => `[${match}](${match.toLowerCase().replace(/\s/g, '-')})`)
  }

  function linkText(tags: Tag[], text?: string) {
    // Create a RegExp if pattern is a string
    //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;
    let temp = text || markdown.value
    tags.forEach((tag) => {
      if (!tag.id) return
      temp = linkTag(tag.name, text || markdown.value)
    })
    return temp
  }

  return { raw, markdown, HTML, title, renderMd, markitdown, linkText }
})
