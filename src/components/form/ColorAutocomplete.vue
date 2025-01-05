<template>
  <v-autocomplete label="Color" density="compact" variant="outlined" :items="persona.themeTags.map(({ name }) => name)"
    v-model="computedModelValue">
    <template v-slot:prepend>
      <v-icon icon="mdi-circle-opacity" :color="props.modelValue"></v-icon>
    </template>
    <template v-slot:item="{ props, item }">
      <v-list-item v-bind="props" :prepend-icon="`mdi-circle-opacity`"
        :text="`${theme.themes.value.myCustomTheme.colors[item.raw]}`">
        <template #prepend>
          <v-icon icon="mdi-circle-opacity" :color="item.raw"></v-icon>
        </template>
        <v-label>{{ theme.themes.value.myCustomTheme.colors[item.raw] }} </v-label>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>


<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';

import usePersonaStore from '@/stores/persona';
// import { emit } from 'process';
import { useTheme } from 'vuetify';
const theme = useTheme();
const persona = usePersonaStore()

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue']);

const computedModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit('update:modelValue', value);
  }
});


//import json from '@/assets/icons.json'
//const icons = json.map((icon) => `mdi-${icon.name}`) // It's an array of strings... stop looking!

</script>
