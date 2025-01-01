<template>
  <v-navigation-drawer :scrim="false" v-model="state.drawer" disable-route-watcher close-delay="200"
    @keydown="state.handleKeydown" app>
    <TagTray :tags="(tags.tags as Tag[])" :selected="tags.selection" flat />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useStateStore } from '@/stores/state';
import { useTagStore } from '@/stores/tags'
import Tag from '@/objects/Tag.ts';
import TagTray from '@/components/tags/TagTrayCard.vue';

const state = useStateStore()
const tags = useTagStore()


onMounted(() => {
  window.addEventListener('keydown', state.handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', state.handleKeydown);
});

</script>
