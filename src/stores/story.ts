import { ref } from 'vue'
import { defineStore } from 'pinia'
import markdownit from 'markdown-it'
import story from '@/assets/stories/story.json'

export interface Story {
  title: string
  body: string
  image: string
}

export const useStoryStore = defineStore('story', () => {
  const title = ref(story.title)
  const raw = ref(story.content.reduce((acc, curr) => acc + curr, ''))
  const HTML = ref('')
  console.log(raw.value)

  const md = markdownit({
    html: true,
    linkify: true,
  })

  async function fetchStory() {
    await fetch(`${import.meta.env.BASE_URL}src/assets/stories/markdown/story.md`)
      .then((result) => result.text())
      .then((text) => {
        raw.value = story.content.reduce((acc, curr) => acc + curr, ' ')
        return text
      })
      .catch((e) => console.error(e))
  }

  function renderMd() {
    return md.render(HTML.value ? HTML.value : raw.value)
  }

  return { raw, HTML, title, fetchStory, renderMd }
})
