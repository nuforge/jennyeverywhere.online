<template>
  <v-bottom-sheet inset v-model="sheet.display">
    <v-card>
      <v-card-item class="pa-1">
        <template v-slot:prepend><v-tag :text="name" :icon="icon" :color="color" :value="icon" tooltip
            density="compact">
          </v-tag></template>
        <template v-slot:append><v-tag :text="name" :icon="icon" :color="color" :value="icon" tooltip density="compact">
          </v-tag></template>
      </v-card-item>
      <v-divider></v-divider>
      <v-card-text>
        <template v-slot:default>{{ description }}</template>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';
import { useSheetStore } from '@/stores/sheet';

const sheet = ref(useSheetStore())

const props = defineProps<{
  name: string,
  color: string,
  icon: string,
  description?: string
}>();


watch(() => props, (newVal) => {
  console.log('Attribute prop updated:', newVal)
}, { immediate: true }) // Run immediately to handle the first load as well

</script>
