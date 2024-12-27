<template>
  <v-container>
    <h1>Timeline</h1>
    <v-row>
      <v-col>
        <TimelineComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TimelineComponent from '@/components/timeline/TimelineComponent.vue';
</script>
