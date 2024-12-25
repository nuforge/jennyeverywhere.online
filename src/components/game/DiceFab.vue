<template>
  <v-fab :prepend-icon="dice.getResults() ? `$d${dice.getFaces()}` : `$no-dice`" variant="plain" location="bottom end"
    app appear @click="rollDice()" attach="parent" :text="dice.getResults().toString().padStart(2, '0')">
  </v-fab>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import { useDiceStore } from '@/stores/dice';
const state = useStateStore()
const dice = useDiceStore()


const rollDice = () => {
  dice.rollDice()
  state.triggerSnackbar()
}

</script>
