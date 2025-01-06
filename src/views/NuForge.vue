<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()

import useDiceStore from '@/stores/dice';
const dice = useDiceStore()
// import useCardStore from '@/stores/cards';
// const cards = useCardStore()

import NuTag from '@/components/nu/NuTag.vue';
import Tag from '@/objects/NuTag';
//import NuCard from '@/objects/game/NuCard.ts';

// import Inator from '@/objects/Inator';
// const inator = new Inator()

const randomNumber = ref(dice)

//const card = new NuCard('Ace:Spaces', 'primary', 'mdi-cards-spade')

const suitList = ref<string[]>(['spade', 'heart', 'club', 'diamond'])
const colorList = ref<{ [key: string]: string }>({ 'spade': 'primary', 'heart': 'secondary', 'club': 'success', 'diamond': 'warning' })

const ranks = ref(['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'joker'])
const rankIcons = ref<{ [key: string]: string }>({ 'joker': 'mdi-star', 'ace': 'mdi-chess-bishop', '10': 'mdi-chess-rook', 'jack': 'mdi-chess-knight', 'queen': 'mdi-chess-queen', 'king': 'mdi-chess-king' })

const suitSelect = ref<string>('spade')
const rankSelect = ref<string>('ace')

const selectedColor = computed(() => { return colorList.value[suitSelect.value] })


const DeckOfCards = computed(() => {
  const deck: Tag[] = []
  const solid = false
  for (const suit of suitList.value) {
    for (const rank of ranks.value) {
      const newIcon = rankIcons.value[rank] ? rankIcons.value[rank] : typeof rank === 'number' ? `mdi-numeric-${rank}-circle` : `mdi-chess-pawn`
      const append = solid ? `${newIcon}` : `${newIcon}` // FUTURE OUTLINE CHECK
      //console.log(append)
      deck.push(new Tag(`${suit}:${rank}`, colorList.value[suit], append))
    }
  }
  return deck
})



watch(randomNumber.value, () => {
  // console.log('randomNumber:', randomNumber.value.getResults())
})


</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn-toggle v-model="suitSelect">
          <v-btn v-for="suit in suitList" :key="suit" :color="colorList[suit]" :icon="`mdi-cards-${suit}`"
            variant="plain" :value="suit" />
        </v-btn-toggle>
        <v-divider />

        <v-btn-toggle v-model="rankSelect">
          <v-btn v-for="rank in ranks" :key="rank" :text="rank" :color="selectedColor" variant="plain" size="small">
            <template #append>
              <v-icon :icon="rankIcons[rank] ? rankIcons[rank] : `mdi-chess-pawn`" :color="selectedColor"></v-icon>
            </template>
          </v-btn>
        </v-btn-toggle>
        <v-divider />
        <NuTag v-for="card in DeckOfCards" :key="card.name" :tag="card" :value="(card.space as string)"
          @double-click="persona.focusOn(card)" />
      </v-col>
    </v-row>
  </v-container>
</template>
