<template>
  <v-fab variant="plain" app appear @click="dice.rollDice()" attach="parent" :text="dice.getString(2)">
    <template v-slot:default>
      <v-tag-item :value="dice.getString(2)" icon="mdi-dice-d20" :label="dice.getString(2)"></v-tag-item>
    </template>
  </v-fab>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

import { useDiceStore } from '@/stores/dice';

const dice = useDiceStore()

const handleKeydown = (event: KeyboardEvent) => {
  dice.handleKeydown(event);
};


onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

</script>
