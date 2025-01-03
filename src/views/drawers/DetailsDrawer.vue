<template>
  <v-navigation-drawer v-model="state.details" app right width="300">

    <v-card>
      <v-card-title>
        <v-icon @click="state.details = !state.details">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <EvTagCard :tags="(persona.focus.tags as Tag[])" />
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

import { usePersonaStore } from '@/stores/persona';
import { useStateStore } from '@/stores/state';
import EvTagCard from '@/components/tags/EvTrayCard.vue';
import Tag from '@/objects/Tag.ts';
const state = useStateStore()
const persona = usePersonaStore()

</script>
