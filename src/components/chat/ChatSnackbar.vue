<script setup lang="ts">
import useChatStore from '@/stores/chat';
import ChatMessages from '@/components/chat/ChatMessages.vue'
const chat = useChatStore()

</script>


<template>
  <v-snackbar v-model="chat.snackbar" location="bottom start" :timeout="chat.timeout" timer
    class="ms-12 mb-0 pb-8 ps-3">
    <ChatMessages :messages="chat.messages" />
    <v-label>
      @<router-link to="/">JennyEverywhere.online</router-link>
    </v-label>
    <v-text-field v-model="chat.userInput" :label="chat.greeting" density="compact" variant="solo-filled" clearable
      append-inner-icon="mdi-emoticon-outline" auto-grow @keydown.enter="chat.sendGPTMessage">
      <template #prepend-inner>
        {{ chat.emoji }}
      </template>
    </v-text-field>
  </v-snackbar>
</template>


<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
