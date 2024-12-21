<template>
  <v-chip-group column v-model="story.tags.selection" multiple @update:modelValue="story.highlightTags()">
    <v-tag v-for="(tag, index) in story.tags.tags" :key="index" :text="tag.text" :icon="tag.icon" :color="tag.color"
      class="text-red" tooltip>
    </v-tag>
  </v-chip-group>

</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useStoryStore } from '@/stores/story'

const story = ref(useStoryStore());

</script>
