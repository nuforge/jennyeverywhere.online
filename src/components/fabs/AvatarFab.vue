<template>
  <v-speed-dial transition="fade-transition" :close-on-content-click="false">
    <template v-slot:activator="{ props: activatorProps }">
      <v-fab variant="text" app rounded icon size="xl-large" v-bind="activatorProps" :ripple="false" :z-index="10000"
        location="bottom start">
        <PersonaAvatar :size="size" />
      </v-fab>
    </template>
    <v-btn key="1" :icon="'mdi-help'" to="/about"></v-btn>
    <v-btn key="2" :icon="state.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      @click="state.changeTheme"></v-btn>
    <v-btn key="3" icon to="/jenny-everywhere"><v-icon icon="mdi-account-circle"></v-icon></v-btn>
  </v-speed-dial>
</template>

<script setup lang="ts">
import PersonaAvatar from '@/components/PersonaAvatar.vue';
import { useStateStore } from '@/stores/state'
import { computed } from 'vue';
const state = useStateStore()


const size = computed(() => {
  return state.tagmanager ? 'x-large' : 'x-large'
})

</script>
