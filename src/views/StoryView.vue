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
.story-sheet {
  color: var(--color-text);
}

.story-sheet a {
  color: var(--color-heading);
  text-decoration: none;
  transition: color 0.2s;
  font-weight: bold;
}

.story-sheet a:hover {
  color: var(--color-text);
}
</style>
