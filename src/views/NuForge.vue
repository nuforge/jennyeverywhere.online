<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Tag from '@/objects/NuTag'
import NuTag from '@/components/nu/NuTag.vue'
import { hslToHex, hexToColorName } from '@/objects/chatgpt/Colors'


import Inator from '@/objects/Inator'
const inator = new Inator()

import useDiceStore from '@/stores/dice'
import SVGManip from '@/components/color/SVGManip.vue'
const dice = useDiceStore()

const hue = ref(inator.number(360))
const saturation = ref(inator.number(100))
const lightness = ref(inator.number(100))


const color = computed(() => `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`)

const size = ref(256)

const hex = computed(() => hslToHex(hue.value, saturation.value, lightness.value))
const hexTag = computed(() => new Tag(hex.value, hex.value, 'mdi-circle-opacity'))
const nameTag = computed(() => new Tag(hexToColorName(hex.value) || undefined, hexToColorName(hex.value), 'mdi-palette'))
const colorGuess = ref('')

const randomNumber = ref(dice)
watch(randomNumber.value, () => {
  //const rollModifier = Number(randomNumber.value.getResults()) / Number(dice.die.faces)
  hue.value = inator.number(360)
  saturation.value = inator.number(100)
  lightness.value = inator.number(100)
  // console.log('randomNumber:', randomNumber.value.getResults())
  console.log('hex.value:', hex.value)
  const colorName = hexToColorName(hex.value)
  console.log('colorName:', colorName)

})
const tag = ref(new Tag('Color'))

</script>

<template>

  <SVGManip />
  <v-row>
    <v-col class="d-flex justify-center">{{ colorGuess }}
      <v-progress-circular :max="360" bg-color="transparent" :model-value="hue" :color="color" :width="lightness"
        :size="size" rotate="270" rounded><v-label>{{ hue }}</v-label>
      </v-progress-circular>
    </v-col>
    <v-col>
      <NuTag :color="color" :tag="(tag as Tag)" />
      <NuTag :tag="(hexTag as Tag)" />
      <NuTag :color="color" :tag="(nameTag as Tag)" />
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-label>Hue</v-label>
      <v-container class="d-flex align-center">
        <v-slider v-model="hue" :color="color" track-size="10"></v-slider>
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
</template>
