<script setup lang="ts">
import { ref } from 'vue';

import useChatStore from '@/stores/chat/nuchat.ts';
const chat = useChatStore();

import LocalStorageManager from '@/utils/LocalStorageManager';


const localStorage = new LocalStorageManager('nuForgeMemory')
const localButtons = ref(localStorage.isEmpty())

const SaveToLocal = () => {
  localStorage.storeItem('chat', chat.chatSent)
  localStorage.storeItem('summary', chat.chatSummary)
  localStorage.storeItem('response', chat.chatResponse)
  localButtons.value = localStorage.isEmpty()
}

const loadLocal = () => {
  chat.chatSent = localStorage.retrieveItem('chat')?.toString() ?? ''
  chat.chatSummary = localStorage.retrieveItem('summary')?.toString() ?? ''
  chat.chatResponse = localStorage.retrieveItem('response')?.toString() ?? ''
  localButtons.value = localStorage.isEmpty()
}
const clearLocal = () => {
  localStorage.clearAllItems()
  localButtons.value = localStorage.isEmpty()
}

</script>

<template>
  <v-row>
    <v-col>
      <v-card-actions>
        <v-label>Memory</v-label>
        <v-btn-group variant="text" size="small">
          <v-btn @click="SaveToLocal" icon="mdi-brain"></v-btn>
          <v-btn @click="loadLocal" icon="mdi-memory-arrow-down" :disabled="localButtons"></v-btn>
          <v-btn @click="clearLocal" icon="mdi-nuke" :disabled="localButtons"></v-btn>
        </v-btn-group>
      </v-card-actions>
      <v-textarea v-model="chat.chatSent" auto-grow :rows="1" label="Chat Sent To AI" density="compact"
        bg-color="background" variant="solo" counter prepend-icon="mdi-account" append-icon="mdi-message" flat
        disabled />
      <v-textarea v-model="chat.chatSummary" auto-grow :rows="1" label="Chat Summary To AI" density="compact"
        bg-color="background" counter prepend-icon="mdi-robot" append-icon="mdi-message-bulleted" flat variant="solo"
        disabled />
      <v-progress-circular v-if="chat.isLoading" indeterminate color="warning" size="18" />
      <v-img v-else v-for="image in chat.previousImages" :src="image" :key="image" width="256" height="256" />
    </v-col>
  </v-row>


</template>
