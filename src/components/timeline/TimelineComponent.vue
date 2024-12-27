<template>
  <v-row no-gutters>
    <v-btn @click="state.event = !state.event" prepend-icon="mdi-calendar-edit" block class="my-2" variant="plain">Add
      Event</v-btn>
    <v-col cols="12" class="d-flex justify-space-between align-center">
      <v-spacer></v-spacer>{{ timelineDirection }}
      <v-btn-toggle v-model="timelineDirection" density="comfortable" mandatory>

        <v-btn icon="mdi-align-vertical-center" value="horizontal" variant="plain" size="small"></v-btn>
        <v-btn icon="mdi-align-horizontal-center" value="vertical" variant="plain" size="small"></v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
  <v-timeline :direction="timelineDirection" line-inset="8" truncate-line="both">

    <v-timeline-item v-for="event in events" :key="event.title" :date="event.formattedDate" :icon-color="event.color"
      dot-color="background" fill-dot>
      <template v-slot:icon>
        <v-icon :icon="event.icon" :color="event.color">
        </v-icon>
        <v-tooltip activator="parent" location="top" content-class="bg-surface" elevated>
          <v-icon :icon="event.icon" :color="event.color"></v-icon> {{ event.title }}
        </v-tooltip>
      </template>
      <template v-slot:opposite>
        <tag-group :tags="event.tagList()" noLabel @ctrl-click="handleCtrlClick" v-model="tags.selection"></tag-group>
      </template>
      <h2>{{ event.title }}</h2>
      <MarkdownRenderer :markdown="linkItBaby(event.tagList(), event.description)" />
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type Tag from '@/objects/Tag';
import TagGroup from '@/components/tags/TagGroup.vue';
import { useTagStore } from '@/stores/tags'
import { useStateStore } from '@/stores/state'
import { useStoryStore } from '@/stores/story'
import { useTimelineStore } from '@/stores/timelines'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

const state = useStateStore()
const tags = useTagStore()
const story = useStoryStore()
const events = useTimelineStore().events.reverse()

type TimelineDirection = 'horizontal' | 'vertical';
const timelineDirection = ref<TimelineDirection>('vertical');


function linkItBaby(tagList: Tag[], text: string) {

  const selected = tagList.filter(tag => tags.selection.includes(tag.id))
  const md = story.linkTags(selected, text)
  return story.markitdown(md)
}

function handleCtrlClick(tag: Tag) {

  console.log('handleCtrlClick', tag)
  tags.addTag(tag)
}



</script>
