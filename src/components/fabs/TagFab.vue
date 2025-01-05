<template>
  <v-fab :icon="state.drawer ? `$tags` : `$no-tags`" location="bottom end" app appear @click="state.drawerToggle"
    variant="plain" @dragover="onDragOver" @drop="onDragDrop" @dragend="onDragEnd"></v-fab>
</template>

<script setup lang="ts">
import useClipboardStore from '@/stores/clipboard'
import useStateStore from '@/stores/state';
import useTagStore from '@/stores/tags'
import Tag from '@/objects/Tag.ts';

const tags = useTagStore()
const clipboard = useClipboardStore()
const state = useStateStore()

const onDragEnd = () => {
  clipboard.clear()
  // console.log('drag.End')
  state.dragEnd()
}


const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer) {
    //console.log(event.dataTransfer.getData('text/plain'));
  }
  if (state.dragging) {
    state.drawer = true
  }
}
// DRAG DROP

const onDragDrop = () => {
  state.dragging = false
  //console.log('drag.Drop')
  //const tagMapDifference = tagMap.value.difference(tags)
  //console.log('TagTray.onDragDrop', tags, tagMap.value.tagList, tagMapDifference)
  tags.tagMap.addTags(clipboard.paste(true) as Tag[])
  state.drawer = true
  state.dragDrop()
}
</script>
