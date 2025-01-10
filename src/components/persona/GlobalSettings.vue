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
    <v-btn class="rounded" @click="styles.toggleSetting('global')"
      :icon="styles.get('global') ? 'mdi-earth-box' : 'mdi-earth-box-off'" :variant="styles.global ? 'text' : 'plain'"
      size="small" :color="styles.get('global') ? 'primary' : 'disabled'" />
    <v-divider class=" my-3"></v-divider>
    <v-label>Variants</v-label>
    <v-btn-toggle density="comfortable" v-model="styles.settings.variants" color="primary">
      <v-tooltip bottom v-for="variant in styles.chipVariants" :key="variant">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-button-pointer" :value="variant" v-bind="props" :variant="variant" />
        </template>
        {{ variant }}
      </v-tooltip>
    </v-btn-toggle>
    <v-divider class=" my-3"></v-divider>
    <v-label>Tag & Trays</v-label>
    <v-btn-toggle density="comfortable">
      <TagCardStyles :tray="styles.get('trays')" :labels="styles.get('labels')" :icons="styles.get('icons')"
        :colors="styles.get('colors')" :values="styles.get('values')" :logs="styles.get('logs')"
        :spaces="styles.get('spaces')" @update:labels="(value: boolean) => { styles.set('labels', value) }"
        @update:icons="(value: boolean) => { styles.set('icons', value) }"
        @update:colors="(value: boolean) => { styles.set('colors', value) }"
        @update:logs="(value: boolean) => { styles.set('logs', value) }"
        @update:tray="(value: boolean) => { styles.set('trays', value) }"
        @update:values="(value: boolean) => { styles.set('values', value) }"
        @update:spaces="(value: boolean) => { styles.set('spaces', value) }" />
    </v-btn-toggle>

    <v-divider class=" my-3"></v-divider>
    <v-label>Active Colors</v-label>
    <v-btn-toggle density="comfortable" v-model="styles.filterThemeColors" multiple divided
      class=" d-flex flex-wrap h-auto justify-space-between">
      <v-tooltip bottom v-for="color in persona.themeTags" :key="color.name">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-circle-opacity" :value="color.color" v-bind="props" size="medium" :ripple="false">
            <v-icon :color="styles.filterColors.includes(color.color) ? 'disabled' : color.color"></v-icon>
            <v-fab-transition>
              <v-badge :color="color.color" dot v-if="styles.filterColors.includes(color.color)" />
            </v-fab-transition>
          </v-btn>
        </template>
        {{ color.name }}
      </v-tooltip>
    </v-btn-toggle>

    <v-divider class=" my-3"></v-divider>
    <v-label>Base Colors</v-label>
    <v-btn-toggle density="comfortable" v-model="styles.filterBaseColors" multiple column
      class="d-flex flex-wrap h-auto ga-2 justify-center ">
      <v-tooltip bottom v-for="color in inator.colorTags()" :key="color.name">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-circle-opacity" :value="color.color" v-bind="props" size="medium" :ripple="false">
            <v-icon :color="styles.filterColors.includes(color.color) ? 'disabled' : color.color"></v-icon>
            <v-fab-transition>
              <v-badge :color="color.color" dot v-if="styles.filterColors.includes(color.color)" />
            </v-fab-transition>
          </v-btn>
        </template>
        {{ color.name }}
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" size="medium" variant="plain" icon="mdi-plus-circle-outline" color="accent" />
        </template>
        Custom Color
      </v-tooltip>
    </v-btn-toggle>

    <v-divider class=" my-3"></v-divider>

    <v-label>Change Color Theme</v-label>
    <v-item-group class="d-flex justify-space-between" style="cursor:copy">
      <v-badge v-for="color in persona.themeTags" :key="color.name" :color="color.color" dot location="bottom end">
        <v-item>
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-icon :color="`disabled`" v-bind="props" icon="mdi-eyedropper" @click="persona.pickColor(color.color)"
                :disabled="styles.filterColors.includes(color.color)" />
            </template>
            {{ color.name }} : {{ color.color ? persona.myTheme.colors[color.color] : 'undefined' }}

          </v-tooltip>
        </v-item>
      </v-badge>
    </v-item-group>
  </v-sheet>
</template>
