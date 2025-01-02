<template>
  <v-container>
    <v-divider>Theme Colors</v-divider>
    <div class="d-flex justify-space-between">
      <ThemePalette :filter="userColors" name="Primary" />
      <ThemePalette :filter="utilityColors" name="Utility" />
      <ThemePalette :filter="layoutColors" name="Layout" />
    </div>
    <v-divider>Active Trays</v-divider>
    <EvTagCard :tags="persona.themeTags" name="Theme Tags" v-model="personaSelected" />
    <EvTagCard :tags="story.tags" name="Tags" v-model="storySelected" />
    <v-container>
      <v-row>
        <v-col>
          <v-textarea v-model="logObj.body" label="log body" prepend-inner-icon="mdi-pencil" density="compact"
            variant="solo-filled" clearable auto-grow />
        </v-col>
        <v-col>
          <MarkdownRenderer :text="logObj.body" :tags="filteredTags" />
        </v-col>
      </v-row>
    </v-container>
    <v-divider>custom tag</v-divider>
    <custom-tag tag="name" icon="mdi-circle-opacity" color="error">srat</custom-tag>

  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

import EvTagCard from '@/components/tags/EvTagCard.vue';
import ThemePalette from '@/components/ThemePalette.vue';

import { usePersonaStore } from '@/stores/persona';
import { useStoryStore } from '@/stores/story';

import Log from '@/objects/Log';

const persona = usePersonaStore()
const story = useStoryStore()

const logObj = ref(new Log('test', `what's on the surface, one begins to wonder, in error, for this is no jetpack, Jenny Everywhere, let's go with the flamethrower instead?`))

const personaSelected = ref<string[]>([])
const storySelected = ref<string[]>([])

const personaTags = computed(() => {
  return persona.themeTags.filter(tag => personaSelected.value.includes(tag.id))
})

const allSelected = computed(() => {
  return [...personaSelected.value, ...storySelected.value]
})
const allTags = computed(() => {
  return [...personaTags.value, ...story.tags]
})

const filteredTags = computed(() => {
  return allTags.value.filter(tag => allSelected.value.includes(tag.id))
})


const userColors = ref(['primary', 'secondary', 'accent',])
const utilityColors = ref(['error', 'info', 'success', 'warning'])
const layoutColors = ref(['background', 'surface', 'accent'])


</script>
