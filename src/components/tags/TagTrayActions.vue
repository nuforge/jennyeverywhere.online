<template>
  <v-icon @click="$emit('update:closable', !tray.closable)" :icon="tray.closable ? `mdi-delete-outline` : `mdi-delete`"
    @drop="$emit('delete-drop')" :draggable="true" @dragover="preventDefault($event)">
  </v-icon>
  <v-icon @click="state.add = !state.add" :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`">
  </v-icon>
  <v-icon icon="mdi-select-search" :draggable="true">
  </v-icon>
  <v-icon icon="mdi-drag" @dragstart="$emit('dragstart', $event)" :draggable="true"></v-icon>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import TagTray from '@/objects/TagTray';

const state = useStateStore()

defineProps({
  tray: {
    type: TagTray,
    required: true
  },
})

defineEmits(['update:closable', 'delete-drop', 'dragstart'])

const preventDefault = (event: Event) => event.preventDefault()


</script>
