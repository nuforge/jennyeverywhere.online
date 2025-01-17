<script setup lang="ts">
import { computed } from 'vue';
import useTimelineStore from '@/stores/timelines';
const timeline = useTimelineStore();

import useChatStore from '@/stores/chat/nuchat.ts';
const chat = useChatStore();

const chatMessages = computed(() => chat.previousMessages)
</script>

<template>

  <v-timeline :direction="timeline.timelineDirection" truncate-line="both" :side="timeline.timelineSide"
    :hide-opposite="timeline.timelineOpposite">
    <v-timeline-item v-for="message in chatMessages" :key="message.id" :date="message.timestamp" dot-color="background"
      fill-dot :hide-opposite="!timeline.timelineOpposite"
      :icon="message.sender === 'agent' ? 'mdi-robot' : 'mdi-account'">{{ message.content }}
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped>
.draggable {
  cursor: grab;
}
</style>
