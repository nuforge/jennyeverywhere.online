<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-fab :icon="drawer ? `$close` : `mdi-tag-multiple-outline`" location="bottom start" variant="plain" app appear
        @click="toggleMenu"></v-fab>
      <v-fab :icon="theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'" variant="plain" location="bottom end"
        app appear @click="changeTheme"></v-fab>
      <HeaderLayout />
      <NavigationLayout v-model="drawer" />
      <v-main>
        <RouterView />
      </v-main>
      <BottomSheet />
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
  theme.value = (theme.value === 'dark') ? 'light' : 'dark'
}

function toggleMenu() {
  drawer.value = !drawer.value
}



import { useTagStore } from '@/stores/tags';
const tags = ref(useTagStore())

tags.value.addLabel('name', 'error', 'mdi-account-circle')
tags.value.addLabel('action', 'primary', 'mdi-sword')
tags.value.addLabel('item', 'text', 'mdi-circle-small')
tags.value.addLabel('occupation', 'text', 'mdi-domain')
tags.value.addLabel('character', 'text', 'mdi-account')
tags.value.addLabel('green portal', 'green', 'mdi-orbit')
tags.value.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
tags.value.addTag('jetpack')
tags.value.addLabel('flamethrower', 'red', 'mdi-fire')
tags.value.addTag('character:dude with a mohawk')
tags.value.addTag('toast')

</script>

<style scoped>
.v-main {
  height: 100%;
}
</style>
