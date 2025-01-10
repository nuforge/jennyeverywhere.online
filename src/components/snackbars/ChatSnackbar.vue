<script setup lang="ts">

import { ref } from 'vue'

import useChatStore from '@/stores/state';

const chat = useChatStore()
const open = ref(true)
const greeting = ref(`New reality... who this ?`)
const emoji = ref(`🤔`)

</script>


<template>
  <v-snackbar v-model="open" location="bottom start" permanent :timeout="-1" content-class="bg-background"
    :timer="chat.isLoading" variant="plain" eager open-delay="3000">
    <v-label>
      @<router-link to="/">JennyEverywhere.online</router-link>
    </v-label>
    <v-text-field v-model="chat.userInput" :label="greeting" density="compact" variant="solo" clearable
      append-inner-icon="mdi-emoticon-outline" :disabled="chat.bodyValid">
      <template #prepend-inner>
        {{ emoji }}
      </template>
    </v-text-field>
    <v-label>
      :<router-link to="/">Whoever you are?</router-link>
    </v-label>
  </v-snackbar>
</template>


<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
