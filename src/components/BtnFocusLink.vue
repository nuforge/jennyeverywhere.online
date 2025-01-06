<script setup lang="ts">

</script>


<template>
  <v-btn variant="plain" block>
    <template #prepend>
      <v-icon icon="mdi-link-plus"></v-icon>
    </template>
    Link Focus
    <template #append>
      <v-icon icon="mdi-information-slab-symbol">
        <v-tooltip bottom attach="parent">Link Focus to a new or existing tag</v-tooltip>
      </v-icon>
    </template>
  </v-btn>
</template>
