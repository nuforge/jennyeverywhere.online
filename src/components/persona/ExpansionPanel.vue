<script setup lang="ts">
import { defineProps, defineAsyncComponent } from 'vue';

defineProps({
  title: String,
  icon: String,
  component: {
    type: String,
    default: ''
  },
  panelKey: String,
  template: String,
});

const components = {
  SystemTags: defineAsyncComponent(() => import('@/components/persona/SystemTags.vue')),
  TagManager: defineAsyncComponent(() => import('@/components/persona/TagManager.vue')),
  GlobalSettings: defineAsyncComponent(() => import('@/components/persona/GlobalSettings.vue')),
} as Record<string, ReturnType<typeof defineAsyncComponent>>;

const getComponent = (name: string) => components[name] || null;
</script>

<template>
  <v-expansion-panel :key="panelKey">
    <v-expand-transition group>
      <v-expansion-panel-title :expand-icon="icon" :key="panelKey + '-title'">
        <v-label>{{ title }}</v-label>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="bg-background" :key="panelKey + '-text'">
        <component :is="getComponent(component)" />
      </v-expansion-panel-text>
    </v-expand-transition>
  </v-expansion-panel>
</template>
