<script setup lang="ts">
import { computed, ref, watch, defineComponent, defineAsyncComponent } from 'vue';
import Tag from '@/objects/nu/NuTag';

import NuTag from '@/components/nu/NuTag.vue';
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

const ExpansionPanel = defineComponent({
  props: {
    title: String,
    icon: String,
    component: String
  },
  components: {
    SystemTags: defineAsyncComponent(() => import('@/components/persona/SystemTags.vue')),
    TagManager: defineAsyncComponent(() => import('@/components/persona/TagManager.vue')),
    GlobalSettings: defineAsyncComponent(() => import('@/components/persona/GlobalSettings.vue'))
  },
  template: `
    <v-expansion-panel>
    </v-expand-transition>
      <v-expansion-panel-title :expand-icon="icon">
        <v-label >{{ title }}</v-label>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="bg-background">
        <component :is="component" />
      </v-expansion-panel-text>
    </v-expand-transition>
    </v-expansion-panel>
  `
});

const TagListItem = defineComponent({
  props: {
    tag: Object
  },
  components: {
    NuTag
  },
  template: `
    <v-list-item :key="tag.id">
      <NuTag :tag="tag" elevation="2" />
    </v-list-item>
  `
});
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

          <ExpansionPanel title="Focus" icon="mdi-image-filter-center-focus" component="SystemTags" />
          <ExpansionPanel title="Tag Manager" icon="mdi-tag-plus" component="TagManager" />
          <ExpansionPanel title="Global Styles" icon="mdi-palette-swatch" component="GlobalSettings" />

          <v-expansion-panel>
            <v-expansion-panel-title expand-icon="mdi-history">
              <v-label v-if="!persona.rail">History</v-label>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="bg-background">
              <v-list lines="one" density="compact">
                <TagListItem v-for="tag in (descending as Tag[])" :key="tag.id" :tag="tag" />
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
