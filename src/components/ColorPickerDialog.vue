<template>
  <v-dialog width="auto" v-model="dialog" :scrim="false" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn icon="$palette" v-bind="activatorProps" size="small" density="compact" variant="plain"
        :ripple="false"></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card class="bg-surface rounded-lg elevation-8">
        <v-color-picker label="color" density="compact" mode="hex" :modes="['hex']" v-model="color"
          :show-swatches="swatches" :hide-canvas="!canvas" :hide-inputs="!inputs"
          :hide-sliders="!sliders"></v-color-picker>
        <v-card-actions>
          <v-btn-toggle multiple density="compact">
            <v-btn icon @click="canvas = !canvas" variant="plain" size="sm">
              <v-icon :icon="canvas ? 'mdi-rectangle' : 'mdi-rectangle-outline'"></v-icon>
              <v-tooltip activator="parent" text="Canvas" location="bottom" />
            </v-btn>
            <v-btn icon @click="sliders = !sliders" variant="plain" size="sm">
              <v-icon :icon="sliders ? '$dropper' : '$no-dropper'"></v-icon>
              <v-tooltip activator="parent" text="Dropper" location="bottom" />
            </v-btn>
            <v-btn icon @click="inputs = !inputs" variant="plain" size="sm">
              <v-icon :icon="inputs ? 'mdi-pound-box' : 'mdi-pound-box-outline'"></v-icon>
              <v-tooltip activator="parent" text="Inputs" location="bottom" />
            </v-btn>
            <v-btn icon @click="swatches = !swatches" variant="plain" size="sm">
              <v-icon :icon="swatches ? '$swatches' : '$no-swatches'"></v-icon>
              <v-tooltip activator="parent" text="Swatches" location="bottom" />
            </v-btn>
          </v-btn-toggle>
          <v-spacer></v-spacer>
          <v-btn icon size="small" @click="isActive.value = false" variant="plain">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-btn icon size="small" @click="applyColor">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const canvas = ref(true)
const inputs = ref(true)
const sliders = ref(true)
const swatches = ref(false)
const dialog = ref(false)

const color = ref('#FFFFFF')

const emit = defineEmits(['apply-color'])
function applyColor() {
  emit('apply-color', color.value);
  dialog.value = false;
}

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})


</script>
