<script setup lang="ts">
import { ref, computed } from 'vue'
import NuTag from '@/components/nu/NuTag.vue';
import ChatMessage from '@/components/chat/ChatMessage.vue'
import Tag from '@/objects/NuTag';

import Inator from '@/objects/Inator';
const inator = new Inator()

import useChatStore from '@/stores/chat';
const chat = useChatStore();

import useDiceStore from '@/stores/dice';
const dice = useDiceStore()

import MarkdownManager from '@/objects/MarkdownManager';
const markdowninator = new MarkdownManager()

const selection = ref([''])

const randomNumber = ref(dice.getResults() as number)
const filters = ref([...inator.commonStopWords(), ...inator.htmlTags(), ...['wiki', 'wikipedia']])

const wordData = computed(() => markdowninator.cleanAndCountWords(chat.chatResponse, randomNumber.value * 2, filters.value))
const wordTags = computed(() => wordData.value.map((item) => new Tag(item.word, inator.color(), inator.icon())) as Tag[])

</script>

<template>
  <v-list rounded v-if="chat.getMessages().length > 0">
    <ChatMessage v-for="message in chat.getMessages()" :key="message.id" :message="message" :tags="wordTags" />
    <v-chip-group v-model="selection" multiple>
      <NuTag v-for="item in wordTags" :key="item.name" :tag="new Tag(item.name, inator.color(), inator.icon())"
        variant="text" :value="item.name" :values="false" @click="console.log('yo')" />
    </v-chip-group>
  </v-list>
</template>
