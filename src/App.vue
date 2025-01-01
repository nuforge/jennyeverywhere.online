<template>
  <v-responsive>
    <v-app :theme="state.theme">
      <DiceFab location="top end" />
      <TagFab location="bottom start" />
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
      <UndoSnackbar />
      <v-footer class="bg-background align-start opacity-20">&copy; 2025 @<router-link
          to="/">JennyEverywhere.online</router-link></v-footer>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import HeaderLayout from '@/views/layouts/HeaderLayout.vue';
import DiceFab from '@/components/fabs/DiceFab.vue';
import BottomNavigationLayout from '@/views/layouts/BottomNavigationBar.vue';
import DrawerLayout from '@/views/layouts/DrawerLayout.vue';
import TagAddDialog from '@/components/tags/TagAddDialog.vue';
import EventAddDialog from '@/components/timeline/EventAddDialog.vue';
import DiceSnackbar from '@/components/game/DiceSnackbar.vue';
import UndoSnackbar from '@/components/UndoSnackbar.vue';
import { useStateStore } from '@/stores/state';
import AvatarFab from './components/fabs/AvatarFab.vue';
import TagFab from './components/fabs/TagFab.vue';
const state = useStateStore()

const lastKey = ref('');

const handleKeydown = (event: KeyboardEvent) => {
  lastKey.value = event.key; // Store the key that was pressed
  if (event.ctrlKey && event.key === 'z') {
    console.log(`Key pressed: ${event.key}`);
    state.undo = !state.undo;
  }
  if (event.key === '`') {
    console.log(`Key pressed: ${event.key}`);
    state.add = !state.add;
  }
};


onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

</script>

<style>
/* Hide the overlay completely */
.v-overlay {
  display: none;
}
</style>
