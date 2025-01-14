<script setup lang="ts">
import LogoThemed from '@/components/persona/LogoThemed.vue'
import { ref, computed, watch } from 'vue';
import useThemeStore from '@/stores/theme';
const theme = useThemeStore()

const currentFocusColor = ref(theme.focus)

const jennyColor = computed(() => theme.getThemeHexByName('surface') || `#161616`) //
const everyColor = computed(() => theme.getThemeHexByName('primary') || `#323232`)
const whereColor = computed(() => theme.getThemeHexByName('text') || `#888888`)

watch(() => theme.focus, (newVal) => {
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
