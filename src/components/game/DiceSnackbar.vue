<template>
  <v-snackbar v-model="dice.snackbar" :timeout="dice.timeout" timer>
    <v-icon :icon="`$d${dice.getFaces()}`" /> {{ message }}
    <v-btn @click="dice.rollDice()" icon="$dice" size="small"></v-btn>
    <TagTray :tags="rollTags" dense />
  </v-snackbar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDiceStore } from '@/stores/dice';
import TagTray from '@/components/tags/TagTray.vue';
import Tag from '@/objects/Tag';
const dice = useDiceStore();

const message = computed(() => `Rolled ${dice.getResults()} on ${dice.getRolls().length}d${dice.getFaces()} dice`)

const rollTags = computed(() => {
  const tags = [
    new Tag(`d20:${dice.getString(2)}`, 'primary', `mdi-dice-d${dice.getFaces()}`),
  ];
  return tags as Tag[]
});


</script>
