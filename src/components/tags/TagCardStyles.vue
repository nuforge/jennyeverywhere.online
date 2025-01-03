<template>
  <v-btn @click="emit('update:labels', !labels)" :icon="!labels ? `mdi-label-off-outline` : `mdi-label`">
  </v-btn>
  <v-btn @click="emit('update:icons', !icons)" :icon="!icons ? `mdi-eye-off-outline` : `mdi-eye`">
  </v-btn>
  <v-btn @click="emit('update:colors', !colors)" :icon="!colors ? `mdi-palette-outline` : `mdi-palette`">
  </v-btn>
  <v-btn @click="emit('update:tray', !tray)" :icon="!tray ? `mdi-tag-multiple-outline` : `mdi-tag-multiple`">
  </v-btn>
  <v-btn @click="emit('update:logs', !logs)" :icon="!logs ? `mdi-text-box-outline` : `mdi-text-box`">
  </v-btn>
</template>

<script setup lang="ts">


const emit = defineEmits(['update:tray', 'update:labels', 'update:icons', 'update:colors', 'update:logs'])
defineProps({
  tray: {
    type: Boolean,
    required: true
  },
  labels: {
    type: Boolean,
    required: true
  },
  colors: {
    type: Boolean,
    required: true
  },
  icons: {
    type: Boolean,
    required: true
  },
  logs: {
    type: Boolean,
    required: true
  },

})

</script>
