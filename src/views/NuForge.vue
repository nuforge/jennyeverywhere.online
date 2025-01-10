<script setup lang="ts">
import { ref } from 'vue';
import NuTag from '@/components/nu/NuTag.vue';
import { useMemoryStore } from '@/stores/memory';
const memory = useMemoryStore()

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()

import Meme from '@/objects/Meme';
import Inator from '@/objects/Inator';

const inator = new Inator()

type sortBy = 'score' | 'last' | 'creation'
const sort = ref<sortBy>('score')


const firstMemory = inator.ntag() as Meme
memory.addMeme(firstMemory)

const addMemory = () => {
  const newMemory = inator.ntag() as Meme
  memory.addMeme(newMemory)
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-wrap ga-2">
        <v-btn-toggle v-model="sort" variant="tonal">
          <v-btn value="score" icon="mdi-sort"></v-btn>
          <v-btn value="last" icon="mdi-sort-clock-descending"></v-btn>
          <v-btn value="creation" icon="mdi-sort-calendar-descending"></v-btn>
        </v-btn-toggle>
        <v-btn @click="addMemory">Add Memory</v-btn>
        <v-divider />
        <NuTag v-for="tag in memory.getMemories(-1, sort)" :key="tag.id" :tag="tag" elevation="2"
          @click="persona.focusOn(tag)" @double-click="addMemory" />
      </v-col>
    </v-row>
  </v-container>
</template>
