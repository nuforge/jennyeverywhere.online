<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <HeaderLayout @change-theme="changeTheme" @toggle-menu="toggleMenu" />
      <NavigationLayout v-model="drawer" />
      <v-main>
        <v-tag :name="tag.name" :icon="tag.icon" :color="tag.color"></v-tag>
        <RouterView />
      </v-main>
      <BottomSheet name="test" color="primary" icon="mdi-home" description="This is" />
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref } from 'vue'


import HeaderLayout from './layouts/HeaderLayout.vue';
import NavigationLayout from './layouts/NavigationLayout.vue';
import BottomSheet from './components/BottomSheet.vue';

const theme = ref('dark')
const drawer = ref(false)

function changeTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

function toggleMenu() {
  drawer.value = !drawer.value
}

import { Tag } from './Tag.ts';

const tag = ref(new Tag('test'));

console.log(tag.value.toJSON());

</script>

<style scoped>
.v-main {
  height: 100%;
}
</style>
