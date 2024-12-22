<template>
  <v-chip-group column v-model="story.tags.selection" multiple @update:modelValue="story.highlightTags()">
    <v-tag v-for="(tag, index) in story.tags.tags" :key="index" :value="tag.name" :icon="tag.icon"
      :label="tag.namespace" :color="tag.color">
    </v-tag>

  </v-chip-group>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useStoryStore } from '@/stores/story'
const story = ref(useStoryStore());


defineProps({
  noLabel: {
    type: Boolean,
    default: false
  },
  noValue: {
    type: Boolean,
    default: false
  },
  noIcon: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  closer: {
    type: Boolean,
    default: false
  },
})

</script>
