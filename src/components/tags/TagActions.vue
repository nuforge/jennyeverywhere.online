<template>
  <div @dragover="($event) => $event.preventDefault()">
    <v-btn @click="$emit('update:closable', !tray.closable)"
      :prepend-icon="tray.closable ? `mdi-delete-outline` : `mdi-delete`" @drop="$emit('delete-drop')">
      <v-tooltip activator="parent">
        Show Tag Closers: <v-icon :icon="tray.closable ? `mdi-delete-outline` : `mdi-delete`"></v-icon> {{
          !tray.closable
        }}
      </v-tooltip>
    </v-btn>

    <v-btn @click="state.add = !state.add" :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`">
    </v-btn>
    <v-btn icon="mdi-select-search" :draggable="true">
    </v-btn>
    <v-btn icon="mdi-drag" @dragstart="$emit('dragstart', $event)" :draggable="true">
    </v-btn>
  </div>
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

</script>
