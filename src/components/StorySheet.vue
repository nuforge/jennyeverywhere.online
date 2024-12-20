<template>
  <v-row>
    <v-col cols="12" md="4">
      <img src="@/assets/stories/gallery/001.png" alt="A glowing green portal" />
      <FeedbackBar />
    </v-col>
    <v-col cols="12" md="8">
      <div class="story-base  text-decoration-none " v-html="story.renderMd()"></div>
    </v-col>
  </v-row>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStoryStore } from '@/stores/story'
import FeedbackBar from '@/components/FeedbackBar.vue'
const story = ref(useStoryStore());

onMounted(async () => {
  console.log('Hello world!')
  await story.value.fetchStory()
})


</script>
