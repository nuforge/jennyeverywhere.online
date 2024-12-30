<template>
  <VBtnToggle>
    <v-btn @click="$emit('update:closable', !tray.closable)"
      :prepend-icon="tray.closable ? `mdi-delete-outline` : `mdi-delete`" @drop="$emit('drop')">
      <v-tooltip activator="parent">
        Show Tag Closers: <v-icon :icon="tray.closable ? `mdi-delete-outline` : `mdi-delete`"></v-icon> {{
          !tray.closable
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="$emit('update:labels', !tray.labels)"
      :prepend-icon="tray.labels ? `mdi-label-off-outline` : `mdi-label`">
      <v-tooltip activator="parent">
        Show labels: <v-icon :icon="tray.labels ? `mdi-label-off-outline` : `mdi-label`"></v-icon> {{
          !tray.labels
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="$emit('update:icons', !tray.icons)" :prepend-icon="tray.icons ? `mdi-eye-off-outline` : `mdi-eye`">
      <v-tooltip activator="parent">
        Show icons: <v-icon :icon="tray.icons ? `mdi-eye-off-outline` : `mdi-eye`"></v-icon> {{ !tray.icons
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="$emit('update:color', !tray.color)"
      :prepend-icon="tray.color ? `mdi-palette-outline` : `mdi-palette`">
      <v-tooltip activator="parent">
        Show color: <v-icon :icon="tray.color ? `mdi-palette-outline` : `mdi-palette`"></v-icon> {{
          tray.color
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="state.add = !state.add" :prepend-icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`">
      <v-tooltip activator="parent">
        <v-icon :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"></v-icon> Add Tag
      </v-tooltip>
    </v-btn>
    <v-btn prepend-icon="mdi-drag" @dragstart="$emit('dragstart')" :draggable="true">
      <v-tooltip activator="parent">
        <v-icon icon="mdi-drag"></v-icon> Drag All Tags
      </v-tooltip>
    </v-btn>
  </VBtnToggle>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state'
import TagTray from '@/objects/TagTray';

const state = useStateStore()

defineProps({
  tray: {
    type: TagTray,
    required: true
  }
})

</script>
