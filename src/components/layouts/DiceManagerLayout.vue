<template>
  <v-container class="bg-background rounded-lg mx-auto ">
    <dice-tag :faces="dice.getFaces()" :value="dice.getResults()" :rolls="dice.getRolls()" @click="dice.rollDice()" />
  </v-container>
</template>

<script setup lang="ts">
import DiceTag from '@/components/game/DiceTag.vue'
import { useDiceStore } from '@/stores/dice'

const dice = useDiceStore()

</script>
