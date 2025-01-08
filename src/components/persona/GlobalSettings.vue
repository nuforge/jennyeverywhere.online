<script setup lang="ts">
import TagCardStyles from '@/components/tags/TagCardStyles.vue';
import useStyleStore from '@/stores/styles'
import usePersonaStore from '@/stores/persona'

const styles = useStyleStore()
const persona = usePersonaStore()

import Inator from '@/objects/Inator'
const inator = new Inator()

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
        :values="styles.values" :logs="styles.logs" @update:labels="(value: boolean) => { styles.labels = value }"
        @update:icons="(value: boolean) => { styles.icons = value }"
        @update:colors="(value: boolean) => { styles.colors = value }"
        @update:logs="(value: boolean) => { styles.logs = value }"
        @update:tray="(value: boolean) => { styles.trays = value }"
        @update:values="(value: boolean) => { styles.values = value }" />
    </v-btn-toggle>

    <v-divider>
      <v-label>Palettes</v-label>
    </v-divider>


    <v-item-group class="d-flex justify-space-between" style="cursor:copy">
      <v-item v-for="color in persona.themeTags" :key="color.name">
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props }">
            <v-icon :color="styles.filterColors.includes(color.color) ? 'disabled' : color.color" v-bind="props"
              icon="mdi-circle-opacity" @click="persona.pickColor(color.color)"
              :disabled="styles.filterColors.includes(color.color)" />
          </template>
          {{ color.name }} : {{ color.color ? persona.myTheme.colors[color.color] : 'undefined' }}
        </v-tooltip>

      </v-item>
    </v-item-group>
    <v-divider>
      <v-label>Theme Colors</v-label>
    </v-divider>
    <v-btn-toggle density="comfortable" v-model="styles.filterThemeColors" multiple divided
      class="overflow-visible rounded-lg ">
      <v-tooltip bottom v-for="color in persona.themeTags" :key="color.name">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-circle-opacity" :value="color.color" v-bind="props" size="small">
            <v-icon :color="styles.filterColors.includes(color.color) ? 'disabled' : color.color"></v-icon>
            <v-fab-transition>
              <v-badge :color="color.color" :floating="styles.filterColors.includes(color.color)" dot
                v-if="styles.filterColors.includes(color.color)" />
            </v-fab-transition>
          </v-btn>
        </template>
        {{ color.name }}
      </v-tooltip>
    </v-btn-toggle>

    <v-divider>
      <v-label>Base Colors</v-label>
    </v-divider>


    <v-btn-toggle density="comfortable" v-model="styles.filterBaseColors" multiple column
      class="overflow-visible rounded-lg d-flex flex-wrap justify-center ga-1">
      <v-tooltip bottom v-for="color in inator.colorTags()" :key="color.name">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-circle-opacity" :value="color.color" v-bind="props" size="small">
            <v-icon :color="styles.filterColors.includes(color.color) ? 'disabled' : color.color"></v-icon>
            <v-fab-transition>
              <v-badge :color="color.color" :floating="styles.filterColors.includes(color.color)" dot
                v-if="styles.filterColors.includes(color.color)" />
            </v-fab-transition>
          </v-btn>
        </template>
        {{ color.name }}
      </v-tooltip>
    </v-btn-toggle>
  </v-sheet>
</template>
