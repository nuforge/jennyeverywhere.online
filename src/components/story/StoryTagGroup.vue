<template>
  <tag-group :tags="story.tags" noLabel noValue />
</template>

<script setup lang="ts">
import TagGroup from '@/components/tags/v1/TagGroup.vue';
import useStoryStore from '@/stores/story';
const story = useStoryStore()

</script>
