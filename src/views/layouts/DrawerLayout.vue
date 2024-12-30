<template>
  <v-navigation-drawer v-model="state.navigation" disable-route-watcher absolute :scrim="false">
    <TagTray :tray="clipboard.paste()" />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import TagTray from '@/components/tags/TagTray.vue';
import { useClipboardStore } from '@/stores/clipboard';

const state = useStateStore()
const clipboard = useClipboardStore()



</script>
