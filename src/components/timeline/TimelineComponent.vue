<template>
  <v-sheet class="bg-transparent overflow-auto">
    <v-toolbar class="bg-background">
      <v-btn-toggle v-model="timelineDirection" density="comfortable" mandatory>
        <v-btn icon="mdi-align-vertical-center" value="horizontal" variant="plain" size="small"></v-btn>
        <v-btn icon="mdi-align-horizontal-center" value="vertical" variant="plain" size="small"></v-btn>
      </v-btn-toggle>{{ timelineDirection }}
    </v-toolbar>
    <v-timeline :direction="timelineDirection" truncate-line="both">
      <v-timeline-item dot-color="background" fill-dot>

        <template v-slot:icon>
          <v-icon icon="mdi-help" color="disabled">
          </v-icon>
          <v-tooltip activator="parent" location="top" content-class="bg-surface" elevated>
            <v-icon icon="mdi-help"></v-icon> The Future
          </v-tooltip>
        </template>

        <v-btn @click="state.event = !state.event" prepend-icon="mdi-calendar-edit" block class="my-2" variant="plain"
          text="Add Event"></v-btn>
      </v-timeline-item>

      <v-timeline-item v-for="event in events" :key="event.name" :date="event.formattedDate" dot-color="background"
        fill-dot>
        <template v-slot:icon>
          <v-icon :icon="event.icon" :color="event.color">
          </v-icon>
          <v-tooltip activator="parent" location="top" content-class="bg-surface" elevated>
            <v-icon :icon="event.icon" :color="event.color"></v-icon> {{ event.name }}
          </v-tooltip>
        </template>
        <template v-slot:opposite>
          <TagTray :tags="event.tagList()" @ctrl-click="handleCtrlClick" />
        </template>
        <h2>{{ event.name }}</h2>
        <MarkdownRenderer :text="event.body" />
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type Tag from '@/objects/Tag';
import { useTagStore } from '@/stores/tags'
import { useStateStore } from '@/stores/state'
import { useTimelineStore } from '@/stores/timelines'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import TagTray from '@/components/tags/TagTrayCard.vue';

const state = useStateStore()
const tags = useTagStore()
const events = useTimelineStore().events

type TimelineDirection = 'horizontal' | 'vertical';
const timelineDirection = ref<TimelineDirection>('vertical');
console.log(events)

function handleCtrlClick(tag: Tag) {

  console.log('handleCtrlClick', tag)
  tags.addTag(tag)
}



</script>
