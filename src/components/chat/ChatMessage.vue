<script setup lang="ts">
import { ref, computed } from 'vue'
import Tag from '@/objects/NuTag';
import NuTag from '@/components/nu/NuTag.vue';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()
import MarkdownManager from '@/objects/MarkdownManager';
const markdowninator = new MarkdownManager()
import Inator from '@/objects/Inator';
const inator = new Inator()

const props = defineProps<{
  message: {
    id: number;
    text: string;
    sender: string;
    timestamp: string;
  };
}>();


const selection = ref([''])
const filters = ref([...inator.commonStopWords(), ...inator.htmlTags(), ...['wiki', 'wikipedia']])

const wordData = computed(() => markdowninator.cleanAndCountWords(props.message.text, 5, filters.value))
const wordTags = computed(() => wordData.value.map((item) => new Tag(item.word, inator.color(), inator.icon())) as Tag[])

const filteredTags = computed(() => wordTags.value.filter((item) => selection.value.includes(item.name)) as Tag[])

</script>

<template>
  <v-list-item>
    <MarkdownRenderer :text="message.text" :tags="filteredTags" />
    <v-label>{{ message.timestamp }}</v-label>
    <v-chip-group v-model="selection" multiple column>
      <NuTag v-for="tag in wordTags" :key="tag.name" :tag="tag" :value="tag.name" :values="false"
        @dblClick="persona.focusOn(tag)" variant="text" :labels="false" />
    </v-chip-group>
  </v-list-item>
</template>
