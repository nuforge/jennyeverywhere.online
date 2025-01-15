<script setup lang="ts">
import IndexedDBEditor from './IndexedDBEditor.vue';
import LocalStorageEditor from './LocalStorageEditor.vue';

import { ref } from 'vue';


const tagInput = ref('')
const valueInput = ref('')

const submitForm = (event: Event) => {
  event.preventDefault()
  clearInput()
}

const clearInput = () => {
  tagInput.value = ''
  valueInput.value = ''
}
</script>

<template>
  <v-card-title>Local Memory Manager</v-card-title>
  <v-card-actions class="align-center">
    <v-text-field v-model="tagInput" density="compact" label="tag" prepend-inner-icon="mdi-tag"
      @keydown.enter="submitForm"></v-text-field>
    <v-text-field v-model="valueInput" density="compact" label="value" prepend-inner-icon="mdi-tray"
      @keydown.enter="submitForm"></v-text-field>
  </v-card-actions>
  <v-row>
    <v-col>
      <IndexedDBEditor />
    </v-col>
    <v-col>
      <LocalStorageEditor />
    </v-col>
  </v-row>
</template>
