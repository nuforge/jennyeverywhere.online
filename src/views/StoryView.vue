<template>
  <v-container>
    <StorySheet />
    <StoryChoiceGroup />
    <v-row no-gutter>
      <v-col>
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
