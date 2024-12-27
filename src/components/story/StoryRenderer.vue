<template>
  <v-sheet flat class="bg-transparent">
    <h2>{{ story.title }}</h2>
    <MarkdownRenderer :markdown="linkItBaby()" class="story-body" @right-click="openAddTagDialog()" />
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'
import { useStateStore } from '@/stores/state'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'

const tags = useTagStore()
const story = useStoryStore()
const state = useStateStore()

const taglist = computed(() => {
  // Combine the two sets of tags into one iterable
  return [...tags.tags, ...story.tags];
});

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


function linkItBaby() {
  const selected = taglist.value.filter(tag => tags.selection.includes(tag.id))
  const md = story.linkTags(selected, story.HTML)
  return story.markitdown(md)
}

</script>
