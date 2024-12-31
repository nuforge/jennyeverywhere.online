<template>

<v-toolbar class="bg-background">
  <v-btn-toggle v-model="timeline.timelineDirection" density="comfortable" mandatory>
    <v-btn icon="mdi-align-vertical-center" value="horizontal" variant="plain" size="small"></v-btn>
    <v-btn icon="mdi-align-horizontal-center" value="vertical" variant="plain" size="small"></v-btn>
  </v-btn-toggle>{{ timeline.timelineDirection }}
</v-toolbar>
</template>

<script setup lang="ts">
import { useTimelineStore } from '@/stores/timelines'

const timeline = useTimelineStore()



</script>
