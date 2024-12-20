<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" sm="2">
        <h2><router-link to="">{{ character.name }}</router-link></h2>
        <v-img :src="image" :alt="character.name" max-height="256" />
      </v-col>
      <v-col v-for="(section, index) in sections" :key="index" cols="12" md="6" sm="4">
        <CharacterCard :sections="section.data" :title="section.name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue';
import JennyEverywhere from '@/game/JennyEverywhere';


import image from '@/assets/images/characters/jenny-everywhere.png'


const character = ref(JennyEverywhere)


const sta = {
  character: character.value.getAttributes('sta-character'),
  attributes: character.value.getAttributes('sta-attribute'),
  departments: character.value.getAttributes('sta-department'),
  traits: character.value.getAttributes('sta-trait'),
  talents: character.value.getAttributes('sta-talent'),
  values: character.value.getAttributes('sta-value'),
  focuses: character.value.getAttributes('sta-focus'),
}

const stccg = {
  card: character.value.getAttributes('stccg-card'),
  attributes: character.value.getAttributes('stccg-attribute'),
  skills: character.value.getAttributes('stccg-skill'),
  icons: character.value.getAttributes('stccg-icon')
}
const mtg = {
  card: character.value.getAttributes('mtg-card'),
  type: character.value.getAttributes('mtg-type'),
  abilities: character.value.getAttributes('mtg-ability'),
  powerToughness: character.value.getAttributes('mtg-pt')
}

const sections = ref([{ name: 'Magic: The Gathering', data: mtg }, { name: 'Star Trek Adventures', data: sta }, { name: 'Star Trek CCG', data: stccg },])


</script>
