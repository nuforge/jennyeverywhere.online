<script setup lang="ts">
import LogoThemed from '@/components/persona/LogoThemed.vue'
import usePersonaStore from '@/stores/persona';
import { ref, computed, watch } from 'vue';
const persona = usePersonaStore()

const currentFocusColor = ref(persona.focus)

const jennyColor = computed(() => persona.getThemeHexByName(persona.focus.color) || `#161616`)
const everyColor = computed(() => persona.getThemeHexByName('primary') || `#323232`)
const whereColor = computed(() => persona.getThemeHexByName('accent') || `#888888`)

watch(() => persona.focus, (newVal) => {
  currentFocusColor.value = newVal
})

</script>

<template>
  <v-app-bar elevation="0" class="bg-transparent" app scroll-behavior="fade-image">
    <router-link to="/">
      <LogoThemed :jenny="jennyColor" :every="everyColor" :where="whereColor" />
    </router-link>
  </v-app-bar>
</template>
