<template>
  <v-bottom-sheet v-model="state.tagmanager" :scrim="false" class="mb-16">
    <TagManagerLayout v-if="tags.tags" />
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import { useTagStore } from '@/stores/tags'

import TagManagerLayout from '@/views/layouts/TagManagerLayout.vue';
const state = useStateStore()
const tags = useTagStore()

</script>
