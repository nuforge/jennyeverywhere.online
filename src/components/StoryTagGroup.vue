<template>
  <v-chip-group column v-model="story.tags.selection" multiple @update:modelValue="story.highlightTags()">
    <v-tag v-for="(tag, index) in story.tags.tags" :key="index" :icon="tag.icon" :color="tag.color" :value="tag.id"
      :label="tag.label" @click="console.log(tag.id)" class="text-red" tooltip noLabel noValue>
    </v-tag>
  </v-chip-group>

</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useStoryStore } from '@/stores/story'

const story = ref(useStoryStore());

</script>
