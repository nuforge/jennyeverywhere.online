<template>
  <v-responsive class="border rounded">
    <v-app :theme="state.theme">
      <tag-fab location="bottom start" />
      <dice-fab location="bottom end" />
      <HeaderLayout />
      <v-main>
        <RouterView />
      </v-main>
      <v-footer>&copy; 2025 - <router-link to="/">JennyEverywhere.online</router-link></v-footer>
      <BottomNavigationLayout app elevation="2" />
      <TagManagerLayout v-model="state.drawer" />
      <DiceManagerLayout v-model="state.dice" />
      <BottomSheet />
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTagStore } from '@/stores/tags';
import { useStateStore } from '@/stores/state';
const state = ref(useStateStore());
const tags = ref(useTagStore())


import HeaderLayout from './layouts/HeaderLayout.vue';
import DiceFab from './components/game/DiceFab.vue';
import TagFab from './components/tags/TagFab.vue';
import BottomNavigationLayout from './layouts/BottomNavigationLayout.vue';
import TagManagerLayout from './layouts/TagManagerLayout.vue';
import BottomSheet from './components/BottomSheet.vue';
import DiceManagerLayout from './layouts/DiceManagerLayout.vue';


onMounted(async () => {
  tags.value.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  tags.value.addLabel('green portal', 'green', 'mdi-orbit')
  tags.value.addLabel('flamethrower', 'red', 'mdi-fire')
  tags.value.addLabel('jetpack', 'warning', 'mdi-rocket-launch')
  tags.value.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')

});
</script>

<style scoped>
.v-main {
  height: 100%;
}
</style>
