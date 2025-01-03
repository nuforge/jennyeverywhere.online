<template>
  <v-container class="d-flex">
    <EvTagCard :name="name" :tags="filtered" :labels="false" v-model="selection" />
  </v-container>
</template>


<script setup lang="ts">
import { ref, defineProps, computed, watch } from 'vue';
import EvTagCard from './tags/EvTrayCard.vue';

import { usePersonaStore } from '@/stores/persona';
const persona = usePersonaStore()
const selection = ref<string[]>([])

const filtered = computed(() => {
  return persona.themeTags.filter(tag => props.filter?.includes(tag.name)) || []
})

const props = defineProps({
  filter: {
    type: Array as () => string[],
  },
  modelValue: {
    type: Array as () => string[],
    default: () => []
  },
  name: {
    type: String,
    default: "Theme"
  },
})

// Emits

const emit = defineEmits(['update:modelValue'])
watch(() => selection.value, (newVal) => {
  emit('update:modelValue', newVal)
});


</script>
