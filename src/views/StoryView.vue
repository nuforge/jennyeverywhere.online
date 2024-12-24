<template>
  <v-container>
    <StorySheet />
    <v-row no-gutter>
      <v-col cols="12" md="8">
        <StoryChoiceGroup />
      </v-col>
      <v-col md="4">
        <StoryTagGroup />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import StorySheet from '@/components/story/StorySheet.vue'
import StoryChoiceGroup from '@/components/story/StoryChoiceGroup.vue'
import StoryTagGroup from '@/components/story/StoryTagGroup.vue'
</script>

<style>
.story-sheet a {
  text-decoration: none;
  transition: color 0.2s;
  font-weight: bold;
}
</style>
