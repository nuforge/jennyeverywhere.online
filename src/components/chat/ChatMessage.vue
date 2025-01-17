<script setup lang="ts">
const USER_LABEL = 'user'
const AGENT_LABEL = 'jenny_everywhere'

import { ref, computed } from 'vue'
import commonStopWords from '@/assets/words/stopwords.common.json'
import HTMLTags from '@/assets/words/html.tags.json'
import Tag from '@/objects/nu/Tag';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

import PersonaAvatar from '@/components/persona/PersonaAvatar.vue';

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()
import MarkdownManager from '@/objects/MarkdownManager';
const markdowninator = new MarkdownManager()
import Inator from '@/objects/Inator';
const inator = new Inator()

const props = defineProps<{
  message: {
    id: number;
    content: string;
    sender: string;
    timestamp: Date;
  };
}>();


const selection = ref([''])
const filters = ref([...commonStopWords, ...HTMLTags])

const wordData = computed(() => markdowninator.cleanAndCountWords(props.message.content, 5, filters.value))
const wordTags = computed(() => wordData.value.map((item) => new Tag(item.word, inator.color(), inator.icon())) as Tag[])

const isUser = computed(() => props.message.sender === USER_LABEL)
const isAgent = computed(() => props.message.sender === AGENT_LABEL)

function shuffleArray(array: Tag[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const filteredTags = computed(() => shuffleArray(wordTags.value.filter((item) => selection.value.includes(item.name)) as Tag[]))

</script>

<template>
  <v-timeline-item size="large" dot-color="background" fill-dot>
    <template #icon>
      <v-icon v-if="isUser" icon="mdi-chat"></v-icon>
      <PersonaAvatar v-if="isAgent" />
    </template>
    <MarkdownRenderer :text="message.content" :tags="filteredTags" class="pa-2 rounded-lg" />
    <v-label>{{ message.timestamp }}</v-label>
    <v-chip-group v-model="selection" multiple column>
      <NuTag v-for=" tag in wordTags" :key="tag.label" :tag="tag" :value="tag.label" :values="false"
        @dblClick="persona.focusOn(tag)" :labels="false" :colors="!selection.includes(tag.label)" variant="plain" />
    </v-chip-group>

  </v-timeline-item>
</template>
