<template>
  <v-responsive>
    <v-app :theme="state.theme">
      <DrawerLayout />
      <v-main>
        <dice-fab location="top end" />
        <TagFab location="bottom end" />
        <AvatarFab location="bottom start" />

        <HeaderLayout />
        <RouterView />


        <EventAddDialog />
        <TagAddDailog />
        <BottomNavigationLayout app />
        <DiceSnackbar v-model="state.snackbar" />
      </v-main>
      <v-footer class="bg-background align-start opacity-20">&copy; 2025 - <router-link
          to="/">JennyEverywhere.online</router-link></v-footer>
    </v-app>
    <BottomSheet :attach="true" />
  </v-responsive>
</template>

<script setup lang="ts">

import HeaderLayout from '@/views/layouts/HeaderLayout.vue';
import DiceFab from '@/components/fabs/DiceFab.vue';
import BottomNavigationLayout from '@/views/layouts/BottomNavigationLayout.vue';
import DrawerLayout from '@/views/layouts/DrawerLayout.vue';
import TagAddDailog from '@/components/tags/TagAddDialog.vue';
import EventAddDialog from '@/components/timeline/EventAddDialog.vue';
import DiceSnackbar from '@/components/game/DiceSnackbar.vue';
import { useStateStore } from '@/stores/state';
import AvatarFab from './components/fabs/AvatarFab.vue';
import BottomSheet from './views/layouts/BottomSheet.vue';
import TagFab from './components/fabs/TagFab.vue';
const state = useStateStore()


</script>
