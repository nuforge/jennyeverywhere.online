<template>
  <v-chip tile class="rounded-lg text-no-wrap" variant="text"
    @click="bottom ? sheets.openTag(value, color, icon) : false" density="comfortable">
    <template v-slot:prepend><v-icon :icon="icon" :color="color"></v-icon></template>
    <template v-slot:default v-if="expand"><span class="mx-2">{{ text }}</span></template>
    <template v-slot:append v-if="value"><span class="mx-1">{{ value }}</span></template>
    <v-tooltip activator="parent" location="bottom" :content-class="`bg-surface`" :text="text" elevated
      v-if="tooltip"><v-icon :icon="icon"></v-icon> {{ text }}
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
  text: {
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
