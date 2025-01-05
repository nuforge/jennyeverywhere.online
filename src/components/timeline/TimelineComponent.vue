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

      </v-timeline-item>

      <v-timeline-item v-for="event in events" :key="event.name" :date="event.date" dot-color="background" fill-dot
        :hide-opposite="!timeline.timelineOpposite">
        <template v-slot:icon>
          <v-icon :icon="event.icon" :color="event.color" />
          <v-tooltip activator="parent" location="top" content-class="bg-surface" elevated>
            <v-icon :icon="event.icon" :color="event.color"></v-icon> {{ event.name }}
          </v-tooltip>
        </template>
        <template #default v-if="timeline.timelineBody">
          <h2>{{ event.title }}</h2>
          <MarkdownRenderer :text="event.body" :tags="(event.tags as Tag[])" />

        </template>
        <template v-slot:opposite>
          <EvTrayCard :body="event.body" :tags="(event.tags as Tag[])" @ctrl-click="handleCtrlClick" variant="plain"
            :name="event.name" />
        </template>

      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import type Tag from '@/objects/Tag';
import useTagStore from '@/stores/tags'
import useStoryStore from '@/stores/story'
import { useTimelineStore } from '@/stores/timelines'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import TimelineStyles from './TimelineStyles.vue';
import Log from '@/objects/Log';
import EvTrayCard from '@/components/tags/EvTrayCard.vue';

const story = useStoryStore()
const tags = useTagStore()
const timeline = useTimelineStore()
const events = computed(() => { return [...timeline.events, StoryEvent.value] })

const StoryEvent = computed(() => {
  const event = new Log(story.title, story.raw.substring(0, 80).concat('...'))
  story.tags.forEach((tag) => {
    event.createTag(tag.name, tag.color || 'text', tag.icon || 'mdi-tag') // #FIX HARD CODED VALUES
  })
  return event
})



function handleCtrlClick(tag: Tag) {

  console.log('handleCtrlClick', tag)
  tags.addTag(tag)
}


onMounted(() => {

  const event = new Log(story.title, story.raw.substring(0, 100))

  story.tags.forEach((tag) => {
    event.createTag(tag.name, tag.color || 'text', tag.icon || 'mdi-tag') // #FIX HARD CODED VALUES
  })
})


</script>
