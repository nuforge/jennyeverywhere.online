<template>
  <v-navigation-drawer :scrim="false" v-model="state.persona" disable-route-watcher close-delay="200">
    <v-card max-width="300" class="mt-16">
      <v-card-title>
        {{ persona.theme.name }}
        <v-btn icon="mdi-close" @click="state.persona = false" size="small" variant="plain">
        </v-btn>
      </v-card-title>
      <v-list density="compact">
        <v-list-item v-for="(color, name) in theme.themes.value.myCustomTheme.colors" :key="name">
          <v-text-field v-model="theme.themes.value.myCustomTheme.colors[name]" :label="String(name)" dense
            density="compact">
            <template v-slot:prepend-inner>
              <v-icon icon="mdi-circle-opacity" :color="theme.themes.value.myCustomTheme.colors[name]"></v-icon>
            </template>
            <template v-slot:append-inner>
              <v-icon icon="mdi-eyedropper" color="text" @click="pickColor(String(name))"></v-icon>
            </template>
          </v-text-field>

        </v-list-item>
      </v-list>


    </v-card>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

declare global {
  interface Window {
    EyeDropper?: {
      new(): {
        open: () => Promise<{ sRGBHex: string }>;
      };
    };
  }
}

const color = ref<string | null>(null);

import { useTheme } from 'vuetify';
import { useStateStore } from '@/stores/state';
import { usePersonaStore } from '@/stores/persona';

const theme = useTheme();
const persona = usePersonaStore()
const state = useStateStore()



async function pickColor(name: string) {
  if (window.EyeDropper) {
    const eyeDropper = new window.EyeDropper();
    try {
      const result = await eyeDropper.open();
      color.value = result.sRGBHex;
      if (color.value !== null) {
        theme.themes.value.myCustomTheme.colors[name] = color.value;
      }
      console.log('EyeDropper', color.value);
    } catch (error) {
      console.error('EyeDropper canceled or failed', error);
    }
  } else {
    console.error('EyeDropper API is not supported in this browser.');
  }
}

</script>
