<template>
  <v-sheet class="flex-column justfy-start ga-2 align-center h-100">
    <v-btn @click="$emit('update:labels', !tray.labels)" :icon="tray.labels ? `mdi-label-off-outline` : `mdi-label`">
    </v-btn>
    <v-btn @click="$emit('update:icons', !tray.icons)" :icon="tray.icons ? `mdi-eye-off-outline` : `mdi-eye`">
    </v-btn>
    <v-btn @click="$emit('update:color', !tray.color)" :icon="tray.color ? `mdi-palette-outline` : `mdi-palette`">
    </v-btn>
  </v-sheet>
</template>

<script setup lang="ts">
import TagTray from '@/objects/TagTray';


defineProps({
  tray: {
    type: TagTray,
    required: true
  },
  tooltip: {
    type: String,
    default: 'start'
  }
})

</script>
