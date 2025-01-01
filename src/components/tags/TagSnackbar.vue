<template>
  <v-snackbar v-model="tags.snackbar" :timeout="2000" timer location="bottom" close-on-content-click class="mb-80">
    <v-icon icon="mdi-tag-plus"></v-icon> Tag Copied
    <TagTray :tags="([tags.snackbarTag] as Tag[])" :selected="tags.selection" dense />

    <template #actions>
      <div class="d-flex flex-column">
        <v-btn icon="mdi-undo-variant" @click="undoAddTag" size="small" variant="plain"></v-btn>
        <v-btn icon="mdi-tag-multiple-outline" @click="state.drawer = true" size="small" variant="plain"></v-btn>
      </div>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import TagTray from '@/components/tags/TagTrayCard.vue';
import { useTagStore } from '@/stores/tags';
import { useStateStore } from '@/stores/state';
import Tag from '@/objects/Tag'; // Adjust the import path as necessary
const tags = useTagStore();
const state = useStateStore();

const undoAddTag = () => {
  tags.removeTag(tags.snackbarTag.id);
}
</script>
