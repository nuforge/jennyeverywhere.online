<template>
  <tag-group :tags="taglist" noLabel noValue v-model="tags.selection" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TagGroup from '@/components/tags/TagGroup.vue';
import { useStoryStore } from '@/stores/story';
import { useTagStore } from '@/stores/tags'
const tags = useTagStore()
const story = useStoryStore()

const taglist = computed(() => {
  // Combine the two sets of tags into one iterable
  return [...tags.tags, ...story.tags];
});
</script>
