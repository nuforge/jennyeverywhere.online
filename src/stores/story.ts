import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useTagStore } from '@/stores/tags'
import markdownit from 'markdown-it'

export interface Story {
  title: string
  body: string
  image: string
}

export const useStoryStore = defineStore('story', () => {
  const story = ref('')
  const storyHTML = ref('')
  const tags = ref(useTagStore())
  const md = markdownit({
    html: true,
    linkify: true,
  })

  async function fetchStory() {
    await fetch('/src/assets/stories/markdown/story.md')
      .then((result) => result.text())
      .then((text) => {
        story.value = text
        storyHTML.value = text
      })
      .catch((e) => console.error(e))
  }

  function linkText() {
    // Create a RegExp if pattern is a string
    //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;

    let temp = story.value
    tags.value.selection.forEach((tag) => {
      const pattern = tags.value.tags[tag].text
      const icon = tags.value.tags[tag].icon
      const color = tags.value.tags[tag].color

      // Escape special regex characters if pattern is a literal string
      const escapedPattern =
        typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern // If already a RegExp, use it as is

      const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern

      temp = temp.replace(
        regex,
        (match) =>
          `<span class="text-no-wrap" ><i class="text-no-wrap mdi ${icon} text-${color}"></i> [${match}](${match.toLowerCase().replace(/\s/g, '-')})</span>`,
      )
    })
    // Replace matches with <b> tags
    storyHTML.value = temp
  }

  function renderMd() {
    return md.render(storyHTML.value)
  }

  return { story, linkText, fetchStory, renderMd }
})
