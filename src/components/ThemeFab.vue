<template>
  <v-fab :icon="state.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'" variant="plain"
    location="bottom end" app appear @click="state.changeTheme"></v-fab>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useStateStore } from '@/stores/state';
const state = ref(useStateStore());
</script>
