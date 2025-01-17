<script setup lang="ts">
import { computed } from 'vue';
import Tag from '@/objects/nu/Tag';

import usePersonaStore from '@/stores/persona'
const persona = usePersonaStore()

const systemTags = computed(() => persona.focus.attributesToTags() as Tag[])

</script>

<template>

  <v-label>system tags</v-label>
  <v-list-item v-for="tag in systemTags" :key="tag.id">
    <NuTag :tag="tag" elevation="2" />
  </v-list-item>

</template>
