<template>
  <v-chip :value="value" :closable="closer" @click="bottom ? sheets.openTag(value, color, icon) : false" tile
    class="rounded-lg" variant="text" density="comfortable">
    <template v-slot:prepend v-if="icon || (noValue && noLabel)">
      <v-icon :icon="icon" :color="color" :start="!noLabel || !noValue" id="tooltip-activator"></v-icon>

      <v-tooltip activator="parent" location="bottom" content-class="bg-surface" elevated>
        <v-icon :icon="icon" :color="color"></v-icon>{{ label }}</v-tooltip>
    </template>
    <template v-slot:default v-if="!noValue && value">
      {{ value }}
    </template>
    <v-tooltip activator="tooltip-activator" location="bottom" content-class="bg-surface" elevated v-if="tooltip">
      <v-icon :icon="icon" :color="color"></v-icon> {{ label }}
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
    type: String || Number,
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
  isHovering: {
    type: Boolean,
    default: false
  },
})




</script>
