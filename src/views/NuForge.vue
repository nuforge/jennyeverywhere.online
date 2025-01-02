<template>
  <h2>Story Tags</h2>
  <ThemePalette />
  <EvTagCard :tags="story" name="Story Tags" />
  <v-container>
    <v-row>
      <v-col>
        <v-textarea v-model="body" label="log body" prepend-inner-icon="mdi-pencil" density="compact"
          variant="solo-filled" clearable auto-grow />
      </v-col>
      <v-col>
        <MarkdownRenderer :text="body" :tags="story" />
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStoryStore } from '@/stores/story';
import type Tag from '@/objects/Tag';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

import EvTagCard from '@/components/tags/EvTagCard.vue';
import ThemePalette from '@/components/ThemePalette.vue';


// Temp add Story Tags
const story = useStoryStore().tags as Tag[]
// END TEMP

const body = ref('')

</script>
