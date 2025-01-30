<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';
import TagFactory from '@/objects/nu/TagFactory'
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
import NuTag from '../nutag/NuTag.vue';

const emit = defineEmits(['create-tag', 'close'])

const text = ref('')
const color = ref('#FFFFFF')
const icon = ref('mdi-tag')

const showColorPicker = ref(false)
const showIconPicker = ref(false)


function submitForm() {
  console.log('submitForm', text.value, color.value, icon.value)
  emit('create-tag', TagFactory.create(text.value, { color: color.value, icon: icon.value }))
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
function onTagIconClick() {
  showIconPicker.value = !showIconPicker.value
}

function onTagColorClick() {
  showColorPicker.value = !showColorPicker.value
}

const tempTag = TagFactory.create('temp', { color: 'primary', icon: 'mdi-tag' })

</script>

<template>
  <v-form @submit.prevent="submitForm()">
    <v-text-field label="Tag" v-model="tempTag.name" density="compact" variant="outlined" hide-details>
      <template #prepend-inner>
        <v-icon :icon="tempTag.icon" color="text" @click="onTagIconClick" />
      </template>
      <template #append-inner>
        <v-icon icon="mdi-circle-opacity" :color="tempTag.color" @click="onTagColorClick" />
      </template>
    </v-text-field>
    <tag-autocomplete v-if="showIconPicker" v-model="tempTag.icon" :prepend-inner-icon="tempTag.icon" />
    <ColorPicker v-if="showColorPicker" v-model="tempTag.color" label="color" />
    <v-card-actions>
      <v-btn icon="mdi-close" variant="plain" @click="close" />
      <v-spacer>
        <NuTag :tag="tempTag" size="small" />
      </v-spacer>
      <v-btn type="submit" icon="mdi-tag-plus" :disabled="!text" variant="text" />
    </v-card-actions>
  </v-form>
</template>
