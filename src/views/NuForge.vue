<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IndexedDBEditor from '@/components/admin/IndexedDBEditor.vue';
import ChatEditor from '@/components/admin/ChatEditor.vue';
import ChatMemory from '@/components/admin/ChatMemory.vue';
import ChatTimeline from '@/components/admin/ChatTimeline.vue';
import MessageQueue from '@/components/admin/MessageQueue.vue';
import LocalStorageEditor from '@/components/admin/LocalStorageEditor.vue';


import TagDB from '@/objects/TagDb';
import type { Tag } from '@/objects/TagDb'; // Import with braces

const tagDatabase = new TagDB();
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


onMounted(async () => {
  const newTags = [
    { id: 'person:jean-luc-picard', space: 'person', name: 'Jean-Luc Picard' },
    { id: 'organization:starfleet', space: 'organization', name: 'Starfleet' },
    { id: 'ship:uss-enterprise', space: 'ship', name: 'USS Enterprise' },
    { id: 'role:captain', space: 'role', name: 'Captain' },
    { id: 'tag:unrelated', space: 'tag', name: 'Random Tag' },
  ]

  const newEdges = [
    { id: 'affiliation', from: 'person:jean-luc-picard', to: 'organization:starfleet', type: 'MEMBER_OF' },
    { id: 'captain', from: 'person:jean-luc-picard', to: 'ship:uss-enterprise', type: 'COMMANDS' },
    { id: 'uss-enterprise', from: 'person:jean-luc-picard', to: 'role:captain', type: 'HAS_ROLE' },
  ]
  try {
    await tagDatabase.setupDatabase('nuForgeDB');
    await tagDatabase.addTags(newTags);
    await tagDatabase.addEdges(newEdges);
    tags.value = await tagDatabase.getAllTags();
    console.log('Tags:', tags.value);
  } catch (error) {
    console.error('Error reading from database:', error);
  }
});

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
    <v-card-text>
      <div v-for="(tag, index) in tags" :key="index">
        <v-label>{{ tag.id }}</v-label> {{ tag.name }}<br />
      </div>
    </v-card-text>
  </v-card>

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
