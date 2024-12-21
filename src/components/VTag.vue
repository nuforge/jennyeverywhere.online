<template>
  <v-chip tile class="rounded-lg label-no-wrap" variant="text"
    @click="bottom ? sheets.openTag(value, color, icon) : false" density="comfortable">
    <template v-slot:prepend>
      <v-icon :icon="icon" :color="color"></v-icon>
    </template>
    <template v-slot:default v-if="label">
      <v-tooltip activator="parent" location="bottom" content-class="bg-surface" elevated v-if="tooltip">
        <v-icon :icon="icon"></v-icon> {{ label }}
      </v-tooltip>
      <span class="mx-2">{{ value }}</span>
    </template>
  </v-chip>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSheetStore } from '@/stores/sheet'
const sheets = ref(useSheetStore());

defineProps({
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  expand: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
})




</script>
