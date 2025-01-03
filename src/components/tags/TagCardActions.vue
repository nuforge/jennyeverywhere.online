<template>
  <v-btn @click="state.add = !state.add" :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"
    @drop="tagOrText" />

  <v-btn @click="$emit('update:closable', !closable)" :icon="closable ? `mdi-delete` : `mdi-delete-outline`"
    @drop="onDragDop($event, tags)" :draggable="true" @dragover="preventDefault($event)" />

  <v-icon :icon="selectIcon" @click="$emit('toggle-select')" />
  <v-icon icon="mdi-drag" @dragstart="onDragStart($event, tags)" @dragend="$emit('drag-end', $event)" :draggable="true"
    class="grabbable" @click="$emit('toggle-select')" />

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStateStore } from '@/stores/state';
import Tag from '@/objects/Tag';

const state = useStateStore()

const props = defineProps({
  closable: {
    type: Boolean,
    required: true
  },
  tags: {
    type: Array as () => Tag[],
    required: true
  },
  selection: {
    type: Array as () => string[],
    default: () => []
  }
})

const selectedAll = computed(() => props.selection.length === props.tags.length)
const selectedNone = computed(() => props.selection.length === 0)
// const selectedSome = computed(() => props.selection.length > 0 && props.selection.length < props.tags.length)

const selectIcon = computed(() => selectedAll.value ? 'mdi-checkbox-intermediate' : selectedNone.value ? 'mdi-checkbox-blank-outline' : 'mdi-checkbox-intermediate-variant')

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
