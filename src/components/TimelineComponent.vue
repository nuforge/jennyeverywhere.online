<template>

  <v-btn-toggle v-model="timelineDirection" density="compact" mandatory>
    <v-btn icon="mdi-align-vertical-center" value="horizontal"
      :variant="timelineDirection === 'horizontal' ? 'text' : 'plain'"></v-btn>
    <v-btn icon="mdi-align-horizontal-center" value="vertical"
      :variant="timelineDirection === 'vertical' ? 'text' : 'plain'"></v-btn>
  </v-btn-toggle> {{ timelineDirection }}
  <v-timeline :direction="timelineDirection" line-inset="5" truncate-line="both">
    <v-timeline-item>
      <template v-slot:opposite>
        <TagList noLabel />
      </template>
      <template v-slot:icon>
        <v-avatar :image="PersonaAvatar" rounded="sm"></v-avatar>
      </template><router-link to="/">
        <v-img :src="storyImage" alt="A glowing green portal" cover max-height="120" rounded="lg"
          max-width="256"></v-img>
        You wake up on a Monday...</router-link>
    </v-timeline-item>
    <v-timeline-item v-for="event in events" :key="event.title" :date="event.formattedDate" dot-color="surface"
      fill-dot>
      <template v-slot:icon>
        <v-icon :icon="event.icon" :color="event.color">
        </v-icon>
        <v-tooltip activator="parent" location="bottom" content-class="bg-surface" elevated>
          <v-icon :icon="event.icon" :color="event.color"></v-icon> {{ event.title }}
        </v-tooltip>
      </template>
      <template v-slot:opposite>
        <v-tag icon="mdi-calendar-clock" :label="event.formattedDate" @click.stop="console.log('clicked')"
          disabled></v-tag>
      </template>
      <div>
        <v-tag v-for="(tag, index) in event.tags" :key="index" :label="tag.name" :value="tag.name" :icon="tag.icon"
          :color="tag.color"></v-tag>
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

type TimelineDirection = 'horizontal' | 'vertical';
const timelineDirection = ref<TimelineDirection>('vertical');

interface Event {
  title: string;
  formattedDate: string;
  icon: string;
  color: string;
  tags: { name: string; icon: string; color: string }[];
  description: string; // Add this line
}

defineProps<{
  events: Event[]
}>()

</script>
