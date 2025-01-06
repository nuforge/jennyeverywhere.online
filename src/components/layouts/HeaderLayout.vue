<template>
  <v-app-bar elevation="0" class="bg-transparent" app scroll-behavior="fade-image">
    <template v-slot:image>
      <v-img :src="logo" style="vertical-align: middle" max-width="200px" class="mx-10" />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logos/jenny-everywhere-online-logo.png'



</script>
