<template>
  <v-responsive>
    <v-app :theme="state.theme">

      <DiceFab location="top end" />
      <TagFab location="bottom end" />
      <AvatarFab location="bottom start" />

      <BottomNavigationLayout app />
      <ThemeDrawer location="right" />
      <TagDrawer location="bottom" />
      <DetailsDrawer location="left" />

      <HeaderLayout />

      <v-main max-width="1440" class="mx-auto">
        <RouterView />
      </v-main>

      <EventAddDialog />
      <TagAddDialog />

      <DiceSnackbar />
      <TagSnackbar location="bottom" />
      <UndoSnackbar />

      <v-footer class="bg-background align-start opacity-20">&copy; 2025 @<router-link
          to="/">JennyEverywhere.online</router-link></v-footer>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import HeaderLayout from '@/components/layouts/HeaderLayout.vue';
import DiceFab from '@/components/fabs/DiceFab.vue';
import BottomNavigationLayout from '@/components/layouts/BottomNavigationBar.vue';
import TagDrawer from '@/components/drawers/TagDrawer.vue';
import ThemeDrawer from '@/components/drawers/ThemeDrawer.vue';
import DetailsDrawer from '@/components/drawers/PersonaDrawer.vue';
import TagAddDialog from '@/components/tags/TagAddDialog.vue';
import EventAddDialog from '@/components/timeline/EventAddDialog.vue';
import DiceSnackbar from '@/components/game/DiceSnackbar.vue';
import TagSnackbar from '@/components/tags/TagSnackbar.vue';
import UndoSnackbar from '@/components/UndoSnackbar.vue';
import useStateStore from '@/stores/state';
import usePersonaStore from '@/stores/persona';
import AvatarFab from './components/fabs/AvatarFab.vue';
import TagFab from './components/fabs/TagFab.vue';
const state = useStateStore()
const persona = usePersonaStore()


const handleKeydown = (event: KeyboardEvent) => {
  state.handleKeydown(event);
  persona.handleKeydown(event);
};


onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  // Preload the image
  const img = new Image();
  img.src = imgSrc;

  img.onload = () => {
    dragImage.value = img;
  };
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

</script>
