<script setup lang="ts">
import { computed, ref } from 'vue';

import { useTimelineStore } from '@/stores/timelines';
const timeline = useTimelineStore();

import useChatStore from '@/stores/chat/nuchat.ts';
const chat = useChatStore();


import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import LocalStorageManager from '@/utils/LocalStorageManager';

//createMessage(chatSent.value, userId.value, chatTagSelection.value) // Ad

const userInput = ref('')
const chatTemperature = ref(0.7)

const validBody = computed(() => {
  return userInput.value.trim().length > 0
})

const submitForm = async (event: Event) => {
  event.preventDefault()
  //chat.generateImage(chat.userInput)
  chat.sendGPTMessage(userInput.value)
}

const localStorage = new LocalStorageManager('nuForgeMemory')
const localButtons = ref(localStorage.isEmpty())

const SaveToLocal = () => {
  localStorage.storeItem('chat', chat.chatSent)
  localStorage.storeItem('summary', chat.chatSummary)
  localStorage.storeItem('response', chat.chatResponse)
  localButtons.value = localStorage.isEmpty()
}

const loadLocal = () => {
  chat.chatSent = localStorage.retrieveItem('chat')?.toString() ?? ''
  chat.chatSummary = localStorage.retrieveItem('summary')?.toString() ?? ''
  chat.chatResponse = localStorage.retrieveItem('response')?.toString() ?? ''
  localButtons.value = localStorage.isEmpty()
}
const clearLocal = () => {
  localStorage.clearAllItems()
  localButtons.value = localStorage.isEmpty()
}

const chatMessages = computed(() => chat.previousMessages)
</script>

<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <v-label>Chat Message</v-label>
          <v-textarea v-model="userInput" auto-grow :rows="3" :label="chat.chatGreeting" density="compact"
            @keydown.enter="submitForm" bg-color="background" variant="solo-filled" counter>
            <template #prepend>{{ chat.chatEmoji }}
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
      <v-divider class="my-1 py-1" /> <v-row>
        <v-col>
          <v-label>Response</v-label>
          <MarkdownRenderer :text="chat.chatResponse" />
        </v-col>
      </v-row>
      <v-divider class="my-2 py-2" />
      <v-row>
        <v-col>
          <v-card-actions>
            <v-label>Memory</v-label>
            <v-btn-group variant="text" size="small">
              <v-btn @click="SaveToLocal" icon="mdi-brain"></v-btn>
              <v-btn @click="loadLocal" icon="mdi-memory-arrow-down" :disabled="localButtons"></v-btn>
              <v-btn @click="clearLocal" icon="mdi-nuke" :disabled="localButtons"></v-btn>
            </v-btn-group>
          </v-card-actions>
          <v-textarea v-model="chat.chatSent" auto-grow :rows="1" label="Chat Sent To AI" density="compact"
            bg-color="background" variant="solo" counter prepend-icon="mdi-account" append-icon="mdi-message" flat
            disabled />
          <v-textarea v-model="chat.chatSummary" auto-grow :rows="1" label="Chat Summary To AI" density="compact"
            bg-color="background" counter prepend-icon="mdi-robot" append-icon="mdi-message-bulleted" flat
            variant="solo" disabled />
          <v-progress-circular v-if="chat.isLoading" indeterminate color="warning" size="18" />
          <v-img v-else v-for="image in chat.previousImages" :src="image" :key="image" width="256" height="256" />
        </v-col>
      </v-row>

      <v-divider class="my-2 py-2" />
      <v-row>
        <v-col>
          <v-label>History</v-label>
          <v-timeline :direction="timeline.timelineDirection" truncate-line="both" :side="timeline.timelineSide"
            :hide-opposite="timeline.timelineOpposite">
            <v-timeline-item v-for="message in chatMessages" :key="message.id" :date="message.timestamp"
              dot-color="background" fill-dot :hide-opposite="!timeline.timelineOpposite"
              :icon="message.sender === 'agent' ? 'mdi-robot' : 'mdi-account'">{{ message.content }}
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>

    </v-col>
  </v-row>

</template>
