<template>
  <v-speed-dial location="bottom center" transition="fade-transition">
    <template v-slot:activator="{ props: activatorProps }">
      <v-fab variant="text" location="bottom start" app rounded icon size="x-large" v-bind="activatorProps"
        :ripple="false">
        <PersonaAvatar />
      </v-fab>
    </template>
    <v-btn key="1" icon="$success"></v-btn>
    <v-btn key="2" icon="$info"></v-btn>
    <v-btn key="3" icon="$warning"></v-btn>
    <v-btn key="4" icon="mdi-account-circle" color="teal" to="/jenny-everywhere"></v-btn>
  </v-speed-dial>
</template>

<script setup lang="ts">
import PersonaAvatar from '@/components/PersonaAvatar.vue';

</script>
