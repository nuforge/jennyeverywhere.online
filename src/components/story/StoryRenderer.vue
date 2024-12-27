<template>
  <v-sheet flat class="bg-transparent">
    <h2>{{ story.title }}</h2>
    <MarkdownRenderer :text="story.raw" class="story-body" @right-click="openAddTagDialog()" />
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

function openAddTagDialog() {
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



</script>
