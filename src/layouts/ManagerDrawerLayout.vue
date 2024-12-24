<template>
  <v-navigation-drawer location="bottom" :scrim="false" class="bg-transparent border-t-0" v-model="state.drawer">
    <v-container class="bg-surface rounded-t-lg shrink d-flex ">
      <v-expand-x-transition v-if="state.tags">
        <v-card v-show="state.tags" flat>
          <TagManagerLayout />
        </v-card>
      </v-expand-x-transition>
      <v-expand-x-transition>
        <v-card v-show="state.dice" flat>
          <DiceManagerLayout />
        </v-card>
      </v-expand-x-transition>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStateStore } from '@/stores/state';
const state = ref(useStateStore());

import DiceManagerLayout from './DiceManagerLayout.vue';
import TagManagerLayout from './TagManagerLayout.vue';


</script>
