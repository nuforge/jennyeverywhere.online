<template>
  <MarkdownRenderer :markdown="linkItBaby()" class="story-body" />
</template>

<script setup lang="ts">
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

const tags = useTagStore()
const story = useStoryStore()


function linkItBaby() {
  const selected = tags.tags.filter(tag => tags.selection.includes(tag.id))
  const md = story.linkTags(selected, story.raw)
  return story.markitdown(md)
}

</script>
