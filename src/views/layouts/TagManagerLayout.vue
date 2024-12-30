<template>
  <v-container class="bg-background elevation-0 rounded-t-lg">
    <v-row>
      <v-col>
        <TagTray :tags="globalTags.tags" :selected="globalTags.selection" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
//
import { onMounted } from 'vue'
import { useTagStore } from '@/stores/tags'
import TagTray from '@/components/tags/TagTray.vue';

const globalTags = useTagStore()

onMounted(() => {
  globalTags.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  globalTags.addLabel('green portal', 'green', 'mdi-orbit')
  globalTags.addLabel('flamethrower', 'red', 'mdi-fire')
  globalTags.addLabel('jetpack', 'warning', 'mdi-rocket-launch')
  globalTags.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')
});
</script>
