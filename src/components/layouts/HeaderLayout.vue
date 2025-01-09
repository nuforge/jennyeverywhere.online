<template>
  <v-app-bar elevation="0" class="bg-transparent" app scroll-behavior="fade-image">
    <router-link to="/">
      <img :src="logo" width="200px" class="mx-10" id="header_logo" />
    </router-link>
  </v-app-bar>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'


</script>
