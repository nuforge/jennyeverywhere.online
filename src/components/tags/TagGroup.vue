<template>
  <v-chip-group column multiple>
    <v-tag-item v-for="tag in tags" :key="tag.id" :value="tag.id" :icon="tag.icon" :label="tag.name" :color="tag.color"
      :space="tag.space" :noValue="noValue" :noLabel="noLabel" :noIcon="noIcon" tooltip>
    </v-tag-item>
  </v-chip-group>
</template>

<script setup lang="ts">
import Tag from '@/objects/Tag'

defineProps({
  tags: {
    type: Object as () => Record<string, Tag>
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
})
</script>
