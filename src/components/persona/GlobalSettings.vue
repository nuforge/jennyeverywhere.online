<script setup lang="ts">
import { ref, computed } from 'vue';
import TagCardStyles from '@/components/tags/editors/TagCardStyles.vue';
import useStyleStore from '@/stores/styles'
import useThemeStore from '@/stores/theme'
import CustomColorPicker from '@/components/color/CustomColorPicker.vue'
import Tag from '@/objects/nu/Tag'

const styles = useStyleStore()
const theme = useThemeStore()

import Inator from '@/objects/Inator'
const inator = new Inator()

const mergedColors = computed(() => {
  return inator.colorTags().concat(theme.customColors.tags as Tag[])
})

const addCustomColor = (color: string) => {
  theme.addCustomColor(color, color)
}
const dialog = ref(false)

</script>

<template>
  <v-sheet flat class="bg-transparent">
    <v-card-text class="d-flex justify-space-between">
      <v-label>Current Theme:</v-label> "{{ theme.theme.name }}"
      <v-btn to="/theme" block prepend-icon="mdi-information" color="info" variant="plain" size="small" />
    </v-card-text>
    <v-divider class=" my-3"></v-divider>
    <v-label>Global Setting</v-label>

    <v-btn class="rounded" @click="styles.toggleSetting('global')"
      :icon="styles.get('global') ? 'mdi-earth-box' : 'mdi-earth-box-off'"
      :variant="styles.get('global') ? 'text' : 'plain'" size="small"
      :color="styles.get('global') ? 'primary' : 'disabled'" />
    <v-divider class=" my-3"></v-divider>
    <v-label>Variants</v-label>
    <v-btn-toggle density="comfortable" v-model="styles.variants" color="primary">
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
      <TagCardStyles :tray="styles.settings.get('trays')" :labels="styles.settings.get('labels')"
        :icons="styles.settings.get('icons')" :colors="styles.settings.get('colors')"
        :values="styles.settings.get('values')" :logs="styles.settings.get('logs')"
        :spaces="styles.settings.get('spaces')" @update:labels="(value: boolean) => { styles.set('labels', value) }"
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
      <v-tooltip bottom v-for="color in theme.themeTags" :key="color.name">
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
      <v-tooltip bottom v-for="color in mergedColors" :key="color.name">
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
      <v-divider vertical></v-divider>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <CustomColorPicker app v-model="dialog" @apply-color="addCustomColor" v-bind="props" />
        </template>
        Custom Color
      </v-tooltip>
    </v-btn-toggle>


    <v-divider class=" my-3"></v-divider>

    <v-label>Change Color Theme</v-label>
    <v-item-group class="d-flex justify-space-between" style="cursor:copy">
      <v-badge v-for="color in theme.themeTags" :key="color.name" :color="color.color" dot location="bottom end">
        <v-item>
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-icon :color="`disabled`" v-bind="props" icon="mdi-eyedropper" @click="theme.pickColor(color.color)"
                :disabled="styles.filterColors.includes(color.color)" />
            </template>
            {{ color.name }} : {{ color.color ? theme.myTheme.colors[color.color] : 'undefined' }}

          </v-tooltip>
        </v-item>
      </v-badge>
    </v-item-group>
  </v-sheet>
</template>
