<script setup lang="ts">
import LogoThemed from '@/components/LogoThemed.vue'
import usePersonaStore from '@/stores/persona';
import { computed } from 'vue';

const persona = usePersonaStore()

const jennyColor = computed(() => persona.focus.color)

</script>

<template>
  <v-app-bar elevation="0" class="bg-transparent" app scroll-behavior="fade-image">
    <router-link to="/">
      <LogoThemed :jenny="jennyColor" />
    </router-link>
  </v-app-bar>
</template>
