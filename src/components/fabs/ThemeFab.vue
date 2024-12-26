<template>
  <v-fab :icon="state.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'" variant="plain"
    location="bottom end" app appear @click="state.changeTheme"></v-fab>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state'
const state = useStateStore()
</script>
