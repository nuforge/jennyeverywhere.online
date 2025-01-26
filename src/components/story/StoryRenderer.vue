<script setup lang="ts">
import useStoryStore from '@/stores/story'
import useStateStore from '@/stores/state'
import Tag from '@/objects/nu/Tag' // Adjust the import path as necessary
import { computed } from 'vue'
import EvTrayCard from '@/components/tray/TrayCard.vue'

const story = useStoryStore()
const state = useStateStore()

const tagMerge = computed(() => {
  const mergedTags = [...story.tags] as Tag[]

  const uniqueTags = mergedTags.filter(
    (tag, index, self) => self.findIndex(t => t.name === tag.label) === index
  );

  return uniqueTags;
})

const clickTag = (tag: string) => {
  console.log('clickTag:', tag)
}


const clickIcon = (tag: string, color: string, icon: string) => {

  console.log('clickIcon:', tag, color, icon)
}


const onDragStart = (event: DragEvent) => {
  console.log('onDragStart', window)
  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    console.log('selectedText', selectedText)
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
  console.log('openAddTagDialog:', text)
  state.add = true
}

</script>

<template>
  <v-sheet flat class="bg-transparent">
    <EvTrayCard :body="story.raw" :name="story.title" :tags="tagMerge" class="story-body"
      @right-click="openAddTagDialog()" @dragstart="onDragStart" @click-tag="clickTag" @click-icon="clickIcon" />
  </v-sheet>
</template>
