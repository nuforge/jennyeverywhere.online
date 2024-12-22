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

  tags.value.addTag('name:Jenny Everywhere')
  tags.value.addTag('item:green portal')
  tags.value.addTag('item:jetpack')
  tags.value.addTag('fire:flamethrower')
  tags.value.addTag('character:dude with a mohawk')
  tags.value.addTag('occupation:firefighter')
  tags.value.addTag('toast')

  const md = markdownit({
    html: true,
    linkify: true,
  })

  function highlightTags() {
    storyHTML.value = tags.value.linkText(story.value)
  }

  async function fetchStory() {
    await fetch(`${import.meta.env.BASE_URL}src/assets/stories/markdown/story.md`)
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
