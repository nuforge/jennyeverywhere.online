<template>

  <v-btn-toggle v-model="timelineDirection" density="comfortable" mandatory>
    <v-btn icon="mdi-align-vertical-center" value="horizontal"
      :variant="timelineDirection === 'horizontal' ? 'text' : 'plain'" size="small"></v-btn>
    <v-btn icon="mdi-align-horizontal-center" value="vertical"
      :variant="timelineDirection === 'vertical' ? 'text' : 'plain'" size="small"></v-btn>
  </v-btn-toggle> {{ timelineDirection }}
  <v-timeline :direction="timelineDirection" line-inset="5" truncate-line="both">
    <v-timeline-item>
      <template v-slot:opposite>
        <TagList noLabel />
      </template>
      <template v-slot:icon>
        <v-avatar :image="PersonaAvatar" rounded="sm"></v-avatar>
      </template>
      Persona Creation
    </v-timeline-item>
    <v-timeline-item dot-color="background" fill-dot icon="$event">
      <router-link to="/">
        <v-img :src="storyImage" alt="A glowing green portal" cover max-height="120" rounded="lg"
          max-width="256"></v-img>
        You wake up on a Monday...</router-link>
    </v-timeline-item>
    <v-timeline-item v-for="event in events" :key="event.title" :date="event.formattedDate" icon-color="background"
      :dot-color="event.color" fill-dot>
      <template v-slot:icon>
        <v-icon :icon="event.icon" color="background">
        </v-icon>
        <v-tooltip activator="parent" location="top" content-class="bg-surface" elevated>
          <v-icon :icon="event.icon" :color="event.color"></v-icon> {{ event.title }}
        </v-tooltip>
      </template>
      <template v-slot:opposite>
        <tag-group :tags="event.tags" noLabel></tag-group>
      </template>
      <div>
        <p class="pa-3 bg-surface rounded">{{ event.description }}</p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PersonaAvatar from '@/assets/images/avatars/jenny-everywhere-avatar-13.png';
import storyImage from '@/assets/stories/gallery/001.png'
import TagList from '@/components/TagList.vue';
import TagGroup from '@/components/TagGroup.vue';
import Event from '@/objects/Event';

type TimelineDirection = 'horizontal' | 'vertical';
const timelineDirection = ref<TimelineDirection>('vertical');


defineProps<{
  events: Event[]
}>()

</script>
