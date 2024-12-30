<template>
  <v-navigation-drawer :scrim="false" v-model="state.drawer" disable-route-watcher close-delay="200">
    <TagTray :tags="(tags.tags as Tag[])" :selected="tags.selection" flat dense />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStateStore } from '@/stores/state';
import { useTagStore } from '@/stores/tags'
import Tag from '@/objects/Tag.ts';
import TagTray from '@/components/tags/TagTrayCard.vue';

const state = useStateStore()
const tags = useTagStore()




onMounted(() => {
  tags.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  tags.addLabel('green portal', 'green', 'mdi-orbit')
  tags.addLabel('flamethrower', 'red', 'mdi-fire')
  tags.addLabel('jetpack', 'warning', 'mdi-rocket-launch')
  tags.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')
});


</script>
