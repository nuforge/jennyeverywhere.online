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
const showMessageQueue = ref(false)
const showChatEditor = ref(true)
const showChatMemory = ref(false)
const showChatTimeline = ref(false)
const showBrowserMemory = ref(false)


</script>

<template>
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
