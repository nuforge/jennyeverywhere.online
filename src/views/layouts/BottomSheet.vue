<template>
  <v-bottom-sheet persistent absolute no-click-animation v-model="state.drawer" :scrim="false" class="mb-16">
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
