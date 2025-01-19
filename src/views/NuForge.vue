<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import IndexedDBEditor from '@/components/admin/IndexedDBEditor.vue';
import LocalStorageEditor from '@/components/admin/LocalStorageEditor.vue';
import ChatEditor from '@/components/admin/ChatEditor.vue';
import ChatMemory from '@/components/admin/ChatMemory.vue';
import ChatTimeline from '@/components/admin/ChatTimeline.vue';
import MessageQueue from '@/components/admin/MessageQueue.vue';

import TagDb from '@/objects/TagDb';
import Tag from '@/objects/nu/Tag';
import NuTag from '@/components/nutag/NuTag.vue';

const tagDatabase = new TagDb();
const tags = ref<Tag[]>([]);

// import useChatStore from '@/stores/chat/nuchat';
// const chat = useChatStore();
const showMessageQueue = ref(false)
const showChatEditor = ref(false)
const showChatMemory = ref(false)
const showChatTimeline = ref(false)
const showBrowserMemory = ref(true)

/// TA
// onMounted(async () => {
//   console.log('tagDatabase:', tagDatabase);
//   await tagDatabase.setupDatabase('nuForgeDB');

const dbTags = computed(() => tags.value.map(tag => new Tag(tag?.id)));

onMounted(async () => {
  const newTags = [
    { id: 'person:picard', space: 'person', name: 'Jean-Luc Picard' },
    { id: 'organization:starfleet', space: 'organization', name: 'Starfleet' },
    { id: 'ship:enterprise', space: 'ship', name: 'USS Enterprise' },
    { id: 'role:captain', space: 'role', name: 'Captain' },
    { id: 'tag:unrelated', space: 'tag', name: 'Random Tag' },
    { id: 'person:sisko', space: 'person', name: 'Benjamin Sisko' },
    { id: 'station:ds9', space: 'station', name: 'Deep Space Nine' },
    { id: 'ship:defiant', space: 'ship', name: 'USS Defiant' },
    { id: 'role:commander', space: 'role', name: 'Commander' },
  ]

  const newEdges = [
    { id: 'affiliation:picard', from: 'person:picard', to: 'organization:starfleet', type: 'MEMBER_OF' },
    { id: 'captain', from: 'person:picard', to: 'ship:enterprise', type: 'COMMANDS' },
    { id: 'enterprise', from: 'person:picard', to: 'role:captain', type: 'HAS_ROLE' },
    { id: 'affiliation:sisko', from: 'person:sisko', to: 'organization:starfleet', type: 'MEMBER_OF' },
    { id: 'affiliation:enterpise', from: 'ship:enterprise', to: 'organization:starfleet', type: 'MEMBER_OF' },
    { id: 'affiliation:defiant', from: 'ship:defiant', to: 'organization:starfleet', type: 'MEMBER_OF' },
  ]
  try {
    await tagDatabase.setupDatabase('nuForgeDB');
    await tagDatabase.addTags(newTags);
    await tagDatabase.addEdges(newEdges);
    tags.value = await tagDatabase.getAllTags() as Tag[];
  } catch (error) {
    console.error('Error reading from database:', error);
  }

});

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
  tagDatabase.depthFirstSearch(searchByDepth.value).then((result) => {
    console.log('depthSearch:', result);
    tags.value = result as Tag[];
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
  tagDatabase.resetDatabase().then(() => {
    console.log('Database reset');
    tags.value = [];
  }).catch((error) => {
    console.error('Error resetting database:', error);
  });
}

</script>

<template>
  <v-divider class="my-4" />
  <v-btn-group multiple variant="plain">
    <v-btn @click="showMessageQueue = !showMessageQueue" size="small"
      :icon="showMessageQueue ? `mdi-forum` : `mdi-forum-outline`" flat color="warning" />
    <v-btn @click="showChatEditor = !showChatEditor" size="small"
      :icon="showChatEditor ? `mdi-message-processing` : `mdi-message-processing-outline`" flat color="primary" />
    <v-btn @click="showChatMemory = !showChatMemory" size="small"
      :icon="showChatMemory ? `mdi-message-badge` : `mdi-message-badge-outline`" flat color="secondary" />
    <v-btn @click="showChatTimeline = !showChatTimeline" size="small"
      :icon="showChatTimeline ? `mdi-map` : `mdi-map-outline`" flat color="success" />
    <v-btn @click="showBrowserMemory = !showBrowserMemory" size="small"
      :icon="showBrowserMemory ? `mdi-brain` : `mdi-egg-off-outline`" flat color="accent" />
  </v-btn-group>

  <v-card>
    <v-card-title>Tags in IndexedDB</v-card-title>
    <v-card-actions>
      <v-text-field v-model="searchBySpace" density="compact" label="searchBySpace" clearable
        @keydown.enter="searchSpace">
        <template #prepend>
          <v-icon icon="mdi-magnify" @click="searchSpace"></v-icon>
        </template>
      </v-text-field>
    </v-card-actions>
    <v-card-actions>
      <v-text-field v-model="searchByConnection" density="compact" label="searchByConnection" clearable
        @keydown.enter="searchTags">
        <template #prepend>
          <v-icon icon="mdi-magnify" @click="searchTags"></v-icon>
        </template>
      </v-text-field>
    </v-card-actions>
    <v-card-actions>
      <v-text-field v-model="searchByDepth" density="compact" label="depthSearch" clearable
        @keydown.enter="depthSearch">
        <template #prepend>
          <v-icon icon="mdi-magnify" @click="depthSearch"></v-icon>
        </template>
      </v-text-field>
      <v-btn @click="resetDatabase">Reset Database</v-btn>
    </v-card-actions>
    <v-card-text>
      <NuTag v-for="(tag, index) in dbTags" :key="index" :space="tag.space" :label="`${tag.name}`" size="small" />
    </v-card-text>
  </v-card>

  <v-divider class="my-4" />

  <v-expand-transition>
    <v-row v-if="showMessageQueue">
      <v-col cols="12">
        <h2><v-icon icon="mdi-forum" size="x-small" color="warning" /> Message Queue</h2>
        <MessageQueue />
      </v-col>
    </v-row>
  </v-expand-transition>
  <v-expand-transition>
    <v-row v-if="showChatEditor">
      <v-col>
        <h2><v-icon icon="mdi-message-processing" size="x-small" color="primary" /> Chat</h2>
        <ChatEditor />
      </v-col>
    </v-row>
  </v-expand-transition>

  <v-expand-transition>
    <v-row v-if="showChatMemory || showChatTimeline">
      <v-expand-transition>
        <v-col v-if="showChatMemory">
          <h2><v-icon icon="mdi-message-badge" size="x-small" color="secondary" /> ChatMemory</h2>
          <ChatMemory />
        </v-col>
      </v-expand-transition>
      <v-expand-transition>
        <v-col v-if="showChatTimeline">
          <h2><v-icon icon="mdi-map" size="x-small" color="success" /> ChatHistory</h2>
          <ChatTimeline />
        </v-col>
      </v-expand-transition>
    </v-row>
  </v-expand-transition>


  <v-expand-transition>
    <v-row v-if="showBrowserMemory">
      <v-col cols="12">
        <h2><v-icon icon="mdi-brain" size="x-small" color="accent" /> Memory</h2>
      </v-col>
      <v-col>
        <LocalStorageEditor />
      </v-col>
      <v-col>
        <IndexedDBEditor />
      </v-col>
    </v-row>
  </v-expand-transition>

</template>

<style scoped>
.draggable {
  cursor: grab;
}
</style>
