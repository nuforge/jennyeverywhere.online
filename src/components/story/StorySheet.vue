<template>
  <v-row class="story-sheet">
    <v-col cols="12" id="story-sheet" md="8">
      <MarkdownRenderer :markdown="story" />
    </v-col>
    <v-col cols="12" md="4">
      <FeedbackBar />
      <v-img :src="img" alt="A glowing green portal" max-width="512px" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import img from '@/assets/stories/gallery/001.png'
import FeedbackBar from '@/components/FeedbackBar.vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

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
