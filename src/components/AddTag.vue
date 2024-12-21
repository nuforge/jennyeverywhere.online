<template>
  <h2>Add Tag</h2>
  <v-form @submit.prevent>
    <v-text-field label="icon" v-model="icon" density="compact" @keydown.enter="addTag()" :prepend-inner-icon="icon">
      <template #append>
        <v-icon icon="mdi-link" link="https://pictogrammers.com/library/mdi/icon/window-closed-variant/"></v-icon>
      </template>
    </v-text-field>
    <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()"></v-text-field>
    <v-dialog>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn prepend-icon="mdi-palette" v-bind="activatorProps" color="surface-variant" text="color"
          variant="text"></v-btn>
      </template>
      <v-color-picker v-model="color" label="choose color" density="compact"></v-color-picker>
    </v-dialog>
    <div class="d-flex justify-center border-b-sm border-t-sm py-2 my-1 bg-black">
      <v-tag :text="text" :icon="icon" :color="color" :value="text" variant="tonal">
      </v-tag>
    </div>
    <v-btn color="primary" @click="addTag()" density="compact" prepend-icon="mdi-tag-edit" :disabled="!text">Create
      Tag</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTagStore } from '@/stores/tags'

const tags = ref(useTagStore());
const icon = ref('mdi-tag-outline')
const text = ref('')
const color = ref('')

function addTag() {
  tags.value.addTag(text.value, color.value, icon.value)
  text.value = ''
}

</script>
