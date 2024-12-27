<template>
  <v-responsive class="border rounded">
    <v-app :theme="state.theme">
      <dice-fab location="top end" />
      <tag-fab location="bottom end" />
      <AvatarFab location="bottom start" />
      <HeaderLayout />
      <v-main>
        <RouterView />
      </v-main>
      <v-footer class="bg-background align-start opacity-20">&copy; 2025 - <router-link
          to="/">JennyEverywhere.online</router-link></v-footer>
      <BottomNavigationLayout app elevation="2" />
      <ManagerDrawerLayout />
      <TagAddDailog v-model="state.add" />
      <DiceSnackbar v-model="state.snackbar" />
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">

import HeaderLayout from '@/views/layouts/HeaderLayout.vue';
import DiceFab from '@/components/fabs/DiceFab.vue';
import BottomNavigationLayout from '@/views/layouts/BottomNavigationLayout.vue';
import ManagerDrawerLayout from '@/views/layouts/DrawerLayout.vue';
import TagAddDailog from '@/components/tags/TagAddDialog.vue';
import DiceSnackbar from '@/components/game/DiceSnackbar.vue';
import { useStateStore } from '@/stores/state';
import AvatarFab from './components/fabs/AvatarFab.vue';
const state = useStateStore()


</script>
