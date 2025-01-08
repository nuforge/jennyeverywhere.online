<script setup lang="ts">
import useChatStore from '@/stores/chat';
const chat = useChatStore();

const emit = defineEmits(['send'])


const send = () => {
  chat.sendMessage()
  emit('send', chat.userInput)
  chat.userInput = ''
}
</script>

<template>
  <v-card-actions>
    <v-text-field type=" text" v-model="chat.userInput" placeholder="Type a message..." @keyup.enter="send"
      density="compact">
      <template #append>
        <v-btn @click="send" icon="mdi-send" :disabled="chat.userInput.length <= 0"></v-btn>
      </template>
    </v-text-field>
  </v-card-actions>
</template>
