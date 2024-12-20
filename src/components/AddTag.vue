<template>
  <v-container>
    <v-tag :text="text" :icon="icon" :color="color" :value="text" tooltip bottom>
    </v-tag>
    <v-text-field label="Label" v-model="text"></v-text-field>
    <v-color-picker hide-inputs v-model="color"></v-color-picker>
    <v-btn color="primary" @click="addTag()">Primary</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTagStore } from '@/stores/tags'

const tags = ref(useTagStore());
const icon = ref('mdi-tag')
const text = ref('')
const color = ref('')

function addTag() {
  tags.value.addTag(text.value, icon.value, color.value)
}


</script>
