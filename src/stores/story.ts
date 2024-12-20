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

  tags.value.addTag('Jenny Everywhere', 'mdi-account-circle', 'primary')
  tags.value.addTag('green portal', 'mdi-orbit', 'green')
  tags.value.addTag('jetpack', 'mdi-rocket-launch', 'warning')
  tags.value.addTag('flamethrower', 'mdi-fire', 'error')
  tags.value.addTag('dude with a mohawk', 'mdi-account-circle-outline', 'orange')

  const md = markdownit({
    html: true,
    linkify: true,
  })

  function highlightTags() {
    storyHTML.value = tags.value.linkText(story.value)
  }

  async function fetchStory() {
    await fetch('/src/assets/stories/markdown/story.md')
      .then((result) => result.text())
      .then((text) => {
        story.value = text
        storyHTML.value = tags.value.linkText(text)
      })
      .catch((e) => console.error(e))
  }

  function renderMd() {
    return md.render(storyHTML.value)
  }

  return { story, fetchStory, renderMd, highlightTags, tags }
})
