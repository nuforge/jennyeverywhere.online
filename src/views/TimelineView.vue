<template>
  <v-container>
    <v-row>
      <v-col>
        <TimelineComponent />
      </v-col>
    </v-row>
  </v-container>
  <v-btn @click="state.event = !state.event" prepend-icon="mdi-calendar-edit" block class="my-2" variant="plain">Add
    Event</v-btn>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
const state = useStateStore()
import TimelineComponent from '@/components/timeline/TimelineComponent.vue';
</script>
