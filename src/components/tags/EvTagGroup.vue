<template>
  <v-chip-group column multiple @dragend="onDragEnd" @dragover="onDragOver">
    <EvTag draggable v-for="tag in tags" :key="tag.name" :text="tag.name" :icon="tag.icon" :color="tag.color"
      @close="onClose(tag)" @dragstart="onDragStart($event)" @ctrl-click="onCtrlClick(tag)"
      @right-click="onRightClick" />
  </v-chip-group>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Tag from '@/objects/Tag'
import EvTag from '@/components/tags/EvTag.vue'

// EMIT AND PROPS
const emit = defineEmits(['click', 'ctrl-click', 'right-click', 'drag-start', 'drag-end', 'drag-drop', 'close'])

defineProps({
  tags: {
    type: Array as () => Tag[],
  },
  selected: {
    type: Array as () => string[],
  },
})


// TAGS & CLICKS

function onClose(tag: Tag) {
  console.log('onClose', tag)
}

function onCtrlClick(tag: Tag) {
  emit('ctrl-click', tag)
}

function onRightClick() {
  emit('right-click')
}


// DRAG

// DRAG START
const onDragStart = (event: DragEvent) => {
  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    event.dataTransfer?.setData('text/plain', selectedText);
  }
  emit('drag-start')
}


// DRAG OVER
const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer) {
    //console.log(event.dataTransfer.getData('text/plain'));
  }
}


// DRAG END
const onDragEnd = () => {
  // console.log('drag.End')
  emit('drag-end')
}


</script>
