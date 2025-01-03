<template>
  <v-navigation-drawer :scrim="false" v-model="state.drawer" disable-route-watcher close-delay="200">
    <EvTrayCard :tags="(tags.tags as Tag[])" :title="false" />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import { useTagStore } from '@/stores/tags'
import Tag from '@/objects/Tag.ts';
import EvTrayCard from '@/components/tags/EvTrayCard.vue';

const state = useStateStore()
const tags = useTagStore()


</script>
