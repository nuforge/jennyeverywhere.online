<template>
  <v-bottom-navigation app elevation="2">
    <v-btn value="home" icon="$home" to="/">
    </v-btn>
    <v-btn value="home" icon="$home" to="/jenny-everywhere">
      <PersonaAvatar location="top" to="/jenny-everywhere" />
    </v-btn>
    <v-btn value="timeline" :icon="`$events`" to="timeline">
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import PersonaAvatar from '@/components/PersonaAvatar.vue';
</script>
