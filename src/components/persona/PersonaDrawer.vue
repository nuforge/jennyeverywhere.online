<script setup lang="ts">
import { watch } from 'vue';
import ExpansionPanel from '@/components/persona/ExpansionPanel.vue';
import Tag from '@/objects/nu/Tag';

import NuTag from '@/components/nu/NuTag.vue';
import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()

import { useMemoryStore } from '@/stores/memory';
const memory = useMemoryStore()

import useStateStore from '@/stores/state';
const state = useStateStore()



watch(
  () => persona.focus, // Use optional chaining to avoid errors
  () => { // newFocus  < ---OPEN FOCUS PANEL
  }
);


</script>

<template>
  <v-navigation-drawer :permanent="persona.permanent" v-model="persona.drawer" width="300" :scrim="!state.dragging"
    :rail="persona.rail" flat disable-resize-watcher disable-route-watcher :mobile="true" sticky elevation="0"
    class="bg-transparent scroll-container ">
    <v-card :class="[' mt-16', !persona.rail ? 'pb-2' : 'justify-center']" :flat="persona.rail">
      <v-row class="bg-background align-center justify-center  my-2">
        <v-divider class="mb-2" />
        <NuTag :tag="(persona.focus as Tag)" variant="text" @click="persona.focusOn(persona.focus as Tag)"
          :labels="!persona.rail" /><v-divider class="mt-2" />
      </v-row>
      <v-card-text>
        <v-expansion-panels v-model="persona.menuSelection" collapse-icon="mdi-chevron-up" selected-class="bg-primary"
          multiple static flat>

          <ExpansionPanel title="Focus" icon="mdi-image-filter-center-focus" component="SystemTags" value="system"
            panelKey="system" />
          <ExpansionPanel title="Tag Manager" icon="mdi-tag-plus" component="TagManager" value="manager"
            panelKey="manager" />
          <ExpansionPanel title="Global Styles" icon="mdi-palette-swatch" component="GlobalSettings" value="global"
            panelKey="global" />

          <v-expansion-panel value="history" :key="'history'">
            <v-expansion-panel-title expand-icon="mdi-history">
              <v-label v-if="!persona.rail">History</v-label>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="bg-background">


              <v-list lines="one" density="compact">
                <NuTag v-for="tag in memory.getMemories(10, 'score')" :key="tag.id" :tag="tag" elevation="2"
                  :labels="false" @click="persona.focusOn(tag)" variant="plain" />
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

      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<style scoped>
.v-expansion-panel-title .v-label {
  cursor: pointer;
}
</style>
