<template>
  <v-app-bar absolute elevation="0" class="bg-transparent">
    <v-app-bar-title>
      <router-link to="/"><img :src="logo" style="vertical-align: middle" /></router-link>
    </v-app-bar-title>
    <template v-slot:append>
      <dice-tag />
      <counter-tag />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logos/jenny-everywhere-online-logo.png'
import DiceTag from '@/components/game/DiceTag.vue'
import CounterTag from '@/components/game/CounterTag.vue'


</script>
