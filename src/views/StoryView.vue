<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <v-img :src="img" alt="A glowing green portal" max-width="512px" />
        <FeedbackBar />
      </v-col>
      <v-col cols="12" sm="8">
        <StoryRenderer />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8">
        <StoryChoiceGroup />
      </v-col>
      <v-col cols="12" sm="4">
        <StoryTagGroup />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import img from '@/assets/stories/gallery/001.png'
import StoryChoiceGroup from '@/components/story/StoryChoiceGroup.vue'
import StoryTagGroup from '@/components/story/StoryTagGroup.vue'
import FeedbackBar from '@/components/FeedbackBar.vue'
import StoryRenderer from '@/components/story/StoryRenderer.vue';

</script>
