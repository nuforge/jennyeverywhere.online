<template>
  <v-chip-group column v-model="story.tags.selection" multiple @update:modelValue="story.highlightTags()">
    <v-hover v-slot="{ isHovering, props }" v-for="(tag, index) in story.tags.tags" :key="index">
      <v-tag :label="tag.name" :icon="tag.icon" :value="tag.id" v-bind="props" :color="tag.color" tooltip
        @click:close="story.tags.removeTag(tag.id.toString())" :noValue="noValue" :noLabel="noLabel" :closer="closer"
        :isHovering="isHovering">
      </v-tag>
    </v-hover>

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
