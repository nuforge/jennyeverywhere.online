<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()

import useDiceStore from '@/stores/dice';
const dice = useDiceStore()

import NuTag from '@/components/nu/NuTag.vue';
import Tag from '@/objects/NuTag';

const randomNumber = ref(dice)

const suitList = ref<string[]>(['spade', 'heart', 'club', 'diamond'])
const colorList = ref<{ [key: string]: string }>({ 'spade': 'primary', 'heart': 'secondary', 'club': 'success', 'diamond': 'warning' })

const ranks = ref(['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'joker'])
const rankIcons = ref<{ [key: string]: string }>({ 'joker': 'mdi-star', 'ace': 'mdi-chess-bishop', '10': 'mdi-chess-rook', 'jack': 'mdi-chess-knight', 'queen': 'mdi-chess-queen', 'king': 'mdi-chess-king' })

const suitSelect = ref(['spade'])
const rankSelect = ref(['ace'])

const filteredSuits = computed(() => suitList.value.filter(suit => suitSelect.value.includes(suit)) as string[])
const filteredRanks = computed(() => ranks.value.filter(rank => rankSelect.value.includes(rank)) as string[])

const DeckOfCards = computed(() => {
  const deck: Tag[] = []
  const solid = false
  for (const suit of filteredSuits.value) {

    for (const rank of filteredRanks.value) {
      const newIcon = rankIcons.value[rank] ? rankIcons.value[rank] : typeof rank === 'number' ? `mdi-numeric-${rank}-circle` : `mdi-chess-pawn`
      const append = solid ? `${newIcon}` : `${newIcon}` // FUTURE OUTLINE CHECK
      //console.log(append)
      const tag = new Tag(`${suit}:${rank}`, colorList.value[suit], append)
      deck.push(tag)
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
        <v-btn-toggle v-model="suitSelect" multiple>
          <v-btn v-for="suit in suitList" :key="suit" :color="colorList[suit]" :icon="`mdi-cards-${suit}`"
            variant="plain" :value="suit" />
        </v-btn-toggle>
        <v-btn-toggle v-model="rankSelect" multiple variant="text" rounded>
          <v-btn v-for="rank in ranks" :key="rank" :text="rank" size="small" :value="rank">
            <template #append>
              <v-icon :icon="rankIcons[rank] ? rankIcons[rank] : `mdi-chess-pawn`"></v-icon>
            </template>
          </v-btn>
        </v-btn-toggle>
        <v-divider class="my-2" />
        <NuTag v-for="card in DeckOfCards" :key="card.name" :tag="card" :value="card"
          @double-click="persona.focusOn(card)" />
      </v-col>
    </v-row>
  </v-container>
</template>
