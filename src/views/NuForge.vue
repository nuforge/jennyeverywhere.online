<template>


  <v-divider>Theme Colors</v-divider>
  <ThemePalette :filter="userColors" />
  <ThemePalette :filter="utilityColors" />
  <ThemePalette :filter="layoutColors" />
  <v-divider>Playground</v-divider>
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

const userColors = ref(['primary', 'secondary', 'accent',])
const utilityColors = ref(['error', 'info', 'success', 'warning'])
const layoutColors = ref(['background', 'surface', 'accent'])
const body = ref('')

</script>
