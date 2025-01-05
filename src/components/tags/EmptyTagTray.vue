<template>
  <div
    class="d-flex no-select align-center justify-center ma-2 mt-4 pa-1 rounded border-dashed border-md border-opacity-100 border-accent bg-surface opacity-30"
    @dblclick="onDblClick">
    <v-label>
      <v-icon icon='mdi-tag-arrow-down-outline' size="small" density="compact" />
    </v-label>
  </div>
</template>

<script setup lang="ts">

import { defineEmits } from 'vue'
import useStateStore from '@/stores/state';

const state = useStateStore()


const emit = defineEmits(['dblclick'])

const onDblClick = (event: MouseEvent) => {
  state.add = true
  emit('dblclick', event)
}


</script>

<style>
.no-select {
  user-select: none;
  /* Prevent text selection */
}
</style>
