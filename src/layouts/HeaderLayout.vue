<template>
  <v-app-bar absolute elevation="0" class="bg-transparent">
    <v-app-bar-title>
      <router-link to="/"><img :src="logo" style="vertical-align: middle" /></router-link>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn :prepend-icon="momentum.icon()" @click="momentum.increment()" color="text"
        :text="momentum.count().toString()"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';
import logo from '@/assets/images/logos/jenny-everywhere-online-logo.png'
const momentum = ref(useCounterStore())
</script>
