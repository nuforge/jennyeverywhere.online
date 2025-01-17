<script setup lang="ts">
import { ref } from 'vue';
import IndexedDBEditor from '@/components/admin/IndexedDBEditor.vue';
import ChatEditor from '@/components/admin/ChatEditor.vue';
import ChatMemory from '@/components/admin/ChatMemory.vue';
import ChatTimeline from '@/components/admin/ChatTimeline.vue';
import MessageQueue from '@/components/admin/MessageQueue.vue';
import LocalStorageEditor from '@/components/admin/LocalStorageEditor.vue';

// import useChatStore from '@/stores/chat/nuchat';
// const chat = useChatStore();
const showChatEditor = ref(false)
const showChatMemory = ref(false)
const showChatTimeline = ref(false)
const showMessageQueue = ref(true)
const showBrowserMemory = ref(false)

</script>

<template>
  <v-card-actions>
    <v-btn-group multiple variant="text">
      <v-btn @click="showChatEditor = !showChatEditor" size="small"
        :icon="showChatEditor ? `mdi-chat` : `mdi-chat-outline`" flat />
      <v-btn @click="showChatMemory = !showChatMemory" size="small"
        :icon="showChatMemory ? `mdi-message-badge` : `mdi-message-badge-outline`" flat />
      <v-btn @click="showChatTimeline = !showChatTimeline" size="small"
        :icon="showChatTimeline ? `mdi-map` : `mdi-map-outline`" flat />
      <v-btn @click="showMessageQueue = !showMessageQueue" size="small"
        :icon="showMessageQueue ? `mdi-forum` : `mdi-forum-outline`" flat />
      <v-btn @click="showBrowserMemory = !showBrowserMemory" size="small"
        :icon="showBrowserMemory ? `mdi-brain` : `mdi-egg-off-outline`" flat />
    </v-btn-group>
  </v-card-actions>

  <v-divider />

  <v-expand-transition>
    <v-row v-if="showChatEditor">
      <v-col>
        <h2><v-icon icon="mdi-chat" size="x-small" /> Chat</h2>
        <ChatEditor />
        <v-divider />
      </v-col>
    </v-row>
  </v-expand-transition>

  <v-expand-transition>
    <v-row v-if="showChatMemory">
      <v-col>
        <h2><v-icon icon="mdi-message-badge" size="x-small" /> ChatMemory</h2>
        <ChatMemory />
        <v-divider />
      </v-col>
    </v-row>
  </v-expand-transition>

  <v-expand-transition>
    <v-row v-if="showChatTimeline">
      <v-col>
        <h2><v-icon icon="mdi-map" size="x-small" /> ChatHistory</h2>
        <ChatTimeline />
        <v-divider />
      </v-col>
    </v-row>
  </v-expand-transition>

  <v-expand-transition>
    <v-row v-if="showMessageQueue">
      <v-col cols="12">
        <h2><v-icon icon="mdi-forum" size="x-small" /> Message Queue</h2>
        <MessageQueue />
        <v-divider />
      </v-col>
    </v-row>
  </v-expand-transition>

  <v-expand-transition>
    <v-row v-if="showBrowserMemory">
      <v-col cols="12">
        <h2><v-icon icon="mdi-brain" size="x-small" /> Memory</h2>
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
