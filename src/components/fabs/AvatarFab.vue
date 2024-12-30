<template>
  <v-speed-dial transition="fade-transition" :close-on-content-click="false">
    <template v-slot:activator="{ props: activatorProps }">
      <v-fab variant="text" location="bottom start" app rounded icon size="x-large" v-bind="activatorProps"
        :ripple="false">
        <PersonaAvatar />
      </v-fab>
    </template>
    <v-btn key="1" :icon="state.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      @click="state.changeTheme"></v-btn>
    <v-btn key="3" icon to="/jenny-everywhere"><v-icon icon="mdi-account-circle"></v-icon></v-btn>
  </v-speed-dial>
</template>

<script setup lang="ts">
import PersonaAvatar from '@/components/PersonaAvatar.vue';
import { useStateStore } from '@/stores/state'
const state = useStateStore()


</script>
