<script setup lang="ts">
import LogoThemed from '@/components/LogoThemed.vue'
import usePersonaStore from '@/stores/persona';
import { computed } from 'vue';

const persona = usePersonaStore()

const jennyColor = computed(() => `#${persona.getThemeHexByName('background') || `000000`}`)
const everyColor = computed(() => `#${persona.getThemeHexByName('primary') || `323232`}`)
const whereColor = computed(() => `#${persona.getThemeHexByName('accent') || `888888`}`)

const tags = persona.themeTags
console.log('tags:', tags)

console.log(persona.getThemeHexByName('primary'))

</script>

<template>
  <v-app-bar elevation="0" class="bg-transparent" app scroll-behavior="fade-image">
    <router-link to="/">
      <LogoThemed :jenny="jennyColor" :every="everyColor" :where="whereColor" />
    </router-link>
  </v-app-bar>
</template>
