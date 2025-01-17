<script setup lang="ts">
import { computed, ref } from 'vue';

import useChatStore from '@/stores/chat/nuchat.ts';
const chat = useChatStore();

import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import LocalStorageManager from '@/utils/LocalStorageManager';

//createMessage(chatSent.value, userId.value, chatTagSelection.value) // Ad

const userInput = ref('')
const chatTemperature = ref(0.7)

const localStorage = new LocalStorageManager('nuForgeMemory')
const localButtons = ref(localStorage.isEmpty())

const validBody = computed(() => {
  return userInput.value.trim().length > 0
})

const submitForm = async (event: Event) => {
  event.preventDefault()
  //chat.generateImage(chat.userInput)

  await chat.sendGPTMessage(userInput.value).
    then((response) => {
      localStorage.storeItem('tags', response?.tags.join(',') || '')

      SaveToLocal()
    })
  if (chat.clearOnSubmit) {
    userInput.value = ''
  }
}

const SaveToLocal = () => {
  localStorage.storeItem('chat', chat.chatSent)
  localStorage.storeItem('summary', chat.chatSummary)
  localStorage.storeItem('response', chat.chatResponse)
  localButtons.value = localStorage.isEmpty()
}

</script>

<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <v-label>Chat Message</v-label>
          <v-textarea v-model="userInput" auto-grow :rows="3" :label="chat.chatGreeting" density="compact"
            @keydown.enter="submitForm" bg-color="background" variant="solo-filled" counter
            prepend-icon="mdi-chat-outline">
            <template #prepend-inner>{{ chat.chatEmoji }}
            </template>
            <template #append-inner>
              <v-btn v-if="!chat.isLoading" @click="submitForm" :disabled="!validBody" icon="mdi-send" flat
                size="medium" variant="plain" />
              <v-progress-circular v-else indeterminate color="warning" size="18" />
            </template>
          </v-textarea>
        </v-col>
        <v-col>
          <v-label>Temperature:</v-label> {{ chatTemperature }}
          <v-slider v-model="chatTemperature" min="0.00" max="2.00" step="0.01" prepend-icon="mdi-thermometer"
            disabled />
          <v-checkbox v-model="chat.clearOnSubmit" label="Clear On Submit" density="compact" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-label>Response</v-label>
          <MarkdownRenderer :text="chat.chatResponse" />
        </v-col>
      </v-row>

    </v-col>
  </v-row>

</template>
