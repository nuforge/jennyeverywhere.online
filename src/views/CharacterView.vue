<template>
  <v-main>
    <v-container>
      <h2><router-link to="">{{ character.name }}</router-link></h2>
      <v-row>
        <v-col cols="4">
          <v-img :src="image" :alt="character.name" max-height="200" />
        </v-col>
        <v-col cols="8">
          <p>She has short, dark hair. She usually wears aviation goggles on top of her head and a scarf around her
            neck.
            Otherwise, she dresses in comfortable clothes. She is average size and has a good body image. She has loads
            of
            confidence and charisma. She appears to be Asian or Native American. She has a ready smile.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(section, index) in sections" :key="index" cols="auto" md="4">
          <CharacterCard :sections="section.data" :title="section.name" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
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
  powerTouchness: character.value.getAttributes('mtg-pt')
}

const sections = ref([{ name: 'Star Trek Adventures', data: sta }, { name: 'Star Trek CCG', data: stccg }, { name: 'Magic: The Gathering', data: mtg }])


</script>
