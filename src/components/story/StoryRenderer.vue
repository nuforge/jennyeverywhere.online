<template>
  <MarkdownRenderer :markdown="linkItBaby()" />
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

<style>
.story-body {
  font-size: 1.05em;
  line-height: 1.5;
  letter-spacing: 0.02em;
}

.story-body a {
  text-decoration: none;
  font-size: 1.1em;
  transition: color 0.2s;
  font-weight: bold;
  letter-spacing: 0;
  font-variation-settings:
    "wdth" 75;
}
</style>
