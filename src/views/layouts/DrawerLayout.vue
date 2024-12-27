<template>
  <v-navigation-drawer location="bottom" :scrim="false" class="bg-transparent border-t-0" v-model="state.tagmanager"
    disable-route-watcher>
    <v-container class="g-transparent rounded-t-lg d-flex justify-center pa-0" flat>
      <TagManagerLayout v-if="state.tags" />
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const state = useStateStore()

import TagManagerLayout from './TagManagerLayout.vue';


</script>
