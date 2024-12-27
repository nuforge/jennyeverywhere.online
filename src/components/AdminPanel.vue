<template>
  <v-expansion-panels multiple variant="accordion" v-model="panels">
    <v-expansion-panel>
      <v-expansion-panel-title static>
        <v-tag dense label="Public Tags" icon="mdi-tag"></v-tag>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <tag-group :tags="tagList" class="bg-background pa-2 my-1 rounded"></tag-group>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-title static>
        <v-tag dense label="System Tags" icon="mdi-tag-outline"></v-tag>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <tag-group :tags="systemTags" class="bg-background pa-2 my-1 rounded" disabled></tag-group>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const panels = ref([0, 1])

</script>
