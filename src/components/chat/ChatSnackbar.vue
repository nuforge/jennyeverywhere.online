<script setup lang="ts">
import { ref, nextTick, watch } from 'vue';
import jennyEverywhere from '@/stores/jenny-everywhere';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import PersonaAvatar from '@/components/persona/PersonaAvatar.vue';
import NuTag from '@/components/nu/NuTag.vue';
import Tag from '@/objects/nu/NuTag';
const jenny = jennyEverywhere()

const messages = ref(jenny.messages)
const sentButton = ref('mdi-send')

function isJenny(sender: string) {
  return sender === 'jenny_everywhere'
}


watch(() => jenny.messages, () => {
  nextTick(function () {
    const div = document.getElementById('chat-list-snackbar');
    return div ? div.scrollTop = div?.scrollHeight : null;
  })
})

</script>

<template>
  <v-snackbar app v-model="jenny.snackbar" location="bottom start" :timeout="jenny.timeout" timer class="ms-16 ps-2"
    content-class="bg-white">
    <v-container class=" scroll-container overflow-y-auto ma-0 mb-2 pa-0 " max-height="80vh" max-width="40vw"
      id="chat-list-snackbar" elevation="2">
      <v-card v-for="message in messages" :key="message.id" :flat="message.sender !== 'jenny_everywhere'">
        <v-card-text v-if="isJenny(message.sender)"
          class="d-flex ga-2 bg-background border-s-lg px-2 py-2 rounded-t-lg "
          :border="isJenny(message.sender) ? 'primary opacity-50' : 'none'">
          <PersonaAvatar size="large" />
          <MarkdownRenderer :text="message.text"
            :tags="(message.tags as Tag[])?.filter((tag: Tag) => jenny.chatTagSelection.includes(tag.label))" />
        </v-card-text>
        <v-card-text v-else>
          <MarkdownRenderer :text="message.text" class="text-center pa-1 align-center mx-auto " />
        </v-card-text>
        <v-chip-group v-model="jenny.chatTagSelection" column multiple class="rounded-b-lg bg-background pa-0 mb-0 ">
          <NuTag v-for="tag in message.tags" :key="tag.label" :tag="(tag as Tag)" :value="tag.label" :labels="false"
            size="small" variant="plain" />
        </v-chip-group>
      </v-card>

    </v-container><v-textarea v-model="jenny.userInput" auto-grow :rows="1" :label="`${jenny.greeting}`"
      density="compact" @keydown.enter.prevent="jenny.sendGPTMessage" bg-color="background" hide-details>
      <template #prepend-inner>

        <span v-if="!jenny.isLoading" class="text-h6 text-shadow bg-background rounded-circle elevation-1">{{
          jenny.emoji }}</span>
        <v-progress-circular v-else indeterminate color="accent" size="18" />
      </template>
      <template #append-inner>
        <v-btn @click="jenny.sendGPTMessage" :disabled="!jenny.bodyValid" :icon="sentButton" flat size="medium"
          variant="plain" />
      </template>
    </v-textarea>
  </v-snackbar>
</template>


<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

/* Initial state */
.scroll-container {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--color-background) transparent;
  /* Initially transparent */
  transition: scrollbar-color 0.3s ease;
}

.scroll-container::-webkit-scrollbar {
  width: 8px;
  transition: opacity 0.3s ease;
  opacity: 0;
  /* Initially hidden */
}

.scroll-container::-webkit-scrollbar-thumb {
  /* Thumb color */
  border-radius: 8px;
}


/* Show on hover or focus */
.scroll-container:hover,
.scroll-container:focus {
  scrollbar-width: thin;
  scrollbar-color: var(--color-background) transparent;
  /* Show thumb and track */
}

.scroll-container:hover::-webkit-scrollbar,
.scroll-container:focus::-webkit-scrollbar {
  opacity: 1;
  /* Make visible */
}
</style>
