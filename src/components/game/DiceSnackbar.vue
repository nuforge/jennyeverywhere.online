<template>
  <v-snackbar v-model="dice.snackbar" :timeout="dice.timeout" color="surface" location="bottom end"
    close-on-content-click timer>
    <v-icon :icon="`$d${dice.getFaces()}`" /> {{ message }}
    <v-spacer>
      <TagTray :tags="rollTags" dense />
    </v-spacer>
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
    new Tag(`dice:d${dice.getFaces()}`, `primary`, `mdi-dice-d${dice.getFaces()}`),
    new Tag(`roll:${dice.getString(2)}`, undefined, `$dice`),
  ];

  return tags as Tag[]
});


</script>
