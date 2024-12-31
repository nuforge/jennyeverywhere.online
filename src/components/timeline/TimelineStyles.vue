<template>

  <v-toolbar class="bg-background">
    <v-btn-toggle v-model="timeline.timelineDirection" density="comfortable">
      <v-btn icon="mdi-rotate-right" value="horizontal" variant="plain" size="small"></v-btn>


    </v-btn-toggle>
    <v-btn-toggle v-model="timeline.timelineSide" density="comfortable">
      <v-btn
        :icon="timeline.timelineSide === 'start' ? 'mdi-arrow-top-left-bold-box' : 'mdi-arrow-top-left-bold-box-outline'"
        value="start" variant="plain" size="small"></v-btn>
      <v-btn
        :icon="timeline.timelineSide === 'end' ? 'mdi-arrow-bottom-right-bold-box' : 'mdi-arrow-bottom-right-bold-box-outline'"
        value="end" variant="plain" size="small"></v-btn>
    </v-btn-toggle>
    <v-btn-toggle v-model="timeline.timelineOpposite" density="comfortable">
      <v-btn :icon="timeline.timelineOpposite ? `mdi-tag` : `mdi-tag-hidden`" :value="!timeline.timelineOpposite"
        variant="plain" size="small"></v-btn>
    </v-btn-toggle>
  </v-toolbar>
</template>

<script setup lang="ts">
import { useTimelineStore } from '@/stores/timelines'

const timeline = useTimelineStore()



</script>
