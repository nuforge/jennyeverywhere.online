<template>
  <v-autocomplete label="mdi-* icon" density="compact" variant="outlined" :items="icons">
    <template v-slot:item="{ props, item }">
      <v-list-item v-bind="props" :prepend-icon="`${item.raw}`" :text="`mdi-${item.raw}`"></v-list-item>
    </template>

    <template #append>
      <v-btn icon="mdi-search-web" target="_blank" rel="noopener noreferrer"
        href="https://pictogrammers.com/library/mdi/" size="small" density="compact" variant="plain"
        :ripple="false"></v-btn>
    </template>
  </v-autocomplete>
</template>


<script setup lang="ts">
import json from '@/assets/icons.json'
const icons = json.map((icon) => `mdi-${icon.name}`)

</script>
