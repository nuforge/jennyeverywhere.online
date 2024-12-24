<template>
  <v-container>
    <h2><router-link to="">Persona: </router-link></h2>
    <v-card>
      <v-card-title>Attributes</v-card-title>
      <v-card-text>
        <TagList column class="bg-background rounded elevation-4 px-2" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import TagList from '@/components/tags/TagList.vue';
</script>
