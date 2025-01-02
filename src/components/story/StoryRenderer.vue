<template>
  <v-sheet flat class="bg-transparent">
    <h2>{{ story.title }}</h2>
    <MarkdownRenderer :text="story.raw" :tags="tagMerge" class="story-body" @right-click="openAddTagDialog()"
      @dragstart="onDragStart" @click-tag="clickTag" @click-icon="clickIcon" />
  </v-sheet>
</template>

<script setup lang="ts">
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'
import { useStateStore } from '@/stores/state'
import { usePersonaStore } from '@/stores/persona'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import Tag from '@/objects/Tag' // Adjust the import path as necessary
import { computed } from 'vue'

const tags = useTagStore()
const story = useStoryStore()
const state = useStateStore()
const persona = usePersonaStore()

const tagMerge = computed(() => {
  const mergedTags = [...tags.tags, ...story.tags] as Tag[]

  const uniqueTags = mergedTags.filter(
    (tag, index, self) => self.findIndex(t => t.name === tag.name) === index
  );

  return uniqueTags;
})

const clickTag = (tag: string) => {
  // const newTag = new Tag(tag)
  // tags.addTag(newTag)
  // tags.triggerSnackbar(newTag)
  state.openDetails()
  persona.focusOn(tag)
  console.log('clickTag:', tag)
}


const clickIcon = (tag: string, color: string, icon: string) => {
  const newTag = new Tag(tag, color, icon)
  tags.addTag(newTag)
  tags.triggerSnackbar(newTag)
  console.log('clickIcon:', tag, color, icon)
}


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
