<template>
  <VItemGroup>
    <v-btn @click="$emit('update:labels', !tray.labels)"
      :prepend-icon="tray.labels ? `mdi-label-off-outline` : `mdi-label`">
      <v-tooltip activator="parent" location="end">
        Show labels: <v-icon :icon="tray.labels ? `mdi-label-off-outline` : `mdi-label`"></v-icon> {{
          !tray.labels
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="$emit('update:icons', !tray.icons)" :prepend-icon="tray.icons ? `mdi-eye-off-outline` : `mdi-eye`">
      <v-tooltip activator="parent" location="end">
        Show icons: <v-icon :icon="tray.icons ? `mdi-eye-off-outline` : `mdi-eye`"></v-icon> {{ !tray.icons
        }}
      </v-tooltip>
    </v-btn>
    <v-btn @click="$emit('update:color', !tray.color)"
      :prepend-icon="tray.color ? `mdi-palette-outline` : `mdi-palette`">
      <v-tooltip activator="parent" location="end">
        Show color: <v-icon :icon="tray.color ? `mdi-palette-outline` : `mdi-palette`"></v-icon> {{
          tray.color
        }}
      </v-tooltip>
    </v-btn>
  </VItemGroup>
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
