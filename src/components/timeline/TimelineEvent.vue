<template>
  <v-timeline-item dot-color="background" fill-dot icon="$event">
    <template v-slot:opposite>
      INSERT TAG GROUP HERE
    </template>
    <router-link to="/">
      <v-img :src="storyImage" alt="A glowing green portal" cover max-height="120" rounded="lg" max-width="256"></v-img>
      You wake up on a Monday...</router-link>
  </v-timeline-item>
</template>

<script setup lang="ts">
import storyImage from '@/assets/stories/gallery/001.png'

</script>
