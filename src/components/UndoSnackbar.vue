<template>
  <v-snackbar v-model="state.undo" :timeout="1000" timer>
    Sorry... no undo, yet.
  </v-snackbar>
</template>

<script setup lang="ts">

import { useStateStore } from '@/stores/state';

const state = useStateStore()

</script>
