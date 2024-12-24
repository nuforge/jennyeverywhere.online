<template>
  <v-fab :icon="state.dice ? `$dice` : `$no-dice`" variant="plain" location="bottom end" app appear
    @click="state.toggleDice" attach="parent"></v-fab>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStateStore } from '@/stores/state';
const state = ref(useStateStore());
</script>
