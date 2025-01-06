<script setup lang="ts">
import { ref } from 'vue'

import TagCardStyles from '@/components/tags/TagCardStyles.vue';
import useStyleStore from '@/stores/styles'
import usePersonaStore from '@/stores/persona'

const styles = useStyleStore()
const persona = usePersonaStore()

const colorStyle = ref('primary') // placeholder variable

</script>

<template>
  <v-sheet flat class="bg-transparent">
    <v-label>Global Setting</v-label>
    <v-btn class="rounded" @click="styles.global = !styles.global"
      :icon="styles.global ? 'mdi-earth-box' : 'mdi-earth-box-off'" :variant="styles.global ? 'text' : 'plain'"
      size="small" :color="styles.global ? 'primary' : 'disabled'" />
    <v-divider>
      <v-label>Variants</v-label>
    </v-divider>
    <v-btn-toggle density="comfortable" v-model="styles.variants" color="primary">
      <v-tooltip bottom v-for="variant in styles.chipVariants" :key="variant">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-button-pointer" :value="variant" v-bind="props" :variant="variant" />
        </template>
        {{ variant }}
      </v-tooltip>
    </v-btn-toggle>
    <v-divider>
      <v-label>Tag & Trays</v-label>
    </v-divider>
    <v-btn-toggle density="comfortable">
      <TagCardStyles :tray="styles.trays" :labels="styles.labels" :icons="styles.icons" :colors="styles.colors"
        :logs="styles.logs" @update:labels="(value: boolean) => { styles.labels = value }"
        @update:icons="(value: boolean) => { styles.icons = value }"
        @update:colors="(value: boolean) => { styles.colors = value }"
        @update:logs="(value: boolean) => { styles.logs = value }"
        @update:tray="(value: boolean) => { styles.trays = value }" />
    </v-btn-toggle>

    <v-divider>
      <v-label>Palettes</v-label>
    </v-divider>

    <v-btn-toggle density="comfortable" v-model="colorStyle" color="primary">
      <v-tooltip bottom v-for="color in persona.themeTags" :key="color.name">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-circle-opacity" :value="color.color" v-bind="props" :color="color.color" size="small">
            <v-icon :color="color.color"></v-icon>
          </v-btn>
        </template>
        {{ color.name }}
      </v-tooltip>s
    </v-btn-toggle>

    <v-item-group class="d-flex justify-space-between" style="cursor:copy">
      <v-item v-for="color in persona.themeTags" :key="color.name">
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props }">
            <v-icon :color="color.color" v-bind="props" icon="mdi-circle-opacity"
              @click="persona.copyToClipboard(color.color || '')" />
          </template>
          {{ color.name }} : {{ color.color ? persona.myTheme.colors[color.color] : 'undefined' }}
        </v-tooltip>
      </v-item>
    </v-item-group>
  </v-sheet>
</template>
