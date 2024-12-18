<template>
  <v-app-bar>
    <v-app-bar-title>
      <v-img :src="JELogo" max-height="48" />
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn :prepend-icon="props.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-day'" slim
      @click="$emit('change-theme')"></v-btn>
    <v-btn to="/">Home</v-btn>
    <v-btn to="/about">About</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import JELogo from '@/assets/images/logos/jenny-everywhere-online-logo.png'
const props = defineProps(['theme'])


</script>
