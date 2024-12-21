<template>
  <h2>Add Tag</h2>
  <v-form @submit.prevent>
    <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()"
      variant="outlined"></v-text-field>
    <v-text-field label="icon" v-model="icon" density="compact" @keydown.enter="addTag()" variant="outlined"
      :prepend-inner-icon="icon">
      <template #append>
        <v-btn icon="mdi-open-in-new" target="_blank" rel="noopener noreferrer"
          href="https://pictogrammers.com/library/mdi/icon/window-closed-variant/" size="small" density="compact"
          variant="plain" :ripple="false"></v-btn>
      </template>
    </v-text-field>
    <v-dialog>
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn prepend-icon="mdi-palette" v-bind="activatorProps" text="choose color" variant="outlined" block>
          <template #prepend>
            <v-icon icon="mdi-palette" :color="color"></v-icon>
          </template>
        </v-btn>
      </template>
      <v-color-picker v-model="color" label="color" density="compact"></v-color-picker>
    </v-dialog>
    <v-row class="d-flex justify-center align-center">
      <v-col>
        <div class="d-flex justify-center py-2 my-1 rounded-lg">
          <v-tag :text="text" :icon="icon" :color="color" :value="text" variant="tonal" class=" elevation-4 ">
          </v-tag>
        </div>
      </v-col>
      <v-col>
        <v-btn @click=" addTag()" density="compact" prepend-icon="mdi-tag-plus" :disabled="!text">Add</v-btn></v-col>
    </v-row>
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
