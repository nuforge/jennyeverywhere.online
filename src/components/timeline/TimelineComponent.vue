<template>
  <v-sheet class="bg-transparent overflow-auto">
    <TimelineStyles />
    <v-timeline :direction="timeline.timelineDirection" truncate-line="both" :side="timeline.timelineSide"
      :hide-opposite="timeline.timelineOpposite">
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

      <v-timeline-item v-for="event in events" :key="event.name" :date="event.date" dot-color="background" fill-dot
        :hide-opposite="!timeline.timelineOpposite">
        <template v-slot:icon>
          <v-icon :icon="event.icon" :color="event.color" />
          <v-tooltip activator="parent" location="top" content-class="bg-surface" elevated>
            <v-icon :icon="event.icon" :color="event.color"></v-icon> {{ event.name }}
          </v-tooltip>
        </template>
        <h2>{{ event.title }}</h2>

        <template v-slot:opposite>
          <TagTray :tags="event.tagList()" @ctrl-click="handleCtrlClick" />
        </template>

        <MarkdownRenderer :text="event.body" :tags="event.tagList()" />
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>

<script setup lang="ts">
import type Tag from '@/objects/Tag';
import { useTagStore } from '@/stores/tags'
import { useStateStore } from '@/stores/state'
import { useTimelineStore } from '@/stores/timelines'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import TagTray from '@/components/tags/TagTrayCard.vue';
import TimelineStyles from './TimelineStyles.vue';

const state = useStateStore()
const tags = useTagStore()
const timeline = useTimelineStore()
const events = timeline.events

console.log(events)

function handleCtrlClick(tag: Tag) {

  console.log('handleCtrlClick', tag)
  tags.addTag(tag)
}



</script>
