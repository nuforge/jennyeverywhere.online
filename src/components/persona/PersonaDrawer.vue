<script setup lang="ts">
import { watch } from 'vue';
import ExpansionPanel from '@/components/persona/ExpansionPanel.vue';
import Tag from '@/objects/nu/Tag';

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()
import useThemeStore from '@/stores/theme';
const theme = useThemeStore()


import useStateStore from '@/stores/state';
const state = useStateStore()



watch(
  () => persona.focus, // Use optional chaining to avoid errors
  () => { // newFocus  < ---OPEN FOCUS PANEL
  }
);


</script>

<template>
  <v-navigation-drawer :permanent="theme.permanent" v-model="theme.drawer" width="300" :scrim="!state.dragging"
    :rail="theme.rail" flat disable-resize-watcher disable-route-watcher :mobile="true" sticky elevation="0"
    class="bg-transparent scroll-container ">
    <v-card :class="[' mt-16', !theme.rail ? 'pb-2' : 'justify-center']" :flat="theme.rail">

      <v-card-actions class="bg-background">
        <v-icon @click="theme.rail = !theme.rail" :icon="theme.rail ? `mdi-chevron-left` : `mdi-chevron-right`"
          variant="plain"></v-icon>
        <v-spacer />
        <v-icon v-if="!theme.rail" @click=" theme.permanent = !theme.permanent"
          :icon="theme.permanent ? 'mdi-pin' : 'mdi-pin-outline'" variant="plain" />

      </v-card-actions>
      <v-row class="bg-background align-center justify-center  my-2">
        <v-divider class="mb-2" />
        <NuTag :tag="(persona.focus as Tag)" variant="text" @click="persona.focusOn(persona.focus as Tag)"
          :labels="!theme.rail" /><v-divider class="mt-2" />
      </v-row>
      <v-card-text>
        <v-expansion-panels v-model="theme.menuSelection" collapse-icon="mdi-chevron-up" selected-class="bg-primary"
          multiple static flat>

          <ExpansionPanel title="Focus" icon="mdi-image-filter-center-focus" component="SystemTags" value="system"
            panelKey="system" />
          <ExpansionPanel title="Tag Manager" icon="mdi-tag-plus" component="TagManager" value="manager"
            panelKey="manager" />
          <ExpansionPanel title="Global Styles" icon="mdi-palette-swatch" component="GlobalSettings" value="global"
            panelKey="global" />

        </v-expansion-panels>
      </v-card-text>



    </v-card>
  </v-navigation-drawer>
</template>

<style scoped>
.v-expansion-panel-title .v-label {
  cursor: pointer;
}
</style>
