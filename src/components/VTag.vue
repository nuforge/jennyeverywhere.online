<template>
  <v-chip :value="value" @click="bottom ? sheets.openTag(value, color, icon) : false" tile :closable="closer"
    class="rounded-lg" variant="text" density="comfortable">
    <template v-slot:prepend>
      <v-icon :icon="icon ? icon : `$tag`" :color="color" :start="!noLabel || !noValue" id="tooltip-activator"></v-icon>
      <v-tooltip activator="parent" location="bottom" content-class="bg-surface" elevated>
        <v-icon :icon="icon" :color="color" v-if="icon"></v-icon> {{ label }}
      </v-tooltip>
    </template>
    <template v-slot:default v-if="!noLabel && label">
      {{ label }}
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
