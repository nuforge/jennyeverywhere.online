<script setup lang="ts">
import ChatMessage from '@/components/chat/ChatMessage.vue'

import useChatStore from '@/stores/chat';
const chat = useChatStore();

</script>

<template>
  <v-list lines="three" class="bg-transparent" rounded v-if="chat.getMessages().length > 0" density="compact">
    <ChatMessage v-for="message in chat.getMessages()" :key="message.id" :message="message" />
  </v-list>
</template>
