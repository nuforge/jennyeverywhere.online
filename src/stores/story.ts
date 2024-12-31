import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import markdownit from 'markdown-it'
import TagMap from '@/objects/TagMap'
import story from '@/assets/stories/story.json'

export interface Story {
  title: string
  body: string
  image: string
}

interface Tag {
  id: string
  name: string
  icon: string | undefined
  color: string | undefined
}

export const useStoryStore = defineStore('story', () => {
  const title = ref(story.title)
  const raw = ref<string>(story.content.reduce((acc, curr) => acc + curr + `\n\n`, ''))
  const choices = ref(story.choices)
  const tagMap = ref(new TagMap())
  const tags = computed(() => tagMap.value.tags)

  const markdown = computed(() => markitdown(raw.value))
  const HTML = ref(raw.value)

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

  function linkTag(tag: Tag, body: string = markdown.value) {
    // Create a RegExp if pattern is a string
    const pattern = tag.name
    const icon = tag.icon
    const color = tag.color

    // Escape special regex characters if pattern is a literal string
    const escapedPattern =
      typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern // If already a RegExp, use it as is
    const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern

    return body.replace(
      regex,
      (match) =>
        `[<i class="mdi ${icon} text-${color}"></i> ${match}](${match.toLowerCase().replace(/\s/g, '-')})`,
    )
  }

  function linkString(tag: string, body: string = markdown.value) {
    // Create a RegExp if pattern is a string
    const pattern = tag
    // Escape special regex characters if pattern is a literal string
    const escapedPattern =
      typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern // If already a RegExp, use it as is
    const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern

    return body.replace(regex, (match) => `[${match}](${match.toLowerCase().replace(/\s/g, '-')})`)
  }

  function linkTags(tags: Tag[] = tagMap.value.tagList, text?: string) {
    return tags.reduce((updatedText, tag) => {
      const icon = tag.icon || 'default'
      const color = tag.color || 'default'
      const pattern = tag.name
      const escapedPattern =
        typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern
      const regex = new RegExp(escapedPattern, 'g')
      return updatedText.replace(
        regex,
        (match) =>
          `[<i class="mdi ${icon} text-${color}"></i> ${match}](${match.toLowerCase().replace(/\s/g, '-')})`,
      )
    }, text || raw.value)
  }

  function linkText(tags: Tag[] = tagMap.value.tagList, text?: string) {
    let temp = text
    tags.forEach((tag) => {
      if (!tag.id) return
      temp = linkString(tag.name, temp)
    })
    return temp
  }

  return {
    raw,
    markdown,
    HTML,
    tags,
    title,
    tagMap,
    choices,
    renderMd,
    markitdown,
    linkText,
    linkTags,
    linkString,
    linkTag,
  }
})
