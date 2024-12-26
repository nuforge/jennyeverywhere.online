<template>
  <v-responsive class="border rounded">
    <v-app :theme="state.theme">
      <dice-fab location="top end" />
      <AvatarFab location="bottom start" />
      <HeaderLayout />
      <v-main>
        <RouterView />
        <tag-fab location="bottom end" />
      </v-main>
      <v-footer class="bg-background align-start opacity-20">&copy; 2025 - <router-link
          to="/">JennyEverywhere.online</router-link></v-footer>
      <BottomNavigationLayout app elevation="2" />
      <ManagerDrawerLayout />
      <DiceSnackbar v-model="state.snackbar" />
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">

import HeaderLayout from '@/layouts/HeaderLayout.vue';
import DiceFab from '@/components/fabs/DiceFab.vue';
import BottomNavigationLayout from '@/layouts/BottomNavigationLayout.vue';
import ManagerDrawerLayout from '@/layouts/DrawerLayout.vue';
import DiceSnackbar from '@/components/game/DiceSnackbar.vue';
import { useStateStore } from '@/stores/state';
import AvatarFab from './components/fabs/AvatarFab.vue';
const state = useStateStore()


</script>
