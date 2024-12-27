<template>
  <v-fab :icon="state.drawer ? `$tags` : `$no-tags`" location="bottom end" app appear @click="state.toggleDrawer"
    variant="plain"></v-fab>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const state = useStateStore()

</script>
