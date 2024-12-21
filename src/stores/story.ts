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

  tags.value.addTag('Jenny Everywhere', 'primary', 'mdi-account-circle')
  tags.value.addTag('green portal', 'green', 'mdi-orbit')
  tags.value.addTag('jetpack', 'warning', 'mdi-rocket-launch')
  tags.value.addTag('flamethrower', 'error', 'mdi-fire')
  tags.value.addTag('dude with a mohawk', 'orange', 'mdi-account-circle-outline')
  tags.value.addTag('toast', '#75584B', 'mdi-bread-slice')

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
