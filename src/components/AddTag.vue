<template>
  <v-container>
    <v-tag :text="text" :icon="icon" :color="color" :value="text" variant="outlined">
    </v-tag>
    <v-divider class="my-1"></v-divider>
    <v-form @submit.prevent>
      <v-text-field label="tag" v-model="icon" density="compact" @keydown.enter="addTag()"></v-text-field>
      <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()"></v-text-field>
      <v-btn color="primary" @click="addTag()" density="compact" prepend-icon="mdi-tag-edit" :disabled="!text">Create
        Tag</v-btn>
    </v-form>
  </v-container>
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
