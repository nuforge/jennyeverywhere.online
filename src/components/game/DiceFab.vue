<template>
  <v-fab :icon="state.dice ? `$dice` : `$no-dice`" variant="plain" location="bottom end" app appear
    @click="dice.rollDice()" attach="parent"></v-fab>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStateStore } from '@/stores/state';
import { useDiceStore } from '@/stores/dice'

const dice = useDiceStore()
const state = ref(useStateStore());
</script>
