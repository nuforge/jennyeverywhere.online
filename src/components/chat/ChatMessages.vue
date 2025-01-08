<script setup lang="ts">
import ChatMessage from '@/components/chat/ChatMessage.vue'

import useChatStore from '@/stores/chat';
const chat = useChatStore();

</script>

<template>
  <v-list class="bg-transparent" rounded v-if="chat.getMessages().length > 0">
    <ChatMessage v-for="message in chat.getMessages()" :key="message.id" :message="message" />
    <v-divider />
  </v-list>
</template>
