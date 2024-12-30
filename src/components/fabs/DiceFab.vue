<template>
  <v-fab variant="plain" app appear @click="dice.rollDice()" attach="parent" :text="dice.getString(2)" class>
    <template v-slot:default>
      <v-tag-item :value="dice.getString(2)" icon="mdi-dice-d20" :label="dice.getString(2)"></v-tag-item>
    </template>
  </v-fab>
</template>

<script setup lang="ts">

import { useDiceStore } from '@/stores/dice';

const dice = useDiceStore()


</script>
