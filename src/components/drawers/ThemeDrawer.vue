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
import { computed } from 'vue';
import { useTheme } from 'vuetify';
import useStateStore from '@/stores/state';
import useThemeStore from '@/stores/theme';
import ThemePalette from '@/components/ThemePalette.vue';

const themeInstance = useTheme();
const theme = useThemeStore();
const state = useStateStore()

const filter = ref<string[]>([])
const filtered = computed(() => {
  return theme.themeTags.filter(({ name }) => filter.value.includes(name));
})

const copyToClipboard = async (name: string) => {
  try {
    const textToCopy = themeInstance.themes.value.myCustomTheme.colors[name].toString().replace('#', '');
    await navigator.clipboard.writeText(textToCopy);
  } catch (err) {
    console.error('Failed to copy text:', err);
  }
}

async function pickColor(name: string) {
  if (window.EyeDropper) {
    const eyeDropper = new window.EyeDropper();
    try {
      const result = await eyeDropper.open();
      color.value = result.sRGBHex;
      if (color.value !== null) {
        themeInstance.themes.value.myCustomTheme.colors[name] = color.value;
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

<template>
  <v-navigation-drawer :scrim="false" v-model="state.persona" disable-route-watcher close-delay="200">
    <v-card max-width="300" class="mt-12   ">
      <v-card-title>
        {{ theme.theme.name }} :
        <v-btn icon="mdi-close" @click="state.persona = false" size="small" variant="plain">
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-btn to="/theme" block prepend-icon="mdi-information" color="info" variant="plain">About Themes</v-btn>
      </v-card-text>
      <ThemePalette :filter="theme.themeBase" v-model="filter" />
      <v-card-actions>
        <v-btn text="reset" prepend-icon="mdi-arrow-down" :disabled="filter.length === 0" />
        <v-spacer />
        <v-btn text="apply" prepend-icon="mdi-arrow-up" :disabled="filter.length === 0" />
      </v-card-actions>
      <v-list density="compact">
        <v-list-item v-for="color in filtered" :key="color.name">
          <v-text-field v-model="themeInstance.themes.value.myCustomTheme.colors[color.name]" :label="String(color.name)" dense
            density="compact">
            <template v-slot:prepend-inner>
              <v-icon icon="mdi-circle-opacity" :color="themeInstance.themes.value.myCustomTheme.colors[color.name]"
                @click="copyToClipboard(color.name)"></v-icon>
            </template>
            <template v-slot:append-inner>
              <v-icon icon="mdi-eyedropper" color="text" @click="pickColor(String(color.name))"></v-icon>
            </template>
          </v-text-field>

        </v-list-item>
      </v-list>


    </v-card>
  </v-navigation-drawer>
</template>
