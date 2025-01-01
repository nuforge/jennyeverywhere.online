<template>
  <v-form @submit.prevent>
    <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()" variant="outlined"
      prepend-inner-icon="mdi-label-outline" autofocus persistent-counter></v-text-field>

    <tag-autocomplete v-model="icon" @keydown.enter="addTag()" :prepend-inner-icon="icon" />

    <ColorPicker v-model="color" label="color" @keydown.enter="addTag()" />

    <v-card-actions>
      <v-btn @click="addTag()" density="comfortable" prepend-icon="mdi-tag-plus" :disabled="!text" variant="tonal"
        block></v-btn>
    </v-card-actions>
  </v-form>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useTagStore } from '@/stores/tags'
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';

const tags = useTagStore()

const text = ref('')
const color = ref('#FFFFFF')
const icon = ref('mdi-tag')

function addTag() {
  tags.addLabel(text.value, color.value, icon.value)
  text.value = ''
}

</script>
