<template>
  <v-navigation-drawer :scrim="false" v-model="state.drawer" disable-route-watcher close-delay="200" max-width="300px">
    <EvTagCard :tags="(tags.tags as Tag[])" flat />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import { useTagStore } from '@/stores/tags'
import Tag from '@/objects/Tag.ts';
import EvTagCard from '@/components/tags/EvTagCard.vue';

const state = useStateStore()
const tags = useTagStore()


</script>
