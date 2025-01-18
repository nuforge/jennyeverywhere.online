<script setup lang="ts">
import NuTag from '@/components/nutag/NuTag.vue';

import useCardStore from '@/stores/playingcards';
const cards = useCardStore()

const deck = cards.deck
console.log(deck)
</script>

<template>
  <v-container>
    <v-btn-group>
      <v-btn @click="cards.shuffleDeck">Shuffle</v-btn>
      <v-btn @click="cards.resetDeck">Reset</v-btn>
    </v-btn-group>
    <v-spacer />

    <NuTag v-for="card in deck" :key="card.id" :tag="(card as Tag)" :badges="true" />
  </v-container>

</template>
