<template>
  <v-container>
    <StorySheet />
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

import StorySheet from '@/components/StorySheet.vue'
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
