<template>
  <v-snackbar :timeout="timeout" color="surface" location="bottom end" close-on-content-click>
    <v-icon :icon="`$d${dice.getFaces()}`" :color="`d${dice.getFaces()}`" /> Rolled {{ dice.getResults() }} on {{
      dice.getRolls().length }}d{{
      dice.getFaces() }} dice
  </v-snackbar>
</template>

<script setup lang="ts">
import { useDiceStore } from '@/stores/dice';
const dice = useDiceStore();
const timeout = 3600

</script>
