<template>
  <v-container class="d-flex">
    <EvTagCard :tags="activeColorTags" :labels="false" name="Colors" />
    <EvTagCard :tags="backgroundTags" :labels="false" name="Backgrounds" />
  </v-container>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePersonaStore } from '@/stores/persona';
import EvTagCard from './tags/EvTagCard.vue';

const persona = usePersonaStore()

const defaultFocus = ref(['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning'])
const bgColors = ref(['background', 'surface', 'accent'])

const activeColorTags = computed(() => {
  return persona.themeTags.filter(tag => defaultFocus.value.includes(tag.name));
})
const backgroundTags = computed(() => {
  return persona.themeTags.filter(tag => bgColors.value.includes(tag.name));
})

console.log('ThemePalette:', persona.themeTags)

</script>
