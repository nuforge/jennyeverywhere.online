<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <v-img :src="img" alt="A glowing green portal" max-width="512px" />

        <FeedbackBar />
      </v-col>
      <v-col cols="12" sm="9" id="story-sheet">
        <MarkdownRenderer :markdown="story" />
        <StoryTagGroup />
      </v-col>
      <v-col cols="12" sm="auto">
      </v-col>
      <v-col cols="12" sm="6">
        <StoryChoiceGroup />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import img from '@/assets/stories/gallery/001.png'
import StoryChoiceGroup from '@/components/story/StoryChoiceGroup.vue'
import StoryTagGroup from '@/components/story/StoryTagGroup.vue'
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

<style>
.story-sheet a {
  text-decoration: none;
  transition: color 0.2s;
  font-weight: bold;
}
</style>
