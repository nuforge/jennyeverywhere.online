<template>

  <v-divider>Theme Colors</v-divider>
  <div class="d-flex justify-space-between">
    <ThemePalette :filter="userColors" name="Primary" />
    <ThemePalette :filter="utilityColors" name="Utility" />
    <ThemePalette :filter="layoutColors" name="Layout" />
  </div>
  <v-divider>Active Trays</v-divider>
  <EvTagCard :tags="persona.themeTags" name="Theme Tags" v-model="personaSelected" />
  <v-container>
    <v-row>
      <v-col>
        <v-textarea v-model="logObj.body" label="log body" prepend-inner-icon="mdi-pencil" density="compact"
          variant="solo-filled" clearable auto-grow />
      </v-col>
      <v-col>
        <MarkdownRenderer :text="logObj.body" :tags="allTags" />
      </v-col>
    </v-row>
  </v-container>
  <v-divider>custom tag</v-divider>
  what is the <custom-tag tag="name" icon="mdi-circle-opacity" color="error">srat</custom-tag>ta

  <v-divider></v-divider>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

import EvTagCard from '@/components/tags/EvTagCard.vue';
import ThemePalette from '@/components/ThemePalette.vue';

import { usePersonaStore } from '@/stores/persona';

import Log from '@/objects/Log';

const persona = usePersonaStore()

const logObj = ref(new Log('test', `what's on the surface, one begins to wonder, in error, for this is no jetpack`))

const personaSelected = ref<string[]>([])

const personaTags = computed(() => {
  return persona.themeTags.filter(tag => personaSelected.value.includes(tag.name))
})

const allTags = computed(() => {
  return [...personaTags.value]
})


const userColors = ref(['primary', 'secondary', 'accent',])
const utilityColors = ref(['error', 'info', 'success', 'warning'])
const layoutColors = ref(['background', 'surface', 'accent'])


</script>
