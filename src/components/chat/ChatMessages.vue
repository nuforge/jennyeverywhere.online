<script setup lang="ts">
import ChatMessage from '@/components/chat/ChatMessage.vue'

import useChatStore from '@/stores/chat';
const chat = useChatStore();

</script>

<template>

  <v-timeline class="bg-transparent" rounded v-if="chat.messages.length > 0" density="compact" truncate-line="end">
    <ChatMessage v-for="message in chat.messages" :key="message.id" :message="message" />
  </v-timeline>
</template>
