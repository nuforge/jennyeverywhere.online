<script setup lang="ts">
import { ref } from 'vue';

import NuTag from '@/components/nu/NuTag.vue';

import Tag from '@/objects/nu/NuTag';

import jennyEverywhere from '@/stores/jenny-everywhere';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import PersonaAvatar from '@/components/persona/PersonaAvatar.vue';
const jenny = jennyEverywhere()
const sentButton = ref('mdi-send')


//import ChatMessage from '@/components/chat/ChatMessage.vue';
// <v-col cols="6">
//       <v-timeline class="bg-transparent" rounded v-if="messages.length > 0" density="compact" truncate-line="end">
//         <ChatMessage v-for="message in messages" :key="message.id" :message="message" class="bg-transparent" />
//       </v-timeline>
//     </v-col>
const messages = ref(jenny.messages.reverse())

const phoenix = new Tag('phoenix', 'warning', 'mdi-fire')

const selection = ref<string[]>([])

</script>

<template>
  <v-textarea v-model="jenny.userInput" auto-grow :rows="1" :label="`${jenny.greeting}`" density="compact"
    @keydown.enter="jenny.sendGPTMessage(selection)" bg-color="background" variant="solo" counter>
    <template #prepend-inner>{{ jenny.emoji }}
    </template>
    <template #append-inner>
      <v-btn v-if="!jenny.isLoading" @click="jenny.sendGPTMessage(selection)" :disabled="!jenny.bodyValid"
        :icon="sentButton" flat size="medium" variant="plain" />
      <v-progress-circular v-else indeterminate color="warning" size="18" />
    </template>
  </v-textarea>
  <v-row>
    <v-col cols="3">
      <v-label>Tags</v-label>
      <v-spacer />
      <NuTag :key="phoenix.label" :tag="phoenix" :value="phoenix.label" v-model="selection" />
    </v-col>
    <v-col cols="9">
      <v-card v-for="message in messages" :key="message.id" class="ma-2 px-4 rounded-lg bg-background border-s-lg"
        :border="message.sender === 'jenny_everywhere' ? 'primary' : 'none'"
        :flat="message.sender !== 'jenny_everywhere'">
        <v-card-text class="d-flex ga-4" v-if="message.sender === 'jenny_everywhere'">
          <PersonaAvatar v-if="message.sender === 'jenny_everywhere'" size="large" />
          <MarkdownRenderer :text="message.text" :tags="message.tags?.filter(tag => selection.includes(tag.label))"
            :class="message.sender === 'jenny_everywhere' ? undefined : 'opacity-60 text-center mx-auto'" />
        </v-card-text>
        <v-card-text class="d-flex ga-4" v-else>
          <PersonaAvatar v-if="message.sender === 'jenny_everywhere'" size="large" />
          <MarkdownRenderer :text="message.text" :tags="message.tags?.filter(tag => selection.includes(tag.label))"
            :class="message.sender === 'jenny_everywhere' ? undefined : 'opacity-60 text-center mx-auto'" />
        </v-card-text>
        <v-card-actions v-if="message.tags && message.tags.length > 0">
          <v-chip-group v-model="selection" column multiple>
            <NuTag v-for="tag in message.tags" :key="tag.label" :tag="(tag as Tag)" :value="tag.label" variant="text"
              :labels="false" />
          </v-chip-group>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
