<script setup lang="ts">
const dragImage = ref<HTMLImageElement | null>(null);
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';

import { onMounted, onUnmounted, ref } from 'vue';

import HeaderLayout from '@/components/HeaderLayout.vue';
import DiceFab from '@/components/fab/DiceFab.vue';
import BottomNavigationLayout from '@/components/BottomNavigationBar.vue';
import PersonaDrawer from '@/components/persona/PersonaDrawer.vue';
import EventAddDialog from '@/components/timeline/EventAddDialog.vue';
import ChatSnackbar from '@/components/chat/ChatSnackbar.vue';
import DiceSnackbar from '@/components/snackbar/DiceSnackbar.vue';
import UndoSnackbar from '@/components/snackbar/UndoSnackbar.vue';
import useStateStore from '@/stores/state';
import usePersonaStore from '@/stores/persona';
import AvatarFab from './components/fab/AvatarFab.vue';
import { RouterView } from 'vue-router';

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

<template>
  <v-responsive>
    <v-app :theme="state.theme">

      <DiceFab location="bottom end" />
      <AvatarFab location="bottom start" />

      <BottomNavigationLayout app />
      <PersonaDrawer location="left" />

      <HeaderLayout />
      <Suspense>
      <v-container>
        <v-main>
          <RouterView />
        </v-main>
      </v-container>
      <template #fallback>suspense loading...
      </template>
    </Suspense>

      <EventAddDialog />

      <ChatSnackbar />

      <DiceSnackbar />
      <UndoSnackbar />

      <v-footer class="bg-background align-end opacity-20"><v-spacer /> &copy; 2025 @<router-link
          to="/">JennyEverywhere.online</router-link></v-footer>
    </v-app>
  </v-responsive>
</template>
