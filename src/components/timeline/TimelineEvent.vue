<template>
  <v-timeline-item dot-color="background" fill-dot icon="$event">
    <template v-slot:opposite>
      <tag-group :tags="tags.tags" noLabel />
    </template>
    <router-link to="/">
      <v-img :src="storyImage" alt="A glowing green portal" cover max-height="120" rounded="lg" max-width="256"></v-img>
      You wake up on a Monday...</router-link>
  </v-timeline-item>
</template>

<script setup lang="ts">
import TagGroup from '@/components/tags/TagGroup.vue';
import { useTagStore } from '@/stores/tags'
const tags = useTagStore()
import storyImage from '@/assets/stories/gallery/001.png'

</script>
