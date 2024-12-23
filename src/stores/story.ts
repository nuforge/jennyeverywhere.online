import { ref } from 'vue'
import { defineStore } from 'pinia'
import markdownit from 'markdown-it'

export interface Story {
  title: string
  body: string
  image: string
}

export const useStoryStore = defineStore('story', () => {
  const raw = ref('')
  const HTML = ref('')

  const md = markdownit({
    html: true,
    linkify: true,
  })

  async function fetchStory() {
    return await fetch(`${import.meta.env.BASE_URL}src/assets/stories/markdown/story.md`)
      .then((result) => result.text())
      .then((text) => (raw.value = text))
      .catch((e) => console.error(e))
  }

  function renderMd() {
    return md.render(HTML.value ? HTML.value : raw.value)
  }

  return { raw, HTML, fetchStory, renderMd }
})
