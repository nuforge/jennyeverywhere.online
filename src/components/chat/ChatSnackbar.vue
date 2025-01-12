<script setup lang="ts">
import { nextTick, watch } from 'vue';
import jennyEverywhere from '@/stores/jenny-everywhere';
import ChatMessageCards from '@/components/chat/ChatMessageCards.vue';
import ChatInputBar from '@/components/chat/ChatInputBar.vue';
const jenny = jennyEverywhere()



watch(() => jenny.messages, () => {
  nextTick(function () {
    const div = document.getElementById('chat-list-snackbar');
    return div ? div.scrollTop = div?.scrollHeight : null;
  })
})

</script>

<template>
  <v-snackbar app v-model="jenny.snackbar" location="bottom start" :timeout="-1" timer class="ms-16 ps-2"
    content-class="rounded-lg">
    <!--ChatMessageCards /-->
    <ChatInputBar />
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
