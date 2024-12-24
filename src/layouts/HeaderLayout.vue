<template>
  <v-app-bar absolute elevation="0" class="bg-transparent">
    <v-app-bar-title>
      <router-link to="/"><img :src="logo" style="vertical-align: middle" /></router-link>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn :prepend-icon="momentum.icon()" @click.alt.exact="momentum.decrement()" @click.exact="momentum.increment()"
        color="text" :text="momentum.count().toString()"></v-btn>
      <v-btn v-for="(die, index) in dice" :key="index" :prepend-icon="`$d${die.faces}`" @click="die.roll()"
        :text="die.value.toString()">
        <template v-slot:prepend>
          <v-icon :color="index"></v-icon>
        </template> </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';
import logo from '@/assets/images/logos/jenny-everywhere-online-logo.png'

import Dice from '@/game/Dice.ts'
const momentum = ref(useCounterStore())

const dice = ref({
  d20: ref(new Dice(20)),
  d12: ref(new Dice(12)),
  d10: ref(new Dice(10)),
  d8: ref(new Dice(8)),
  d6: ref(new Dice(6)),
  d4: ref(new Dice(4)),
})
</script>
