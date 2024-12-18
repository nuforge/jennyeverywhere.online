<template>
  <v-app :theme="theme">
    <HeaderLayout :theme="theme" @change-theme="changeTheme" />
    <RouterView />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderLayout from './layouts/HeaderLayout.vue';

const theme = ref('dark')

function changeTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
