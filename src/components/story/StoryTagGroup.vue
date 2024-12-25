<template>
  <tag-group :tags="tags.tags" noLabel noValue v-model="tags.selection" @click="highlightTags()" />
</template>

<script setup lang="ts">
import TagGroup from '@/components/tags/TagGroup.vue';
import { ref } from 'vue'
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'
const tags = ref(useTagStore())
const story = ref(useStoryStore());

const highlightTags = () => {
  console.log('highlightTags', tags.value.tags)
  console.log('highlightTags', tags.value.selection)
  story.value.HTML = (tags.value.linkText(story.value.renderMd()))
}

</script>
