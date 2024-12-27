<template>
  <v-btn-toggle v-model="timelineDirection" density="comfortable" mandatory>
    <v-btn icon="mdi-align-vertical-center" value="horizontal"
      :variant="timelineDirection === 'horizontal' ? 'text' : 'plain'" size="small"></v-btn>
    <v-btn icon="mdi-align-horizontal-center" value="vertical"
      :variant="timelineDirection === 'vertical' ? 'text' : 'plain'" size="small"></v-btn>
  </v-btn-toggle> {{ timelineDirection }}
  <v-timeline :direction="timelineDirection" line-inset="8" truncate-line="both">
    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar :image="PersonaAvatar" rounded="sm"></v-avatar>
      </template>
      Persona Creation
    </v-timeline-item>
    <v-timeline-item v-for="event in events" :key="event.title" :date="event.formattedDate"
      :icon-color="event.tag.color" dot-color="background" fill-dot>
      <template v-slot:icon>
        <v-icon :icon="event.tag.icon" :color="event.tag.color">
        </v-icon>
        <v-tooltip activator="parent" location="top" content-class="bg-surface" elevated>
          <v-icon :icon="event.tag.icon" :color="event.tag.color"></v-icon> {{ event.title }}
        </v-tooltip>
      </template>
      <template v-slot:opposite>
        <tag-group :tags="event.tagList()" noLabel @ctrl-click="handleCtrlClick" v-model="tags.selection"></tag-group>
      </template>
      <MarkdownRenderer :markdown="linkItBaby(event.tagList(), event.description)" />
    </v-timeline-item>
    <v-timeline-item dot-color="background" fill-dot icon="$event">
      <template v-slot:opposite>
        <tag-group :tags="tags.tags" noLabel v-model="tags.selection" @ctrl-click="handleCtrlClick" />
      </template>
      <router-link to="/">
        <v-img :src="storyImage" alt="A glowing green portal" cover max-height="120" rounded="lg"
          max-width="256"></v-img>
        You wake up on a Monday...</router-link>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type Tag from '@/objects/Tag';
import PersonaAvatar from '@/assets/images/avatars/jenny-everywhere-avatar-13.png';
import storyImage from '@/assets/stories/gallery/001.png'
import TagGroup from '@/components/tags/TagGroup.vue';
import { useTagStore } from '@/stores/tags'
import { useStoryStore } from '@/stores/story'
import { useTimelineStore } from '@/stores/timelines'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
const tags = useTagStore()
const story = useStoryStore()
const events = useTimelineStore().events

type TimelineDirection = 'horizontal' | 'vertical';
const timelineDirection = ref<TimelineDirection>('horizontal');


function linkItBaby(tagList: Tag[], text: string) {

  const selected = tagList.filter(tag => tags.selection.includes(tag.id))
  const md = story.linkTags(selected, text)
  return story.markitdown(md)
}


function handleCtrlClick(tag: Tag) {

  console.log('handleCtrlClick', tag)
  tags.copyTag(tag)
}



</script>
