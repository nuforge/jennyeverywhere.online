<template>
  <v-sheet flat class="bg-transparent">
    <h2>{{ story.title }}</h2>
    <MarkdownRenderer :text="story.markdown" class="story-body" @right-click="openAddTagDialog()"
      @dragstart="onDragStart" />
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


const onDragStart = (event: DragEvent) => {
  console.log('onDragStart', window)
  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    event.dataTransfer?.setData('text/plain', selectedText);
  }
  state.dragStart()
}

function openAddTagDialog() {
  let text = "";
  if (window.getSelection) {
    const selection = window.getSelection();
    if (selection) {
      text = selection.toString();
    }
  }
  console.log('openAddTagDialog', text)
  tags.tempTag(text);
  state.add = true
  return tags.tempTag.name
}


</script>
