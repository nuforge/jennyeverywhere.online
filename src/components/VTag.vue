<template>
  <v-chip tile class="rounded-lg" variant="text" @click="bottom ? sheets.openTag(value, color, icon) : false"
    density="comfortable" :value="value" :closable="closer">
    <template v-slot:prepend v-if="icon">
      <v-icon :icon="icon" :color="color" :start="!noLabel || !noValue"></v-icon>
    </template>
    <template v-slot:default v-if="!noLabel && label">{{ label }}
    </template>
    <template v-slot:append v-if="!noValue">
      {{ value }}
    </template>
    <v-tooltip activator="parent" location="bottom" content-class="bg-surface" elevated v-if="tooltip">
      <v-icon :icon="icon"></v-icon> {{ label }}
    </v-tooltip>
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
  value: {
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
  noLabel: {
    type: Boolean,
    default: false
  },
  noValue: {
    type: Boolean,
    default: false
  },
  noIcon: {
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
  closer: {
    type: Boolean,
    default: false
  },
})




</script>
