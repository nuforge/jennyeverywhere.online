<template>
  <v-navigation-drawer :scrim="false" v-model="state.drawer" disable-route-watcher close-delay="200"
    @keydown="handleKeydown">
    <TagTray :tags="(tags.tags as Tag[])" :selected="tags.selection" flat />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useStateStore } from '@/stores/state';
import { useTagStore } from '@/stores/tags'
import Tag from '@/objects/Tag.ts';
import TagTray from '@/components/tags/TagTrayCard.vue';

const state = useStateStore()
const tags = useTagStore()

const lastKey = ref('');

const handleKeydown = (event: KeyboardEvent) => {
  lastKey.value = event.key; // Store the key that was pressed

  if (event.key === 't') {
    state.drawer = !state.drawer;
  }
  if (event.key === 'Escape') {
    state.drawer = false;
  }
  // console.log(`Key pressed: ${event.key}`);
};


onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

</script>
