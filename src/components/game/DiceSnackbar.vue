<template>
  <v-snackbar :timeout="timeout" :color="`d${dice.getFaces()}`" location="bottom end" close-on-content-click>
    <v-icon :icon="`$d${dice.getFaces()}`" /> Rolled {{ dice.getResults() }} on {{
      dice.getRolls().length }}d{{
      dice.getFaces() }} dice
  </v-snackbar>
</template>

<script setup lang="ts">
import { useDiceStore } from '@/stores/dice';
const dice = useDiceStore();
const timeout = 3600

</script>
