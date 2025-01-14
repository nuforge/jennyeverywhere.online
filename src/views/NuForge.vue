<script setup lang="ts">
import useChatStore from '@/stores/chat';
const chat = useChatStore();

import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

//createMessage(chatSent.value, userId.value, chatTagSelection.value) // Ad

const submitForm = async (event: Event) => {
  event.preventDefault()

  //chat.generateImage(chat.userInput)
  chat.sendGPTMessage()
}

</script>

<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <v-textarea v-model="chat.userInput" auto-grow :rows="1" :label="`${chat.chatGreeting}`" density="compact"
            @keydown.enter="submitForm" bg-color="background" variant="solo-filled" counter>
            <template #prepend-inner>{{ chat.chatEmoji }}
            </template>
            <template #append-inner>
              <v-btn v-if="!chat.isLoading" @click="submitForm" :disabled="!chat.bodyValid" icon="mdi-send" flat
                size="medium" variant="plain" />
              <v-progress-circular v-else indeterminate color="warning" size="18" />
            </template>
          </v-textarea>

          <v-label>Temperature</v-label>
          <v-slider v-model="chat.settingTemperature" min="0" max="2" step="0.01" :thumb-label="true" />
          <v-checkbox v-model="chat.clearOnSubmit" label="Clear On Submit" density="compact" />
        </v-col>
        <v-col>
          <v-textarea v-model="chat.chatSent" auto-grow :rows="1" label="Chat Sent To AI" density="compact"
            bg-color="background" variant="solo" counter prepend-icon="mdi-account" prepend-inner-icon="mdi-message"
            flat />
          <v-textarea v-model="chat.chatSummary" auto-grow :rows="1" label="Chat Summary To AI" density="compact"
            bg-color="background" variant="solo" counter prepend-icon="mdi-robot-outline"
            prepend-inner-icon="mdi-message-bulleted" flat />
          <v-progress-circular v-if="chat.imageLoading" indeterminate color="warning" size="18" />
          <v-img v-else v-for="image in chat.imageUrls" :src="image" :key="image" width="256" height="256" />
        </v-col>
      </v-row>
      <v-divider class="my-2 py-2" />
      <v-row>
        <v-col>
          <v-label>Response</v-label>
          <MarkdownRenderer :text="chat.streamResponse" />
        </v-col>
      </v-row>


    </v-col>
  </v-row>

</template>
