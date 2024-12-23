<template>
  <v-container>
    <StorySheet />
    <v-row>
      <v-col cols="auto" md="8">
        <StoryChoiceGroup />
      </v-col>
      <v-col cols="12" md="4">
        <StoryTagGroup />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import StorySheet from '@/components/StorySheet.vue'
import StoryChoiceGroup from '@/components/StoryChoiceGroup.vue'
import StoryTagGroup from '@/components/StoryTagGroup.vue'
</script>

<style>
.story-base a {
  color: var(--v-primary);
  text-decoration-line: none;
  font-weight: bold;
}
</style>
