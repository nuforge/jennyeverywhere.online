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

<template>
  <v-btn @click="emit('update:labels', !labels)" :icon="!labels ? `mdi-label-off-outline` : `mdi-label`"
    :color="labels ? `text` : `disabled`">
  </v-btn>
  <v-btn @click="emit('update:icons', !icons)" :icon="!icons ? `mdi-eye-off-outline` : `mdi-eye`"
    :color="icons ? `text` : `disabled`">
  </v-btn>
  <v-btn @click="emit('update:colors', !colors)" :icon="!colors ? `mdi-palette-outline` : `mdi-palette`"
    :color="colors ? `text` : `disabled`">
  </v-btn>
  <v-btn @click="emit('update:tray', !tray)" :icon="!tray ? `mdi-tag-multiple-outline` : `mdi-tag-multiple`"
    :color="tray ? `text` : `disabled`">
  </v-btn>
  <v-btn @click="emit('update:logs', !logs)" :icon="!logs ? `mdi-text-box-outline` : `mdi-text-box`"
    :color="logs ? `text` : `disabled`">
  </v-btn>
</template>
