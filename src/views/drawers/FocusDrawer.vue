<template>
  <v-navigation-drawer v-model="persona.drawer" app right width="300">

    <v-card>
      <v-card-title>
        <v-icon @click="persona.drawer = !persona.drawer">mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <EvTrayCard :tags="(persona.focus.tags as Tag[])" />
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

import { usePersonaStore } from '@/stores/persona';
import EvTrayCard from '@/components/tags/EvTrayCard.vue';
import Tag from '@/objects/Tag.ts';
const persona = usePersonaStore()

</script>
