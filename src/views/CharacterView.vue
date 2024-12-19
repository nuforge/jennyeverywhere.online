<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          {{ character.name }}
        </v-col>
        <v-col cols="12" md="8">
          <v-tag v-for="(attribute, index) in character.attributes" :key="index" :text="attribute.name"
            :icon="attribute.icon" :color="attribute.color" :value="attribute.value?.toString()">
          </v-tag>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Character from '@/game/Character'
import Attribute from '@/game/Attribute';

const character = ref(new Character('Jenny Everywhere'))

character.value.addAttribute(new Attribute('Strength', 10, 'mdi-sword', 'primary'))

</script>
