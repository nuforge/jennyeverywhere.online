<script setup lang="ts">
import { computed } from 'vue';
import PersonaAvatar from '@/components/persona/PersonaAvatar.vue';
import useStateStore from '@/stores/state'
import jennyEverywhere from '@/stores/jenny-everywhere';
import usePersonaStore from '@/stores/persona';

const state = useStateStore()
const persona = usePersonaStore()
const jenny = jennyEverywhere()


const size = computed(() => {
  return state.tagmanager ? 'x-large' : 'x-large'
})

</script>

<template>
  <v-speed-dial transition="fade-transition" :close-on-content-click="false">
    <template v-slot:activator="{ props: activatorProps }">
      <v-fab variant="text" app rounded icon size="xl-large" v-bind="activatorProps" :ripple="false" :z-index="1000"
        location="bottom start">
        <v-badge attach="parent" :content="jenny.emoji" color="transparent" fab-transition @click="jenny.toggleChat()"
          location="top end" :dot="jenny.snackbar">
          <template v-slot:badge>
            <span class="text-h6 text-shadow bg-background rounded-circle elevation-1 position-absolute">{{ jenny.emoji
              }}</span>
          </template>
          <PersonaAvatar :size="size" />
        </v-badge>
      </v-fab>
    </template>
    <v-btn key="1" :icon="'mdi-help'" to="/about"></v-btn>
    <v-btn key="2" :icon="state.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      @click="state.changeTheme"></v-btn>
    <v-btn key="3" icon @click="persona.drawer = !persona.drawer"><v-icon
        icon="mdi-page-layout-sidebar-left"></v-icon></v-btn>
    <v-btn key="4" icon="mdi-chat" @click="jenny.toggleChat()"></v-btn>
  </v-speed-dial>
</template>
