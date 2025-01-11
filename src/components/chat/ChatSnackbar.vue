<script setup lang="ts">
import { ref } from 'vue';
import jennyEverywhere from '@/stores/jenny-everywhere';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import PersonaAvatar from '@/components/persona/PersonaAvatar.vue';
import NuTag from '@/components/nu/NuTag.vue';
import Tag from '@/objects/nu/NuTag';
const jenny = jennyEverywhere()
const selection = ref<string[]>([])

const messages = ref(jenny.messages)
const sentButton = ref('mdi-send')

function isJenny(sender: string) {
  return sender === 'jenny_everywhere'
}

</script>

<template>
  <v-snackbar v-model="jenny.snackbar" location="bottom start" :timeout="jenny.timeout" timer class=""
    content-class="bg-white">
    <v-card v-for="message in messages" :key="message.id" :flat="message.sender !== 'jenny_everywhere'">
      <v-card-text v-if="isJenny(message.sender)" class="d-flex ga-2 bg-background border-s-lg px-2 py-2 rounded-lg "
        :border="isJenny(message.sender) ? 'primary opacity-50' : 'none'">
        <PersonaAvatar size="large" />
        {{ jenny.emoji }}
        <MarkdownRenderer :text="message.text"
          :tags="(message.tags as Tag[])?.filter((tag: Tag) => selection.includes(tag.label))" />
      </v-card-text>
      <v-card-text v-else>
        <MarkdownRenderer :text="message.text" class="text-center pa-1 align-center mx-auto" />
      </v-card-text>
      <v-chip-group v-model="selection" column multiple>
        <NuTag v-for="tag in message.tags" :key="tag.label" :tag="(tag as Tag)" :value="tag.label" :labels="false"
          size="small" />
      </v-chip-group>
    </v-card>
    <v-textarea v-model="jenny.userInput" auto-grow :rows="1" :label="`${jenny.greeting}`" density="compact"
      @keydown.enter="jenny.sendGPTMessage" bg-color="background" hide-details>
      <template #prepend-inner>{{ jenny.emoji }}
      </template>
      <template #append-inner>
        <v-btn v-if="!jenny.isLoading" @click="jenny.sendGPTMessage" :disabled="!jenny.bodyValid" :icon="sentButton"
          flat size="medium" variant="plain" />
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
