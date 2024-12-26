<template>
  <v-sheet flat class="bg-transparent" @click.right.exact.prevent="getSelectionText()">
    <h2>{{ story.title }}</h2>
    <MarkdownRenderer :markdown="linkItBaby()" class="story-body" />
  </v-sheet>
</template>

<script setup lang="ts">
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'
import { useStateStore } from '@/stores/state'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'

const tags = useTagStore()
const story = useStoryStore()
const state = useStateStore()


function getSelectionText() {
  let text = "";
  if (window.getSelection) {
    const selection = window.getSelection();
    if (selection) {
      text = selection.toString();
    }
  }

  tags.tempTag(text);
  state.add = true
  return tags.tempTag.name
}


function linkItBaby() {
  const selected = tags.tags.filter(tag => tags.selection.includes(tag.id))
  const md = story.linkTags(selected, story.raw)
  return story.markitdown(md)
}

</script>
