<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Tag from '@/objects/NuTag.ts';

import NuTag from '@/components/nu/NuTag.vue';
import GlobalSettings from '@/components/persona/GlobalSettings.vue';
import TagManager from '@/components/persona/TagManager.vue';
import SystemTags from '@/components/persona/SystemTags.vue';

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()


import useStateStore from '@/stores/state';
const state = useStateStore()

const descending = computed(() => [...persona.attention.tags].reverse())

const expansions = ref([])

watch(
  () => persona.focus, // Use optional chaining to avoid errors
  (newFocus) => { // OPEN FOCUS PANEL
    console.log('watch', newFocus)
  }
);

</script>

<template>
  <v-navigation-drawer :permanent="persona.permanent" class="bg-background " v-model="persona.drawer" width="300"
    :scrim="!state.dragging" :rail="persona.rail">
    <v-card class="bg-transparent">
      <v-card-actions class="bg-background">
        <v-icon @click=" persona.drawer = !persona.drawer">mdi-close</v-icon>
        <v-icon @click=" persona.rail = !persona.rail"
          :icon="persona.rail ? `mdi-chevron-left` : `mdi-chevron-right`"></v-icon>
        <v-icon @click=" persona.permanent = !persona.permanent"
          :icon="persona.permanent ? 'mdi-pin' : 'mdi-pin-outline'"></v-icon>
        <v-spacer />
        <v-chip-group density="compact" class="bg-background ga-0">
          <NuTag v-for="tag in (descending.slice(0, 3).reverse() as Tag[])" :key="tag.id" :tag="(tag)" variant="plain"
            :labels="false" size="small" />
        </v-chip-group>

        <NuTag :tag="new Tag('label:history', 'text', 'mdi-history')" variant="plain"
          @click="persona.focusOn(persona.focus as Tag)" :labels="false" />

      </v-card-actions>
      <v-card-text>
        <v-expansion-panels v-model="expansions" collapse-icon="mdi-chevron-up" selected-class="bg-primary" multiple
          static flat>

          <!-- Focus -->
          <v-expansion-panel>
            <v-expansion-panel-title expand-icon="mdi-image-filter-center-focus" class="bg-background">


              <NuTag :tag="(persona.focus as Tag)" variant="text" @click="persona.focusOn(persona.focus as Tag)" />


            </v-expansion-panel-title>

            <!-- System Tags -->
            <v-expansion-panel-text class="bg-background align-start">


              <SystemTags />


            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- TagManager -->
          <v-expansion-panel :title="'Tag Manager'" expand-icon="mdi-tag-plus" class="bg-background">
            <v-expansion-panel-text class="bg-background">


              <TagManager />


            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- FORM END -->
          <v-expansion-panel :title="'Global Styles'" expand-icon="mdi-palette-swatch" class="bg-background">
            <v-expansion-panel-text class="bg-background  text-center ma-0 ">


              <GlobalSettings />


            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- History -->
          <v-expansion-panel :title="'History'" expand-icon="mdi-history" class="bg-background">
            <v-expansion-panel-text>
              <v-list lines="one" density="compact">
                <v-list-item v-for="tag in (descending as Tag[])" :key="tag.id">


                  <NuTag :tag="tag" elevation="2" />


                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>


        </v-expansion-panels>

      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>
