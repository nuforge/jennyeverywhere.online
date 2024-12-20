<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <img src="@/assets/stories/gallery/001.png" alt="A glowing green portal" />
        <FeedbackBar />
      </v-col>
      <v-col cols="12" md="8">
        <div class="story-base  text-decoration-none " v-html="story.renderMd()"></div>
      </v-col>
    </v-row>
    <v-row class="">
      <v-col cols="auto" md="8">
        <StoryChoiceGroup />
      </v-col>
      <v-col cols="6" md="4">
        <StoryTagGroup />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStoryStore } from '@/stores/story'
const story = ref(useStoryStore());

import FeedbackBar from '@/components/FeedbackBar.vue'
import StoryChoiceGroup from '@/components/StoryChoiceGroup.vue'
import StoryTagGroup from '@/components/StoryTagGroup.vue'






/*
function updateTags() {
  const index = selection.value
  const button = buttons.value[index]

  button.terms.forEach(term => {
    term = term.toLowerCase()
    const color = button.color
    const icon = button.icon
    tagList.value.addTag(term, icon, color)
  })
} */
</script>


<style>
.story-base a {
  color: var(--v-primary);
  text-decoration-line: none;
  font-weight: bold;
}
</style>
