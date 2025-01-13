<script setup lang="ts">
import { onMounted } from 'vue';
import type Tag from '@/objects/nu/Tag';
import NuTag from '@/components/nu/NuTag.vue';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import TimelineStyles from '@/components/timeline/TimelineStyles.vue';

import { useTimelineStore } from '@/stores/timelines';
const timeline = useTimelineStore();

import jennyEverywhere from '@/stores/jenny-everywhere';
import ChatInputBar from './ChatInputBar.vue';

const theShifter = jennyEverywhere();


onMounted(() => {

})

</script>

<template>
  <v-sheet class="bg-transparent overflow-auto">
    <TimelineStyles />
    <ChatInputBar />
    <v-timeline :direction="timeline.timelineDirection" truncate-line="both" :side="timeline.timelineSide"
      :hide-opposite="timeline.timelineOpposite">

      <v-timeline-item v-for="message in theShifter.messages" :key="message.id" :date="message.timestamp"
        dot-color="background" fill-dot :hide-opposite="!timeline.timelineOpposite">
        <template v-slot:icon>
          <v-tooltip activator="parent" location="top" content-class="bg-surface" elevated>
          </v-tooltip>
        </template>
        <template #default v-if="timeline.timelineBody">
          <MarkdownRenderer :text="message.text" :tags="(message.tags as Tag[])" />
        </template>
        <template v-slot:opposite>
          <NuTag v-for="tag in (message.tags as Tag[])" :key="tag.label" :tag="tag" variant="plain" :labels="false" />
        </template>
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>
