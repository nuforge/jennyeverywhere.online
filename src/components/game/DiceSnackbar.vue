<template>
  <v-snackbar v-model="snkbr" :timeout="timeout" color="surface" location="bottom end" close-on-content-click timer>
    <v-icon :icon="`$d${dice.getFaces()}`" /> Rolled {{ dice.getResults() }} on {{
      dice.getRolls().length }}d{{
      dice.getFaces() }} dice {{ snkbr }}
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDiceStore } from '@/stores/dice';
const dice = useDiceStore();
const timeout = ref(3500)
const snkbr = ref(false)

</script>
