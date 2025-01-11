<script setup lang="ts">
import { ref, computed } from 'vue';
import PersonaAvatar from '@/components/persona/PersonaAvatar.vue';
import useStateStore from '@/stores/state'
import useChatStore from '@/stores/chat'
import usePersonaStore from '@/stores/persona';

const state = useStateStore()
const persona = usePersonaStore()
const chat = useChatStore()

const emoji = ref(`🤔`)

const size = computed(() => {
  return state.tagmanager ? 'x-large' : 'x-large'
})

</script>

<template>
  <v-speed-dial transition="fade-transition" :close-on-content-click="false">
    <template v-slot:activator="{ props: activatorProps }">
      <v-fab variant="text" app rounded icon size="xl-large" v-bind="activatorProps" :ripple="false" :z-index="1000"
        location="bottom start">
        <v-badge attach="parent" :content="emoji" color="transparent" floating :dot="chat.snackbar" fab-transition
          @click="chat.toggleChat()">
          <PersonaAvatar :size="size" />
        </v-badge>
      </v-fab>
    </template>
    <v-btn key="1" :icon="'mdi-help'" to="/about"></v-btn>
    <v-btn key="2" :icon="state.theme === 'dark' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      @click="state.changeTheme"></v-btn>
    <v-btn key="3" icon @click="persona.drawer = !persona.drawer"><v-icon
        icon="mdi-page-layout-sidebar-left"></v-icon></v-btn>
    <v-btn key="4" icon="mdi-chat" @click="chat.toggleChat()"></v-btn>
  </v-speed-dial>
</template>
