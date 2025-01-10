<template>
  <v-snackbar v-model="tags.snackbar" :timeout="2000" timer location="bottom" close-on-content-click
    class="mb-80 bg-transparent pa-0 ma-0">
    <EvTagTray :tags="([tags.snackbarTag] as Tag[])" dense class="bg-transparent" />

    <template #actions>
      <div class="d-flex flex-column">
        <v-btn icon="mdi-undo-variant" @click="undoAddTag" size="small" variant="plain"></v-btn>
        <v-btn icon="mdi-tag-multiple-outline" @click="state.drawer = true" size="small" variant="plain"></v-btn>
      </div>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import useTagStore from '@/stores/tags';
import useStateStore from '@/stores/state';
import Tag from '@/objects/nu/NuTag'; // Adjust the import path as necessary
import EvTagTray from './EvTagTray.vue';
const tags = useTagStore();
const state = useStateStore();

const undoAddTag = () => {
  tags.removeTag(tags.snackbarTag.id);
}
</script>
