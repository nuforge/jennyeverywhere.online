<template>
  <v-responsive class="border rounded">
    <v-app :theme="state.theme">
      <dice-fab location="bottom end" />
      <tag-fab location="bottom start" />
      <HeaderLayout />
      <v-main>
        <RouterView />
      </v-main>
      <v-footer>&copy; 2025 - <router-link to="/">JennyEverywhere.online</router-link></v-footer>
      <BottomNavigationLayout app elevation="2" />
      <ManagerDrawerLayout />
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStateStore } from '@/stores/state';
const state = ref(useStateStore());


import HeaderLayout from './layouts/HeaderLayout.vue';
import DiceFab from './components/game/DiceFab.vue';
import TagFab from './components/tags/TagFab.vue';
import BottomNavigationLayout from './layouts/BottomNavigationLayout.vue';
import ManagerDrawerLayout from './layouts/ManagerDrawerLayout.vue';

</script>

<style scoped>
.v-main {
  height: 100%;
}
</style>
