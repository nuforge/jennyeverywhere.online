<template>
  <v-btn v-for="(die, index) in dice" :key="index" :prepend-icon="`$d${die.faces}`" @click="die.roll()"
    :text="die.value.toString().padStart(2, '0')" dark>
    <template v-slot:prepend>
      <sub v-if="die.rolls.length > 1">{{ die.rolls.length }}</sub>
      <v-icon :color="index"></v-icon>
    </template>
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dice from '@/game/Dice.ts'

const dice = ref({
  d20: ref(new Dice(20)),
})

</script>
