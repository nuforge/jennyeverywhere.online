<template>
  <v-container>
    <h1>Timelines</h1>
    <v-row>
      <v-col>
        <TimelineComponent :events="eventList" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TimelineComponent from '@/components/TimelineComponent.vue';
import Event from '@/objects/Event';

const eventList = ref(<Event[]>[
  new Event('Career Event', 'Discovered a wormhole while navigating through unexplored space').addTag('career event:Discovered a wormhole').addIcon('$wormhole').addColor('blue'),
  new Event('Event 2', 'Assigned to the USS Mandelbrot and received a promotion to Lieutenant (junior grade)').addTag('rank:Lieutenant (junior grade)').addIcon('mdi-chevron-double-up').addColor('sta-career').addTag('ship:USS Mandelbrot').addIcon('mdi-rocket').addColor('secondary'),
])


</script>

<style></style>
