<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <v-card-title class="chat-header"> {{ title }}
  </v-card-title>
</template>
