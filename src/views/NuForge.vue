<script setup lang="ts">
import { computed, ref } from 'vue';

import NuTag from '@/components/nu/NuTag.vue';

import Tag from '@/objects/nu/NuTag';

import jennyEverywhere from '@/stores/jenny-everywhere';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
const jenny = jennyEverywhere()
const sentButton = ref('mdi-send')


//import ChatMessage from '@/components/chat/ChatMessage.vue';
// <v-col cols="6">
//       <v-timeline class="bg-transparent" rounded v-if="messages.length > 0" density="compact" truncate-line="end">
//         <ChatMessage v-for="message in messages" :key="message.id" :message="message" class="bg-transparent" />
//       </v-timeline>
//     </v-col>
const messages = computed(() => jenny.getMessages())

const tags = computed(() => {
  return jenny.getTags().map(tag => {
    return new Tag(tag)
  })
})

const selection = ref<Tag[]>([])
const body = ref(jenny.getBody())

</script>

<template>
  <v-textarea v-model="jenny.userInput" auto-grow :rows="1" :v-label="`${jenny.greeting}`" density="compact"
    @keydown.enter="jenny.sendGPTMessage" bg-color="background" hide-details>
    <template #prepend-inner>{{ jenny.emoji }}
    </template>
    <template #append-inner>
      <v-btn v-if="!jenny.isLoading" @click="jenny.sendGPTMessage" :disabled="!jenny.bodyValid" :icon="sentButton" flat
        size="medium" variant="plain" />
      <v-progress-circular v-else indeterminate color="warning" size="18" />
    </template>
  </v-textarea>
  <v-row>
    <v-col cols="4">
      <v-card>
        <v-card-title>
          {{ jenny.getTitle() }}
          <v-icon left>mdi-chat</v-icon>
        </v-card-title>
        <MarkdownRenderer :markdown="body" :tags="tags" />
        {{ body }}
        <v-divider />
        {{ jenny.getSummary() }}
        {{ selection }}
        <v-chip-group v-model="selection" column multiple>
          <NuTag v-for="tag in tags" :key="tag.id" :tag="tag" :value="tag.name" />
        </v-chip-group>
      </v-card>
    </v-col>
    <v-col cols="8">
      <v-divider />
      <v-label>JSON</v-label>
      <v-divider />
    </v-col>
    <v-col cols="8">
      <v-divider />
      <v-label>Messages</v-label>
      {{ messages }}
      <v-divider />
    </v-col>
    <v-col cols="8">
      <v-divider />
      <v-label>Chat</v-label>
      {{ jenny.chatSent }}
      <v-divider />
    </v-col>
    <v-col cols="8">
      <v-divider />
      <v-label>Response</v-label>
      {{ jenny.chatResponse }}
      <v-divider />
    </v-col>
  </v-row>

  sd: {{ jenny.chatSent }}
</template>
