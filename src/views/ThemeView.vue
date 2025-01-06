<script setup lang="ts">
import Tag from '@/objects/NuTag.ts';
import NuTag from '@/components/nu/NuTag.vue';

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()

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
const convolutedVariableDeclaration = { custom: customColors, feedback: feedbackColors, background: backgroundColors }

</script>

<template>
  <v-container>
    <h1>Persona Theme</h1>
    <v-item-group>
      <v-row>
        <v-col cols="12" sm="6" v-for="(section, index) in convolutedVariableDeclaration" :key="index">

          <v-label class="text-capitalize">{{ index }} Colors</v-label>

          <v-list lines="three" class="bg-background rounded-lg" shaped>

            <v-item v-slot="{ isSelected, selectedClass, toggle }" v-for="(color, id) in section" :key="id" :value="id">


              <v-list-item :value="id" :title="id" :subtitle="color['description']"
                :prepend-icon="color['icon'] ?? 'mdi-circle-opacity'" :isSelected="isSelected"
                :selectedClass="selectedClass" @click="toggle">

                <template #prepend>
                  <div class="d-flex flex-column justify-center align-center me-4">
                    <v-icon :color="id"></v-icon>
                  </div>
                </template>

                <template #append>
                  <NuTag :tag="new Tag(`${id}:${persona.myTheme.colors[id]}`, id, 'mdi-circle-opacity')" :value="2" />
                </template>
              </v-list-item>
            </v-item>

          </v-list>




        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>
