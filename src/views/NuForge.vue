<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Tag from '@/objects/NuTag'
import NuTag from '@/components/nu/NuTag.vue'

import Inator from '@/objects/Inator'
const inator = new Inator()

import useDiceStore from '@/stores/dice'
const dice = useDiceStore()


const rollValue = computed(() => Number(randomNumber.value.getResults()) / dice.getFaces())

const hue = ref(inator.number(360))
const saturation = ref(inator.number(100))
const lightness = ref(inator.number(100))

const color = computed(() => `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`)


const randomNumber = ref(dice)
watch(randomNumber.value, () => {
  hue.value = inator.number(360)
  saturation.value = inator.number(100)
  lightness.value = inator.number(100)
  // console.log('randomNumber:', randomNumber.value.getResults())

})
const tag = ref(new Tag('Physics'))

</script>

<template>


  <v-row>
    <v-col class="d-flex justify-center">
      <v-progress-circular :model-value="hue" :color="color" width="30" :size="200">{{
        Math.floor(hue)
      }}
        <NuTag :color="color" :tag="tag" />
      </v-progress-circular>
    </v-col>
    <v-col>

    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-label>Hue</v-label>
      <v-container class="d-flex align-center">
        <v-slider v-model="hue" :color="color" thumb-label track-size="10"></v-slider>
      </v-container>
    </v-col>
    <v-col>
      <v-label>Saturation</v-label>
      <v-container class="d-flex align-center">
        <v-slider v-model="saturation" :color="color" :min="0" :max="100" width="20" thumb-label
          track-size="10"></v-slider>
      </v-container>
    </v-col>
    <v-col>
      <v-label>Lightness</v-label>
      <v-container class="d-flex align-center">
        <v-slider v-model="lightness" :color="color" :min="0" :max="100" thumb-label track-size="10"></v-slider>
      </v-container>
    </v-col>
  </v-row>

  <v-divider></v-divider>

</template>
