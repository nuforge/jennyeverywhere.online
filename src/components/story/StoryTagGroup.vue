<template>
  <tag-group :tags="tags.tags" noLabel noValue v-model="tags.selection" />
</template>

<script setup lang="ts">
import TagGroup from '@/components/tags/TagGroup.vue';
import { useTagStore } from '@/stores/tags'
const tags = useTagStore()
</script>
