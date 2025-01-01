<template>
  <EvTagGroup :tags="mergedTags" @close="onClose" @drop="onDragDrop($event)" @drag-over="onDragOver"
    @click="emit('click', $event)" @drag-start="onDragStart($event)" @drag-end="onDragEnd" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import EvTagGroup from '@/components/tags/EvTagGroup.vue';
import Tag from '@/objects/Tag'
import Legend from '@/objects/Legend';

const emit = defineEmits(['click', 'ctrl-click', 'drag-start', 'drag-end', 'drop', 'close'])

const mergedTags = computed(() => [...props.legend.tags, ...props.tags] as Tag[])
const dragging = ref(false)

const props = defineProps({
  legend: {
    type: Legend,
    default: new Legend('legend')
  },
  tags: {
    type: Array as () => Tag[],
    default: Array as () => Tag[]
  }
})

// TAGS & CLICKS

function onClose(tag: Tag) {
  console.log('onClose', tag)
}

// DRAG

const onDragStart = (event: DragEvent) => {
  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    event.dataTransfer?.setData('text/plain', selectedText);
  }
  dragging.value = true
  emit('drag-start', event)
}

const onDragDrop = (event: DragEvent) => {
  if (event.dataTransfer) {
    if (event.dataTransfer.getData('text/plain')) {
      // console.log('onDragDrop', event.dataTransfer.getData('text/plain').trim())
      // props.tagtray.map.stringTag(event.dataTransfer.getData('text/plain').trim())
    }
  }
  dragging.value = false
  //props.tagtray.map.addTags(clipboard.paste(true) as Tag[])
  console.log('onDragDrop', 'Todo: ADD Tags from Drop')
  emit('drop', event)
}


const onDragEnd = () => {
  dragging.value = false
  emit('drag-end')
}


const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer) {
    //console.log(event.dataTransfer.getData('text/plain'));
  }
}


</script>
