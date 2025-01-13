<template>
  <v-dialog v-model="state.drawer" absolute :scrim="false" max-width="600">
    <v-card>
      <v-card-title>Add Tag</v-card-title>
      <v-card-text>
        <EvTagTray :tags="(tags.tags as Tag[])" :selected="tags.selection" />
      </v-card-text>
      <v-card-actions>
        <v-btn @click="state.toggleTags">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script setup lang="ts">
import useStateStore from '@/stores/state';
import useTagStore from '@/stores/tags'
import Tag from '@/objects/nu/v1/ValTag' // Adjust the import path as necessary
import EvTagTray from '@/components/tags/EvTagTray.vue';

const state = useStateStore()
const tags = useTagStore()

</script>
