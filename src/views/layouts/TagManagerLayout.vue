<template>
  <v-container class="bg-background elevation-10 ma-2 ms-16 pa-1 rounded-t-lg">
    <v-row>
      <v-col>
        <TagTray :tags="tags.tags" :selected="tags.selection" />
      </v-col>
    </v-row>
    <TagStyles class="d-flex justify-space-between  bg-surface " />
  </v-container>
</template>

<script setup lang="ts">
//
import { onMounted } from 'vue'
import { useTagStore } from '@/stores/tags'
import TagStyles from '@/components/tags/TagStyles.vue';
import TagTray from '@/components/tags/TagTray.vue';

const tags = useTagStore()

onMounted(() => {
  // tags.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  // tags.addLabel('green portal', 'green', 'mdi-orbit')
  // tags.addLabel('flamethrower', 'red', 'mdi-fire')
  // tags.addLabel('jetpack', 'warning', 'mdi-rocket-launch')
  // tags.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')
});
</script>
