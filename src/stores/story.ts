import { ref } from 'vue'
import { defineStore } from 'pinia'
import markdownit from 'markdown-it'

export interface Story {
  title: string
  body: string
  image: string
}

export const useStoryStore = defineStore('story', () => {
  const story = ref('')
  const storyHTML = ref('')
  const md = markdownit({
    html: true,
    linkify: true,
  })

  function setHTML(newHTML: string) {
    storyHTML.value = newHTML
  }

  async function fetchStory() {
    await fetch('/src/assets/stories/markdown/story.md')
      .then((result) => result.text())
      .then((text) => {
        story.value = text
        storyHTML.value = text
      })
      .catch((e) => console.error(e))
  }

  function renderMd() {
    return md.render(storyHTML.value)
  }

  return { story, fetchStory, renderMd, setHTML }
})
