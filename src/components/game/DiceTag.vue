<template>
  <v-btn :prepend-icon="`$d${dice.faces}`" @click="dice.roll()" :text="dice.value.toString().padStart(2, '0')" dark>
    <template v-slot:prepend>
      <sub v-if="dice.rolls.length > 1">{{ dice.rolls.length }}</sub>
      <v-icon :color="`d${dice.faces}`"></v-icon>
    </template>
  </v-btn>
</template>

<script setup lang="ts">
import Dice from '@/game/Dice.ts'

defineProps<{
  dice: Dice
}>()

</script>
