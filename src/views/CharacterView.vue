<template>
  <v-main>
    <v-container>
      <h2><router-link to="">{{ character.name }}</router-link></h2>

      <v-row>
        <v-col cols="auto" md="6">
          <v-img :src="image" :alt="character.name" />
        </v-col>
        <v-col cols="auto" md="6">
          <CharacterCard :sections="sta" title="Star Trek Adventures" />
        </v-col>
        <v-col cols="12" md="6">
          <CharacterCard :sections="stccg" title="Star Trek CCG" />
        </v-col>
        <v-col cols="12" md="6">
          <CharacterCard :sections="mtg" title="Magic: the Gathering" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Character from '@/game/Character'
import Attribute from '@/game/Attribute';
import CharacterCard from '@/components/CharacterCard.vue';


import image from '@/assets/images/characters/jenny-everywhere.png'

const character = ref(new Character('Jenny Everywhere'))



// STAR TREK ADVENTURES

character.value.addAttribute(new Attribute('Control', 8, '$sta-control', 'var(--sta-teal)'), 'sta-attribute')
character.value.addAttribute(new Attribute('Fitness', 7, '$sta-fitness', 'var(--sta-teal)'), 'sta-attribute')
character.value.addAttribute(new Attribute('Daring', 11, '$sta-daring', 'var(--sta-teal)'), 'sta-attribute')
character.value.addAttribute(new Attribute('Presence', 10, '$sta-presence', 'var(--sta-teal)'), 'sta-attribute')
character.value.addAttribute(new Attribute('Insight', 11, '$sta-insight', 'var(--sta-teal)'), 'sta-attribute')
character.value.addAttribute(new Attribute('Reason', 9, '$sta-reason', 'var(--sta-teal)'), 'sta-attribute')

character.value.addAttribute(new Attribute('Command', 2, '$sta-command', 'var(--sta-command)'), 'sta-department')
character.value.addAttribute(new Attribute('Conn', 5, '$sta-conn', 'var(--sta-conn)'), 'sta-department')
character.value.addAttribute(new Attribute('Engineering', 4, '$sta-engineering', 'var(--sta-engineering)'), 'sta-department')
character.value.addAttribute(new Attribute('Security', 1, '$sta-security', 'var(--sta-security)'), 'sta-department')
character.value.addAttribute(new Attribute('Medicine', 1, '$sta-medicine', 'var(--sta-medicine)'), 'sta-department')
character.value.addAttribute(new Attribute('Science', 3, '$sta-science', 'var(--sta-science)'), 'sta-department')

character.value.addAttribute(new Attribute('Species: Hologram', undefined, '$sta-species', 'var(--sta-trait)'), 'sta-trait')
character.value.addAttribute(new Attribute('Determined', undefined, '$sta-trait',), 'sta-trait')

// MTG

character.value.addAttribute(new Attribute('Casting Cost', 3, 'mdi-numeric-3-circle'), 'mtg')
character.value.addAttribute(new Attribute('Artifact Creature', undefined, 'mdi-account-box-outline'), 'mtg')
character.value.addAttribute(new Attribute('Indestructible', undefined, 'mdi-star-four-points-outline'), 'mtg')
character.value.addAttribute(new Attribute('Power', 0, 'mdi-sword', 'var(--sta-teal)'), 'mtg')
character.value.addAttribute(new Attribute('Toughness', 0, 'mdi-shield', 'var(--sta-teal)'), 'mtg')

// STAR TREK CCG
character.value.addAttribute(new Attribute('Card Type', 'Personnel', 'mdi-cards-outline', 'text'), 'stccg-card')
character.value.addAttribute(new Attribute('Affiliation', 'Federation', 'mdi-web', 'var(--sta-blue)'), 'stccg-card')
character.value.addAttribute(new Attribute('Property', 'Star Trek Everywhere', 'mdi-label-variant-outline', 'var(--sta-teal)'), 'stccg-card')
character.value.addAttribute(new Attribute('Classification', 'Engineer', 'mdi-badge-account-outline', 'var(--sta-gold)'), 'stccg-card')

character.value.addAttribute(new Attribute('Expansion', 'JennyEverywhere.online', 'mdi-link-box-outline', 'text'), 'stccg-card')

character.value.addAttribute(new Attribute('Integrity', 9, 'mdi-circle-box', 'var(--sta-blue)'), 'stccg-attribute')
character.value.addAttribute(new Attribute('Cunning', 7, 'mdi-circle-box', 'var(--sta-teal)'), 'stccg-attribute')
character.value.addAttribute(new Attribute('Strength', 2, 'mdi-circle-box', 'var(--sta-red)'), 'stccg-attribute')

character.value.addAttribute(new Attribute('NAVIGATION', undefined, 'mdi-circle-medium', 'var(--sta-red)'), 'stccg-skills')
character.value.addAttribute(new Attribute('Engineer x2', undefined, 'mdi-circle-medium', 'var(--sta-red)'), 'stccg-skills')
character.value.addAttribute(new Attribute('Wormhole', undefined, 'mdi-triangle-small-down', 'var(--sta-red)'), 'stccg-skills')

character.value.addAttribute(new Attribute('Staff', undefined, 'mdi-star-four-points-outline', 'silver'), 'stccg-icons')
character.value.addAttribute(new Attribute('Holographic', undefined, 'mdi-atom', 'var(--sta-gold)'), 'stccg-icons')
character.value.addAttribute(new Attribute('Alternate Reality', undefined, 'mdi-all-inclusive-box', 'var(--sta-red)'), 'stccg-icons')



const sta = {
  attributes: character.value.getAttributes('sta-attribute'),
  departments: character.value.getAttributes('sta-department'),
  traits: character.value.getAttributes('sta-trait')
}


const stccg = {
  card: character.value.getAttributes('stccg-card'),
  attributes: character.value.getAttributes('stccg-attribute'),
  skills: character.value.getAttributes('stccg-skills'),
  icons: character.value.getAttributes('stccg-icons')
}
const mtg = {
  icons: character.value.getAttributes('mtg')
}


console.log(mtg)

</script>
