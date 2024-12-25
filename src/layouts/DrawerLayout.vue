<template>
  <v-navigation-drawer location="bottom" :scrim="false" class="bg-transparent border-t-0" v-model="state.drawer"
    disable-route-watcher>
    <v-container class="g-transparent rounded-t-lg d-flex justify-center pa-0" flat>
      <TagManagerLayout v-if="state.tags" />
      <DiceManagerLayout v-if="state.dice" />
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStateStore } from '@/stores/state';
const state = ref(useStateStore());

import TagManagerLayout from './TagManagerLayout.vue';
import DiceManagerLayout from './DiceManagerLayout.vue';


</script>
