<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" sm="6" lg="3">
        <h2><router-link to="/">{{ character.name }}</router-link></h2>
        <v-img :src="image" :alt="character.name" max-height="256" />
      </v-col>
      <v-card class="elevation-8 border-b-sm border-e-md rounded-b-lg" variant="text">
        <v-card-text>
          <v-chip-group column variant="elevated">
            <v-tag v-for="(tag, index) in character.attributes" :key="index" :icon="tag.icon" :color="tag.color"
              :label="tag.name" :value="tag.id" @click="tags.addTag(tag)">
            </v-tag>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JennyEverywhere from '@/game/characters/JennyEverywhere.ts';
import image from '@/assets/images/characters/jenny-everywhere.png'

import { useTagStore } from '@/stores/tags';
const tags = ref(useTagStore())


const character = ref(JennyEverywhere)
// const newbie = ref(Newbie)




</script>
