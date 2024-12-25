<template>
  <v-fab :icon="state.drawer ? `$tags` : `$no-tags`" variant="plain" location="bottom start" app appear
    @click="state.toggleDrawer" attach="parent"></v-fab>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStateStore } from '@/stores/state';
const state = ref(useStateStore());

</script>
