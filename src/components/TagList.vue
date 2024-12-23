<template>
  <v-chip-group column v-model="tags.selection" multiple @update:modelValue="highlightTags()">
    <v-tag v-for="(tag, index) in tags.tags" :key="index" :value="tag.id" :icon="tag.icon" :label="tag.name"
      :color="tag.color" @click:close="tags.removeTag(tag.id)" :noValue="noValue" :noLabel="noLabel" :noIcon="noIcon"
      :closer="closer">
    </v-tag>
  </v-chip-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStoryStore } from '@/stores/story'
import { useTagStore } from '@/stores/tags';
const tags = ref(useTagStore())
const story = ref(useStoryStore());

const highlightTags = () => {
  story.value.HTML = (tags.value.linkText(story.value.raw))
}

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
