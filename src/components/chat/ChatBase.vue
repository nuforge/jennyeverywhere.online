<script setup lang="ts">
import { ref } from 'vue'
import ChatMessages from '@/components/chat/ChatMessages.vue'
import ChatInputBar from '@/components/chat//ChatInputBar.vue'
import ChatLoading from '@/components/chat//ChatLoading.vue'

import useChatStore from '@/stores/chat';
const chat = useChatStore();

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

const messages = ref<Message[]>([])

const handleSend = (message: string) => {
  // Add the new message to the messages array
  messages.value.push({
    id: Date.now(),
    text: message,
    sender: 'user',
    timestamp: new Date().toISOString(),
  })
}

</script>

<template>
  <v-card class="bg-background">
    <ChatInputBar @send="handleSend" />
    <!-- Header -->
    <!-- Messages List -->
    <ChatMessages :messages="messages" />
    <ChatLoading v-if="chat.isLoading" />
    <!-- Input Bar -->
  </v-card>
</template>
