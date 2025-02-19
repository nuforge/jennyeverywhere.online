<script setup lang="ts">
import { ref, watch } from 'vue';
import NuCard from '@/objects/game/card/NuCard';
import NuTag from '@/components/nutag/NuTag.vue';

import useCardStore from '@/stores/playingcards';
const cards = useCardStore()

const deck = useCardStore().deck
const hand = useCardStore().hand

const drawn = ref()
const shuffleDeck = () => {
  cards.shuffle()
}

const resetDeck = () => {
  cards.reset()
}

const drawCard = () => {
  drawn.value = cards.draw(1)[0]
}

watch(() => deck.length, () => {
})
</script>

<template>
  <v-container>
    <v-btn-group>
      <v-btn @click="shuffleDeck">Shuffle</v-btn>
      <v-btn @click="resetDeck">Reset</v-btn>
      <v-btn @click="drawCard">Draw</v-btn>
    </v-btn-group>
    <NuTag v-if="drawn" :tag="drawn" @click.right="drawCard()" />
    <v-divider>Hand</v-divider>
    <NuTag v-for="card in hand.cards" :key="card.name" :tag="(card as NuCard)" />
    <v-divider>Library</v-divider>
    <NuTag v-for="card in deck.cards" :key="card.name" :tag="(card as NuCard)" />
  </v-container>

</template>
