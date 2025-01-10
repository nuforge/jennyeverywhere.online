<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Tag from '@/objects/nu/NuTag';

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
  () => { // newFocus  < ---OPEN FOCUS PANEL
  }
);

</script>

<template>
  <v-navigation-drawer :permanent="persona.permanent" v-model="persona.drawer" width="300" :scrim="!state.dragging"
    :rail="persona.rail" flat disable-resize-watcher :mobile="true" sticky elevation="0" class="bg-transparent">
    <v-card :class="[' mt-16', !persona.rail ? 'pb-2' : 'justify-center']" :flat="persona.rail">
      <v-row class="bg-background align-center justify-center  my-2">
        <v-divider class="mb-2" />
        <NuTag :tag="(persona.focus as Tag)" variant="text" @click="persona.focusOn(persona.focus as Tag)"
          :labels="!persona.rail" /><v-divider class="mt-2" />
      </v-row>
      <v-card-text>
        <v-expansion-panels v-model="expansions" collapse-icon="mdi-chevron-up" selected-class="bg-primary" multiple
          static flat>

          <!-- Focus -->
          <v-expansion-panel>

            <v-expansion-panel-title expand-icon="mdi-image-filter-center-focus" class="">
              <v-label v-if="!persona.rail">Focus</v-label>
            </v-expansion-panel-title>

            <!-- System Tags -->
            <v-expansion-panel-text class="align-start bg-background">


              <SystemTags />


            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- TagManager -->
          <v-expansion-panel>


            <v-expansion-panel-title expand-icon="mdi-tag-plus" class="">
              <v-label v-if="!persona.rail">Tag Manager</v-label>
            </v-expansion-panel-title>
            <v-expansion-panel-text class=" bg-background">

              <TagManager />


            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- FORM END -->
          <v-expansion-panel>

            <v-expansion-panel-title expand-icon="mdi-palette-swatch" class="">
              <v-label v-if="!persona.rail">Global Styles</v-label>
            </v-expansion-panel-title>
            <v-expansion-panel-text class=" text-center ma-0  bg-background">


              <GlobalSettings />


            </v-expansion-panel-text>
          </v-expansion-panel>

          <!-- History -->
          <v-expansion-panel>
            <v-expansion-panel-title expand-icon="mdi-history" class="">
              <v-label v-if="!persona.rail">History</v-label>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="bg-background">
              <v-list lines="one" density="compact">
                <v-list-item v-for="tag in (descending as Tag[])" :key="tag.id">


                  <NuTag :tag="tag" elevation="2" />


                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>

        </v-expansion-panels>

      </v-card-text>
      <v-card-actions class="bg-background">
        <v-icon @click="persona.rail = !persona.rail" :icon="persona.rail ? `mdi-chevron-left` : `mdi-chevron-right`"
          variant="plain"></v-icon>
        <v-spacer />
        <v-icon v-if="!persona.rail" @click=" persona.permanent = !persona.permanent"
          :icon="persona.permanent ? 'mdi-pin' : 'mdi-pin-outline'" variant="plain" />
        <v-chip-group density="compact" class="ga-0">
          <NuTag v-for="tag in (descending.slice(0, 3).reverse() as Tag[])" :key="tag.id" :tag="(tag)" :labels="false"
            size="small" />
        </v-chip-group>


      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>


<style scoped>
.v-expansion-panel-title .v-label {
  cursor: pointer;
}
</style>
