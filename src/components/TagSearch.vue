<script setup lang="ts">
import { ref } from 'vue'
import TagDb from '@/objects/TagDb';
import Tag from '@/objects/nu/Tag';

const tagDatabase = new TagDb();
const tags = ref<Tag[]>([]);

const searchBySpace = ref('person');
const searchByConnection = ref('organization:starfleet');
const searchByDepth = ref('person:picard');

function searchSpace() {
  console.log('searchSpace triggered');
  tagDatabase.findTagsBySpace(searchBySpace.value).then((result) => {
    console.log('searchSpace:', result);
    tags.value = result as Tag[];
  }).catch((error) => {
    console.error('Error finding tags:', error);
  });
}

function depthSearch() {
  console.log('depthSearch triggered');
  tagDatabase.depthFirstSearchWithMetrics(searchByDepth.value).then((results) => {
    tags.value = results.tags as Tag[];
    console.log('depthSearch:', tags.value);
    console.log('depthSearch:', results.metrics);
  }).catch((error) => {
    console.error('Error finding tags:', error);
  });
}

function searchTags() {
  console.log('searchTags triggered');
  tagDatabase.findConnectedTags(searchByConnection.value).then((result) => {
    console.log('searchTags:', result);
    tags.value = result as Tag[];
  }).catch((error) => {
    console.error('Error finding connected tags:', error);
  });
}

function resetDatabase() {
  console.log('resetDatabase triggered');
  tagDatabase.resetDatabase('nuForgeDB').then(() => {
    console.log('Database reset');
    tags.value = [];
  }).catch((error) => {
    console.error('Error resetting database:', error);
  });
}

</script>

<template>
  <v-card>
    <v-card-title>Tags in IndexedDB</v-card-title>
    <v-card-actions>
      <v-text-field v-model="searchBySpace" density="compact" label="search By Space" clearable
        @keydown.enter="searchSpace" prepend-inner-icon="mdi-tray">
        <template #append>
          <v-btn icon="mdi-magnify" @click="searchSpace" />
        </template>
      </v-text-field>
    </v-card-actions>
    <v-card-actions>
      <v-text-field v-model="searchByConnection" density="compact" label="search By Connection" clearable
        @keydown.enter="searchTags" prepend-inner-icon="mdi-lan">
        <template #append>
          <v-btn icon="mdi-magnify" @click="searchTags" />
        </template>
      </v-text-field>
    </v-card-actions>
    <v-card-actions>
      <v-text-field v-model="searchByDepth" density="compact" label="depth Search" clearable
        @keydown.enter="depthSearch" prepend-inner-icon="mdi-graph">
        <template #append>
          <v-btn icon="mdi-magnify" @click="depthSearch" />
        </template>
      </v-text-field>
    </v-card-actions>
    <v-btn @click="resetDatabase" prepend-icon="mdi-nuke" color="warning" variant="plain">Reset</v-btn>
  </v-card>


</template>

<style scoped>
.draggable {
  cursor: grab;
}
</style>
