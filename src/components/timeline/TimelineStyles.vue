
<script setup lang="ts">
import { computed } from 'vue';
import useTimelineStore from '@/stores/timelines'

const timeline = useTimelineStore()

const timelimeRotated = computed(() => {
  return timeline.timelineDirection === 'horizontal' ? 'vertical' : 'horizontal'
})

const horizontal = computed(() => {
  return timeline.timelineDirection === 'horizontal'
})

const start = computed(() => {
  return timeline.timelineSide === 'start'
})

const end = computed(() => {
  return timeline.timelineSide === 'end'
})



const timelimeAlignment = computed(() => {
  if (!timeline.timelineSide) return 'center'
  const start = timeline.timelineDirection === 'horizontal' ? 'bottom' : 'right'
  const end = timeline.timelineDirection === 'horizontal' ? 'top' : 'left'
  return timeline.timelineSide === 'start' ? start : end
})


const icon = computed(() => {
  const text = `mdi-align-${timelimeRotated.value}-${timelimeAlignment.value}`
  return text
})


</script>
<template>

  <v-toolbar class="bg-background ">
    <v-btn-toggle v-model="timeline.timelineDirection" density="comfortable">
      <v-btn :icon="icon" :value="horizontal ? 'vertical' : 'horizontal'" variant="plain" size="small"></v-btn>
    </v-btn-toggle>
    <v-btn-toggle v-model="timeline.timelineSide" density="comfortable">
      <v-btn
        :icon="start ? horizontal ? 'mdi-arrow-up-bold' : 'mdi-arrow-left-bold' : horizontal ? 'mdi-arrow-up-bold-outline' : 'mdi-arrow-left-bold-outline'"
        value="start" variant="plain" size="small"></v-btn>

      <v-btn
        :icon="end ? horizontal ? 'mdi-arrow-down-bold' : 'mdi-arrow-right-bold' : horizontal ? 'mdi-arrow-down-bold-outline' : 'mdi-arrow-right-bold-outline'"
        value="end" variant="plain" size="small"></v-btn>
    </v-btn-toggle>
    <v-spacer></v-spacer>
    <v-btn-toggle v-model="timeline.timelineOpposite" density="comfortable">
      <v-btn :icon="timeline.timelineOpposite ? `mdi-tag` : `mdi-tag-hidden`" :value="!timeline.timelineOpposite"
        variant="plain" size="small"></v-btn>
    </v-btn-toggle>
    <v-btn-toggle v-model="timeline.timelineBody" density="comfortable">
      <v-btn :icon="timeline.timelineBody ? `mdi-file` : `mdi-file-hidden`" :value="!timeline.timelineBody"
        variant="plain" size="small"></v-btn>
    </v-btn-toggle>
  </v-toolbar>
</template>
