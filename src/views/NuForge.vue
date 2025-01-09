<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ChatBase from '@/components/chat/ChatBase.vue';
// import useCardStore from '@/stores/cards';
// const cards = useCardStore();

import useChatStore from '@/stores/chat';
const chat = useChatStore();


const greeted = ref(false)

const greet = () => {
  chat.sendGPTMessage('Ummm... who is this?')
  greeted.value = true
}

onMounted(() => {
  if (!greeted.value || chat.getMessages().length === 0) {

    chat.createMessage('hello World!', 'jenny_everywhere') // Add user message to chat
    //chat.sendGPTMessage()
    //greeted.value = true
  }
})


</script>


<template>
  <v-btn @click="greet()" icon :disabled="greeted">
    <v-icon>mdi-chat</v-icon>
  </v-btn>
  <ChatBase />
</template>
