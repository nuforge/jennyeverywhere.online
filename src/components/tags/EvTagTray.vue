<template>
  <EvTagGroup :tags="mergedTags" @close="onClose" @drop="onDragDrop($event)" @drag-over="onDragOver"
    @click="emit('click', $event)" @drag-start="onDragStart($event)" @drag-end="onDragEnd" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TagTray from '@/objects/TagTray'
import EvTagGroup from '@/components/tags/EvTagGroup.vue';
import Tag from '@/objects/Tag'

const emit = defineEmits(['click', 'ctrl-click', 'drag-start', 'drag-end', 'drop', 'close'])

const mergedTags = computed(() => [...props.tray.tags, ...props.tags] as Tag[])

const props = defineProps({
  tray: {
    type: TagTray,
    default: new TagTray()
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
  props.tray.dragStart()
  emit('drag-start', event)
}

const onDragDrop = (event: DragEvent) => {
  console.log('onDragDrop', DragEvent)
  if (event.dataTransfer) {
    if (event.dataTransfer.getData('text/plain')) {
      console.log('onDragDrop -> dataTransfer:', event.dataTransfer.getData('text/plain').trim())
      // props.tagtray.map.stringTag(event.dataTransfer.getData('text/plain').trim())
    }
  }

  props.tray.dragEnd()

  //props.tagtray.map.addTags(clipboard.paste(true) as Tag[])
  emit('drop', event)
}


const onDragEnd = () => {
  props.tray.dragEnd()
  emit('drag-end')
}


const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer) {
    //console.log(event.dataTransfer.getData('text/plain'));
  }
}


</script>
