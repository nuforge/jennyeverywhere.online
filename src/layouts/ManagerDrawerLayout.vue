<template>
  <v-navigation-drawer location="bottom" :scrim="false" class="bg-transparent border-t-0" v-model="state.drawer">
    <v-container class="bg-surface rounded-t-lg d-flex justify-center pa-0" flat>
      <v-scale-transition>
        <v-col v-show="state.tags" flat>
          <TagManagerLayout />
        </v-col>
      </v-scale-transition>
      <v-scale-transition>
        <v-col cols="auto" flat>
          <DiceManagerLayout />
        </v-col>
      </v-scale-transition>
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
