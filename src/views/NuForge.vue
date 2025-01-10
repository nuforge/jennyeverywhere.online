<script setup lang="ts">
import NuTag from '@/components/nu/NuTag.vue';
import { useMemoryStore } from '@/stores/memory';
const memory = useMemoryStore()

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()

import Meme from '@/objects/Meme';
import Inator from '@/objects/Inator';

const inator = new Inator()


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
        <NuTag v-for="tag in memory.getMemories()" :key="tag.id" :tag="tag" elevation="2" @click="persona.focusOn(tag)"
          @double-click="addMemory" />
      </v-col>
    </v-row>
  </v-container>
</template>
