<template>

  <TagTray :tags="taglist" :selected="tags.selection" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TagTray from '@/components/tags/TagTray.vue';
import { useStoryStore } from '@/stores/story';
import { useTagStore } from '@/stores/tags'
const tags = useTagStore()
const story = useStoryStore()

const taglist = computed(() => [...tags.tags, ...story.tags]);
</script>
