<script setup lang="ts">
import useChatStore from '@/stores/chat';
const chat = useChatStore();

const emit = defineEmits(['send'])

const send = () => {
  chat.sendGPTMessage()
  emit('send', chat.userInput)
  chat.userInput = ''
}
</script>

<template>

  <v-card-actions>
    <v-textarea auto-grow clearable variant="solo-filled" :rows="1" v-model="chat.userInput"
      placeholder="Type a message..." @keyup.enter="send" density="compact" :loading="chat.isLoading"
      persistent-counter>
      <template #append>
        <v-btn @click="send" icon="mdi-send" :disabled="chat.userInput.length <= 0"></v-btn>
      </template>
    </v-textarea>
  </v-card-actions>
</template>
