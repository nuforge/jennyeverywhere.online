<template>
  <v-fab :prepend-icon="dice.getResults() ? `$dice` : `$no-dice`" variant="plain" app appear @click="rollDice()"
    attach="parent" :text="dice.getResults().toString().padStart(2, '0')" class>
    <template v-slot:default>
      {{ dice.getResults().toString().padStart(2, '0') }}
    </template>
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
