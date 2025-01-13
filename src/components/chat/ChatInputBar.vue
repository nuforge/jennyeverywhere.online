<script setup lang="ts">
import { ref, nextTick, watch } from 'vue';
import jennyEverywhere from '@/stores/jenny-everywhere';
const jenny = jennyEverywhere()

const sentButton = ref('mdi-send')

watch(() => jenny.messages, () => {
  nextTick(function () {
    const div = document.getElementById('chat-list-snackbar');
    return div ? div.scrollTop = div?.scrollHeight : null;
  })
})

</script>

<template>

  <v-card-actions>
    <v-textarea v-model="jenny.userInput" :rows="1" :label="`${jenny.greeting}`" density="compact"
      @keydown.enter.exact.prevent="jenny.sendGPTMessage" bg-color="background" :loading="jenny.isLoading"
      variant="solo-filled" auto-grow persistent-counter>
      <template #prepend-inner>
        <span v-if="!jenny.isLoading" class="text-h6 ">{{
          jenny.emoji }}</span>
        <v-progress-circular v-else indeterminate color="accent" size="18" />
      </template>
      <template #append-inner>
        <v-btn @click="jenny.sendGPTMessage" :disabled="!jenny.bodyValid" :icon="sentButton" flat size="medium"
          variant="plain" />
      </template>
    </v-textarea>
  </v-card-actions>
</template>
