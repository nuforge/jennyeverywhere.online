<template>
  <v-card class="elevation-8" id="color-picker-attach">
    <v-card-item>
      <v-card-title>Add Tag</v-card-title>
    </v-card-item>
    <v-form @submit.prevent>
      <v-card-actions class="d-flex justify-space-between py-2 my-1 rounded-lg">
        <v-tag :text="text" :icon="icon" :color="color" :value="text" variant="tonal" class=" elevation-4 ">
        </v-tag>
        <v-btn @click=" addTag()" density="compact" prepend-icon="mdi-tag-plus" :disabled="!text">Add</v-btn>
      </v-card-actions>
      <v-card-text>
        <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()" variant="outlined"
          prepend-inner-icon="mdi-tag-text-outline"></v-text-field>
        <v-text-field label="icon" v-model="icon" density="compact" @keydown.enter="addTag()" variant="outlined"
          :prepend-inner-icon="icon">
          <template #append>
            <v-btn icon="mdi-search-web" target="_blank" rel="noopener noreferrer"
              href="https://pictogrammers.com/library/mdi/" size="small" density="compact" variant="plain"
              :ripple="false"></v-btn>
          </template>
        </v-text-field>
        <v-text-field label="color" v-model="color" density="compact" @keydown.enter="addTag()" variant="outlined">
          <template #prepend-inner>
            <v-icon icon="mdi-circle-opacity" :color="color"></v-icon>
          </template>
          <template #append>
            <v-dialog attach="#color-picker-attach" location="left">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn icon="mdi-palette" v-bind="activatorProps" size="small" density="compact" variant="plain"
                  :ripple="false">
                </v-btn>
              </template>
              <v-color-picker v-model="color" label="color" density="compact" mode="hex"></v-color-picker>
            </v-dialog>
          </template>
        </v-text-field>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTagStore } from '@/stores/tags'

const tags = ref(useTagStore());
const icon = ref('mdi-tag-outline')
const text = ref('')
const color = ref('#FFFFFF')

function addTag() {
  tags.value.addTag(text.value, color.value, icon.value)
  text.value = ''
}

</script>
