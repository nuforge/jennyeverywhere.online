<template>
  <v-app-bar>
    <template v-slot:prepend><v-btn icon="mdi-menu" @click="$emit('toggle-menu')"></v-btn></template>
    <v-app-bar-title>
      <router-link to="/"><img :src="JELogo" max-height="60" /></router-link>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn to="/character" prepend-icon="mdi-account-circle">Jenny Everywhere</v-btn>
      <v-btn :prepend-icon="momentum.icon()" @click="momentum.increment()" color="text"
        :text="momentum.count().toString()"></v-btn>
      <v-btn :icon="props.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'" slim
        @click="$emit('change-theme')" color="text" size="small"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';
const momentum = ref(useCounterStore())

import JELogo from '@/assets/images/logos/jenny-everywhere-online-logo.png'
const props = defineProps({
  theme: String
})




</script>
