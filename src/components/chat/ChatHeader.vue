<script setup lang="ts">
import PersonaAvatar from '@/components/PersonaAvatar.vue';
defineProps<{
  title: string;
}>();
</script>

<template>
  <v-card-title class="chat-header">
    <PersonaAvatar /> {{ title }}
  </v-card-title>
</template>
