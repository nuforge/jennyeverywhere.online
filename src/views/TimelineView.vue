<template>
  <v-container>
    <h1>Timelines</h1>
    <v-row>
      <v-col>
        <v-btn-toggle v-model="direction" density="compact" mandatory>
        <v-btn icon="mdi-align-vertical-center" value="horizontal" :variant="direction==='horizontal' ? 'text' : 'plain'"></v-btn>
        <v-btn icon="mdi-align-horizontal-center" value="vertical" :variant="direction==='vertical' ? 'text' : 'plain'"></v-btn>
      </v-btn-toggle>
        <v-timeline :direction="direction" line-thickness="4px" line-inset="10px" truncate-line="both" icon-color="red"
          dot-color="transparent">
          <v-timeline-item icon="mdi-sword">
            <template v-slot:icon>
              <v-avatar :image="PersonaAvatar" rounded="sm"></v-avatar>
            </template>
            <template v-slot:opposite>
              <TagList noLabel />
            </template>
            <div class="text-h6">
              <router-link to="/">You wake up on a Monday.</router-link>
            </div>
                <v-img :src="storyImage" alt="A glowing green portal" aspect-ratio="1" cover max-height="120"
                  rounded="lg" max-width="256"></v-img>
          </v-timeline-item>

          <v-timeline-item icon="mdi-orbit" icon-color="blue">
            <template v-slot:icon>
              <v-btn to="/" density="compact" variant="text"><v-icon ></v-icon></v-btn>
            </template>
            <div>
              <div class="text-h6">
                Career Event</div>
              <p>Discovered a Wormhole</p>
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <template v-slot:opposite>
              Opposite content
            </template>
            <div>
              <div class="text-h6">Content title</div>
              <p>
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TagList from '@/components/TagList.vue';
import storyImage from '@/assets/stories/gallery/001.png'
import PersonaAvatar from '@/assets/images/avatars/jenny-everywhere-avatar-13.png';

const direction = ref('horizontal')


</script>

<style></style>
