<template>
  <v-row>
    <v-col cols="12" md="4" sm="12">
      <img src="@/assets/stories/gallery/001.png" alt="A glowing green portal" aspect-ratio="1:1" width="100%" />
      <FeedbackBar />
    </v-col>
    <v-col cols="12" md="8" sm="12" id="story-sheet">
      <MarkdownRenderer :markdown="story" />
    </v-col>

  </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FeedbackBar from '@/components/FeedbackBar.vue'
import MarkdownRenderer from '@/components/markdownRenderer.vue';

const story = ref('')

onMounted(async () => {
  await fetchStory()
})

async function fetchStory(filename: string = 'story.md') {
  return await fetch(`${import.meta.env.BASE_URL}src/assets/stories/markdown/${filename}`)
    .then((result) => result.text())
    .then((text) => {
      return (story.value = text)
    })
    .catch((e) => console.error(e))
}



</script>
