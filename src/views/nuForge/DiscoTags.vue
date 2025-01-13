<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Tag from '@/objects/nu/v1/ValTag'
import NuTag from '@/components/nu/v1/NuTag.vue'
import { hslToHex, } from '@/objects/color/Colors'
import { namedColors } from '@/objects/color/ColorNames' // Use a library or write custom functions


console.log(namedColors)

import Inator from '@/objects/Inator'
const inator = new Inator()

import useDiceStore from '@/stores/dice'
import LogoThemed from '@/components/persona/LogoThemed.vue'
const dice = useDiceStore()

const hue = ref(inator.number(360))
const saturation = ref(inator.number(100))
const lightness = ref(inator.number(100))

const color = computed(() => `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`)

const size = ref(256)

const hex = computed(() => hslToHex(hue.value, saturation.value, lightness.value))
const hexTag = computed(() => new Tag(`hex:${hex.value}`, hex.value, 'mdi-pound-box-outline'))
const lumTag = computed(() => {
  const luminanceHex = hslToHex(1, 1, lightness.value)
  return new Tag(`luminance:${luminanceHex}`, luminanceHex, 'mdi-lightbulb-outline')
}
)
const satTag = computed(() => {
  const saturationHex = hslToHex(hue.value, saturation.value, 50)
  console.log('saturation.value:', saturation.value)
  console.log('saturationHex:', saturationHex)
  return new Tag(`saturation:${saturationHex}`, saturationHex, 'mdi-format-color-fill')
}
)
const hueTag = computed(() => {
  const luminanceHex = hslToHex(1, 1, lightness.value)
  return new Tag(`hue:${luminanceHex}`, luminanceHex, 'mdi-circle-opacity')
}
)
const nameTag = computed(() => new Tag(`name:${hex.value}`, hex.value, 'mdi-palette'))


const randomNumber = ref(dice)

watch(randomNumber.value, () => {
  const rollModifier = Number(randomNumber.value.getResults()) / Number(randomNumber.value.getFaces())


  hue.value = (inator.number(360) * rollModifier)
  saturation.value = inator.number(100) * rollModifier
  lightness.value = inator.number(100)
  // console.log('randomNumber:', randomNumber.value.getResults())
  console.log('hex:', hex.value)
  console.log('hue.value:', hue.value)
  console.log('lumTag', lumTag.value)
  console.log('hexLum',)



})
const tag = ref(new Tag('color', color.value, 'mdi-tag'))

</script>

<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center ga-2">
        <NuTag :color="color" :tag="(tag as Tag)" />
        <NuTag :tag="(hexTag as Tag)" />
        <NuTag :color="color" :tag="(nameTag as Tag)" />
        <v-divider vertical></v-divider>
        <NuTag :color="lumTag.color" :tag="(lumTag as Tag)" />
        <NuTag :color="satTag.color" :tag="(satTag as Tag)" />
        <NuTag :color="hueTag.color" :tag="(hueTag as Tag)" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-label>Hue</v-label>
        <v-slider v-model="hue" :color="color" track-size="10" :min="0" :max="360"></v-slider>
      </v-col>
      <v-col>
        <v-label>Saturation</v-label>
        <v-slider v-model="saturation" :color="color" :min="0" :max="100" thumb-label track-size="10"></v-slider>
      </v-col>
      <v-col>
        <v-label>Lightness</v-label>
        <v-slider v-model="lightness" :color="color" :min="0" :max="100" thumb-label track-size="10"></v-slider>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <LogoThemed :jenny="hexTag.name" :every="satTag.color" :where="lumTag.color" />
    </v-row>

    <v-row>
      <v-progress-circular :max="360" bg-color="transparent" :model-value="hue / 3.6" :color="color" :width="40"
        :size="size" rotate="270" rounded />
    </v-row>
  </v-container>
</template>
