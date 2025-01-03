<template>
  <v-snackbar v-model="dice.snackbar" :timeout="dice.timeout" timer>
    <v-icon :icon="`$d${dice.getFaces()}`" @click="showTray = !showTray" /> {{ message }}
    <v-spacer></v-spacer>
    <template v-slot:actions>
      <v-btn @click="dice.snackbar = !dice.snackbar" icon="$close" size="small" variant="plain"> </v-btn>
    </template>
    <EvTrayCard :tags="rollTags" />

    <v-btn @click="dice.rollDice()" prepend-icon="$dice" size="small" block class="rounded" text="reroll"
      variant="plain"></v-btn>
  </v-snackbar>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDiceStore } from '@/stores/dice';
import Tag from '@/objects/Tag';
const dice = useDiceStore();

const showTray = ref(true);

const message = computed(() => `Rolled ${dice.getResults()} on ${dice.getRolls().length}d${dice.getFaces()} dice`)

const rollTags = computed(() => {
  const tags = [
    new Tag(`d20:${dice.getString(2)}`, 'primary', `mdi-dice-d${dice.getFaces()}`),
  ];
  return tags as Tag[]
});


</script>
