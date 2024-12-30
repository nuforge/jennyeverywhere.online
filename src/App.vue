<template>
  <v-responsive>
    <v-app :theme="state.theme">
      <TagFab location="bottom start" />
      <DiceFab location="top end" />
      <AvatarFab location="bottom end" />
      <BottomNavigationLayout app />
      <DrawerLayout location="bottom" />

      <HeaderLayout />
      <v-main max-width="1440" class="mx-auto">
        <RouterView />
      </v-main>
      <EventAddDialog />
      <TagAddDialog />
      <DiceSnackbar />
      <v-footer class="bg-background align-start opacity-20">&copy; 2025 - <router-link
          to="/">JennyEverywhere.online</router-link></v-footer>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">

import HeaderLayout from '@/views/layouts/HeaderLayout.vue';
import DiceFab from '@/components/fabs/DiceFab.vue';
import BottomNavigationLayout from '@/views/layouts/BottomNavigationLayout.vue';
import DrawerLayout from '@/views/layouts/DrawerLayout.vue';
import TagAddDialog from '@/components/tags/TagAddDialog.vue';
import EventAddDialog from '@/components/timeline/EventAddDialog.vue';
import DiceSnackbar from '@/components/game/DiceSnackbar.vue';
import { useStateStore } from '@/stores/state';
import AvatarFab from './components/fabs/AvatarFab.vue';
import TagFab from './components/fabs/TagFab.vue';
const state = useStateStore()


</script>

<style>
/* Hide the overlay completely */
.v-overlay {
  display: none;
}
</style>
