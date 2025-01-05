<template>
  <v-bottom-sheet class="elevation-0" absolute :scrim="false" no-click-animation v-model="state.drawer" inset>
    <EvTagTray :tags="(tags.tags as Tag[])" :selected="tags.selection" />
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useStateStore from '@/stores/state';
import useTagStore from '@/stores/tags'
import Tag from '@/objects/Tag.ts';
import EvTagTray from '@/components/tags/EvTagTray.vue';

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
