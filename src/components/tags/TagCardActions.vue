<template>

  <v-icon @click="$emit('update:closable', !closable)" :icon="closable ? `mdi-delete-outline` : `mdi-delete`"
    @drop="$emit('delete-drop')" :draggable="true" @dragover="preventDefault($event)" />

  <v-icon @click="state.add = !state.add" :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"
    @drop="tagOrText" />

  <v-icon icon="mdi-drag" @dragstart="$emit('dragstart', $event)" @dragend="$emit('dragend', $event)" :draggable="true"
    class="grabbable" @click="$emit('toggle-select')" />

</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import Tag from '@/objects/Tag';
import TagTray from '@/objects/TagTray';

const state = useStateStore()

defineProps({
  closable: {
    type: Boolean,
    required: true
  },
  tray: {
    type: TagTray,
    required: true
  },
})

const emit = defineEmits(['update:closable', 'delete-drop', 'add-drop', 'add-text', 'dragstart', 'dragend', 'toggle-select'])

// Dropping a Tag or a String?

const tagOrText = (tag: Tag | string) => {
  emit('add-drop', tag)
}

// DRAG OVER default

const preventDefault = (event: Event) => event.preventDefault()

</script>
