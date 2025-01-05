<template>
  <v-container>
    <h1>Persona theme</h1>
    <v-chip-group column v-model="selectionLink" multiple @update:model-value="onChipGroupSelection($event)">

      <NuTag v-for="tag in filtered" :key="tag.name" :tag="(tag as Tag)" :value="tag.name" />
    </v-chip-group>
    <v-item-group selected-class="bg-primary" v-model="selectionLink"
      @update:model-value="onItemGroupSelection($event)">
      <v-row>
        <v-col cols="12" sm="6" v-for="(section, index) in convolutedVariableDeclaration" :key="index">

          <v-list lines="three" class="bg-surface rounded-lg" shaped>

            <v-item v-slot="{ isSelected, selectedClass, toggle }" v-for="(color, id) in section" :key="id" :value="id">


              <v-list-item :value="id" :title="id" :subtitle="color['description']"
                :prepend-icon="color['icon'] ?? 'mdi-circle-opacity'" :isSelected="isSelected"
                :selectedClass="selectedClass" @click="toggle">

                <template #prepend>
                  <div class="d-flex flex-column justify-center align-center me-4">
                    <v-icon :color="id"></v-icon><v-label>
                      {{ theme.themes.value.myCustomTheme.colors[id] }}</v-label>
                  </div>
                </template>
              </v-list-item>

            </v-item>

          </v-list>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>


<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
import NuTag from '@/components/nu/NuTag.vue';
import Tag from '@/objects/Tag';

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()



const selectionLink = ref([''])

const filtered = computed(() => {
  if (!selectionLink.value.length) {
    return [];
  }
  return persona.themeTags.filter(tag => {
    return selectionLink.value.includes(tag.name);
  });
})

const onChipGroupSelection = (event: string[],) => {
  selectionLink.value = event || []
}

const onItemGroupSelection = (event: string[]) => {
  selectionLink.value = event || []
}

watch(() => selectionLink.value, (newVal) => {
  console.log('selectionLink.newVal:', newVal)
  console.log('selectionLink.persona.themeLegend:', persona.themeLegend)
  console.log('selectionLink.persona.themeLegend[primary]:', persona.themeLegend['primary'])
  if (!newVal.length) {
    return;
  }
  persona.focusOn(persona.themeLegend.getTag('primary'))

  console.log('selectionLink:', newVal)
});


const customColors = {
  primary: { description: 'common and pleasing. subtle but constant reminders an attention. easy to scan', icon: 'mdi-palette' },
  secondary: { description: 'important. changes the most often to match personal intentions', icon: 'mdi-palette' },
  accent: { description: 'bits of information or data. scanned for or hidden in the shaddows. not distracting if lots are cluttering the view', icon: 'mdi-palette' },
}

const feedbackColors = {
  success: { description: 'Positive feedback for an action or request', icon: 'mdi-check' },
  info: { description: 'notes or citation; misc data available', icon: 'mdi-information-slab-symbol' },
  warning: { description: 'something important to notice which could impact experience', icon: 'mdi-exclamation' },
  error: { description: 'an error has occured and repossibly requires action', icon: 'mdi-alert-circle' }
}

const backgroundColors = {
  background: { description: '[ light | dark ] themes depending on intensity of attention', icon: 'mdi-palette' },
  surface: { description: 'the surface color on which most content (text, images, icons) will appear (...or not appear...)', icon: 'mdi-palette' }
}
const convolutedVariableDeclaration = [customColors, feedbackColors, backgroundColors]



</script>
