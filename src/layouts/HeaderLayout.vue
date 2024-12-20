<template>
  <v-app-bar>
    <v-app-bar-title>
      <router-link to="/"><v-img :src="JELogo" max-height="48" /></router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn to="/about">About</v-btn>
    <v-btn to="/character">character</v-btn>
    <v-btn :icon="props.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'" slim
      @click="$emit('change-theme')" color="text" size="small"></v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import JELogo from '@/assets/images/logos/jenny-everywhere-online-logo.png'
const props = defineProps(['theme'])


</script>
