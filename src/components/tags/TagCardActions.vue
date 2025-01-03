<template>
  <v-icon icon="mdi-drag" @dragstart="onDragStart($event, tags)" @dragend="$emit('drag-end', $event)" :draggable="true"
    class="grabbable" @click="$emit('toggle-select')" />

  <v-btn @click="$emit('update:closable', !closable)" :icon="closable ? `mdi-delete` : `mdi-delete-outline`"
    @drop="onDragDop($event, tags)" :draggable="true" @dragover="preventDefault($event)" />

  <v-btn @click="state.add = !state.add" :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"
    @drop="tagOrText" />



</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import Tag from '@/objects/Tag';

const state = useStateStore()

defineProps({
  closable: {
    type: Boolean,
    required: true
  },
  tags: {
    type: Array as () => Tag[],
    required: true
  },
})


const emit = defineEmits(['update:closable', 'delete-drop', 'add-drop', 'add-text', 'drag-start', 'drag-end', 'toggle-select'])


const onDragStart = (event: DragEvent, tags: Tag[]) => {
  //console.log('TagCardActions.onDragStart', tags, event)
  emit('drag-start', event, tags)
}

const onDragDop = (event: DragEvent, tags: Tag[]) => {
  //console.log('TagCardActions.onDragStart', tags, event)
  emit('delete-drop', event, tags)
}

// Dropping a Tag or a String?

const tagOrText = (tag: Tag | string) => {
  emit('add-drop', tag)
}

// DRAG OVER default

const preventDefault = (event: Event) => event.preventDefault()

</script>
