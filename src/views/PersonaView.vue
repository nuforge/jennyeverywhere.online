<template>
  <v-container>
    <h2><router-link to="">Persona: </router-link></h2>
    <v-card>
      <v-card-title>Attributes</v-card-title>
      <TagList column />
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import TagList from '@/components/TagList.vue';
</script>
