<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import useDiceStore from '@/stores/dice';
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

<template>
  <v-fab variant="plain" app appear @click="dice.rollDice()" attach="parent" :text="dice.getString(2)"
    @click.right.prevent="dice.nextDie()">
    <template v-slot:default>
      <NuTag :tag="dice.getTag()" :icon="dice.getIcon()" :label="dice.getString(2)" :value="dice.getResults()"
        :color="dice.getColor()" />
    </template>
  </v-fab>
</template>
