<script setup lang="ts">
import { computed, ref, watch } from 'vue';

// import usePersonaStore from '@/stores/persona';
// const persona = usePersonaStore()

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
const rankIcons = ref<{ [key: string]: string }>({ 'joker': 'mdi-all-inclusive', 'ace': 'mdi-chess-bishop', '10': 'mdi-chess-rook', 'jack': 'mdi-chess-knight', 'queen': 'mdi-chess-queen', 'king': 'mdi-chess-king' })

const suitSelect = ref<string>('spade')
const selectedColor = computed(() => { return colorList.value[suitSelect.value] })

const AceOfSpades = new Tag('Ace:Spades', 'black', 'mdi-cards-spade')



watch(randomNumber.value, () => {
  // console.log('randomNumber:', randomNumber.value.getResults())
})


</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <NuTag :tag="AceOfSpades" />

        <v-btn-toggle column v-model="suitSelect">
          <v-btn v-for="suit in suitList" :key="suit" :color="colorList[suit]" :icon="`mdi-cards-${suit}`"
            variant="plain" :value="suit" />
        </v-btn-toggle>
        <v-divider />

        <v-sheet class="d-flex flex-column align-start bg-background">
          <v-btn v-for="rank in ranks" :key="rank" :text="rank"
            :prepend-icon="rankIcons[rank] ? rankIcons[rank] : `mdi-chess-pawn`" :color="selectedColor"
            :append-icon="`mdi-cards-${suitSelect}`" variant="plain" size="small">
            <template #prepend>
              <v-icon :icon="rankIcons[rank] ? rankIcons[rank] : `mdi-chess-pawn`" :color="'grey'"></v-icon>
            </template>
            <template #append>
              <v-badge color="transparent" overlap :icon="`mdi-cards-${suitSelect}`" floating>
              </v-badge>
            </template>
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
