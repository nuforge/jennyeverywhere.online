<template>
  <v-sheet class="justfy-start ga-2 align-center flex-column h-100">
    <v-btn @click="$emit('update:closable', !tray.closable)" :icon="tray.closable ? `mdi-delete-outline` : `mdi-delete`"
      @drop="$emit('delete-drop')" :draggable="true" @dragover="preventDefault($event)">
    </v-btn>
    <v-btn @click="state.add = !state.add" :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`">
    </v-btn>
    <v-btn icon="mdi-select-search" :draggable="true">
    </v-btn>
    <v-btn icon="mdi-drag" @dragstart="$emit('dragstart', $event)" :draggable="true">
    </v-btn>
  </v-sheet>
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

const preventDefault = (event: Event) => event.preventDefault()


</script>
