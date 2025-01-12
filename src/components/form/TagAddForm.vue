<template>
  <v-form @submit.prevent="submitForm()">
    <v-text-field label="label" v-model="text" density="compact" variant="outlined"
      prepend-inner-icon="mdi-label-outline" persistent-counter></v-text-field>

    <tag-autocomplete v-model="icon" :prepend-inner-icon="icon" />

    <ColorPicker v-model="color" label="color" />
    {{ modelValue }}
    <v-card-actions>
      <v-btn icon="mdi-close" variant="plain" @click="close" />
      <v-spacer></v-spacer>
      <v-btn type="submit" icon="mdi-tag-plus" :disabled="!text" variant="text" />
    </v-card-actions>
  </v-form>
</template>


<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';
import Tag from '@/objects/nu/Tag'
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';

const emit = defineEmits(['create-tag', 'close'])

const text = ref('')
const color = ref('#FFFFFF')
const icon = ref('mdi-tag')


function submitForm() {
  console.log('submitForm', text.value, color.value, icon.value)
  emit('create-tag', new Tag(text.value, color.value, icon.value))
}

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
  },
});


function close() {
  emit('close', false);
}

</script>
