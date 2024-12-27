<template>
  <v-text-field density="compact" variant="outlined" v-model="inputValue" @input="updateValue">
    <template #prepend-inner>
      <v-icon icon="mdi-circle-opacity" :color="inputValue"></v-icon>
    </template>
    <template #append>
      <ColorPickerDialog @apply-color="applyColorChoice" />
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ColorPickerDialog from '@/components/ColorPickerDialog.vue';
const props = defineProps({
  modelValue: String, // Define the type of the prop
});

const inputValue = ref(props.modelValue);

const emit = defineEmits(['update:modelValue']);


function applyColorChoice(hex: string) {
  inputValue.value = hex;
}

function updateValue() {
  console.log('applyColorChoice', inputValue.value);
  emit('update:modelValue', inputValue.value);
}
</script>
