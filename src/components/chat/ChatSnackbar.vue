<script setup lang="ts">
import { ref } from 'vue';
import useChatStore from '@/stores/chat';
import ChatMessages from '@/components/chat/ChatMessages.vue'
const chat = useChatStore()

const sentButton = ref('mdi-send')

</script>


<template>
  <v-snackbar v-model="chat.snackbar" location="bottom start" :timeout="chat.timeout" timer
    class="ms-12 mb-0 pb-8 ps-3">
    <ChatMessages :messages="chat.messages" />
    <v-textarea v-model="chat.userInput" auto-grow :rows="1" :label="`${chat.greeting}`" density="compact"
      @keydown.enter="chat.sendGPTMessage" bg-color="background" hide-details>
      <template #prepend-inner>{{ chat.emoji }}
      </template>
      <template #append-inner>
        <v-btn v-if="!chat.isLoading" @click="chat.sendGPTMessage" :disabled="!chat.bodyValid" :icon="sentButton" flat
          size="medium" variant="plain" />
        <v-progress-circular v-else indeterminate color="warning" size="18" />
      </template>
    </v-textarea>
  </v-snackbar>
</template>


<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
