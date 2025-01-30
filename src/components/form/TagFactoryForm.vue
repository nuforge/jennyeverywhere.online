<script setup lang="ts">
import { ref, defineProps } from 'vue';
import TagFactory from '@/objects/nu/TagFactory'
import Tag from '@/objects/nu/Tag'
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
import NuTag from '../nutag/NuTag.vue';


const showIconPicker = ref(false)


defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
  },
});


function onTagIconClick() {
  showIconPicker.value = !showIconPicker.value
}


const tagModel = ref<Tag>(TagFactory.create('temp', { color: 'primary', icon: 'mdi-tag' }))

</script>

<template>
  <v-text-field label="Tag Factory" v-model="tagModel.name" density="compact" variant="outlined">
    <template #prepend-inner>
      <v-icon :icon="tagModel.icon" :color="tagModel.color" @click="onTagIconClick" />
    </template>
    <template #prepend>
      <NuTag :tag="(tagModel as Tag)" size="small" />
    </template>
  </v-text-field>
  <tag-autocomplete v-if="showIconPicker" v-model="tagModel.icon" :prepend-inner-icon="tagModel.icon" />
  <ColorPicker v-if="showIconPicker" v-model="tagModel.color" label="color" />
</template>
