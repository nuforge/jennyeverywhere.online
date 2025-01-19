<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  tag: {
    type: Object,
  },
  label: {
    type: String,
  },
})

const displayLabel = computed(() => props.label ?? props.tag?.label)
</script>

<template>
  <span class="mx-2 text-no-wrap">
    <v-tooltip location="top start" :open-delay="900">
      <template #activator="{ props }">
        <span v-bind="props"> {{ displayLabel }} </span>
      </template>
      {{ displayLabel }}
    </v-tooltip>
  </span>
</template>
