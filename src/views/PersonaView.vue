<template>
  <v-container>
    <h2><router-link to="">{{ character.name }}</router-link></h2>
    <v-card>
      <v-card-title>Attributes</v-card-title>
      <v-chip-group column>
        <v-tag v-for="(tag, index) in character.attributes" :key="index" :value="tag.id" :label="tag.icon"
          :icon="tag.icon" tooltip noLabel>
        </v-tag>
      </v-chip-group>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Persona from '@/objects/Persona';

const character = ref(new Persona('Jenny Everywhere'))

character.value.addTag('Time Traveler')
character.value.addAttribute('account', 'Jenny Everywhere')
character.value.addAttribute('occupation', 'Painter')
character.value.addAttribute('primary', 'primary')




</script>
