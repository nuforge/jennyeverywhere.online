<template>
  <v-chip-group column multiple>

    <v-tag v-for="(tag, index) in tags" :key="index" :value="tag.id" :icon="tag.icon" :label="tag.name"
      :color="tag.color" :noValue="noValue" :noLabel="noLabel" :noIcon="noIcon">
    </v-tag>
  </v-chip-group>
</template>

<script setup lang="ts">
import Tag from '@/objects/Tag'

defineProps({
  tags: {
    type: Array as () => Tag[]
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
})
</script>
