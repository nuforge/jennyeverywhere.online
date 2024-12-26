<template>
  <tag-group :tags="tags.tags" noLabel noValue v-model="tags.selection" />
  <tag-group :tags="story.tags" noLabel noValue v-model="tags.selection" />
</template>

<script setup lang="ts">
import TagGroup from '@/components/tags/TagGroup.vue';
import { useStoryStore } from '@/stores/story';
import { useTagStore } from '@/stores/tags'
const tags = useTagStore()
const story = useStoryStore()
</script>
