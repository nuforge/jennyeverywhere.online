<script setup lang="ts">
import Tag from '@/objects/Tag.ts';
import usePersonaStore from '@/stores/persona'
const persona = usePersonaStore()
</script>

<template>

  <v-label>system tags</v-label>
  <v-list-item v-for="tag in (persona.focus.attributesToTags() as Tag[])" :key="tag.id">
    <NuTag :tag="tag" elevation="2" />
  </v-list-item>

</template>
