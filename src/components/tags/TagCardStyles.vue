<template>
  <v-divider vertical></v-divider>
  <v-btn @click="emit('update:tray', !tray)" :icon="!tray ? `mdi-tag-multiple-outline` : `mdi-tag-multiple`">
  </v-btn>
  <v-btn @click="emit('update:bodys', !bodys)" :icon="!bodys ? `mdi-text-box-outline` : `mdi-text-box`">
  </v-btn>
  <v-divider vertical></v-divider>
  <v-btn @click="emit('update:labels', !labels)" :icon="!labels ? `mdi-label-off-outline` : `mdi-label`">
  </v-btn>
  <v-btn @click="emit('update:icons', !icons)" :icon="!icons ? `mdi-eye-off-outline` : `mdi-eye`">
  </v-btn>
  <v-btn @click="emit('update:colors', !colors)" :icon="!colors ? `mdi-palette-outline` : `mdi-palette`">
  </v-btn>
</template>

<script setup lang="ts">


const emit = defineEmits(['update:tray', 'update:labels', 'update:icons', 'update:colors', 'update:bodys'])
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
  bodys: {
    type: Boolean,
    required: true
  },

})

</script>
