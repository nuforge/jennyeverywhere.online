<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { hslToHex, } from '@/objects/color/Colors'
import { namedColors, findByValue } from '@/objects/color/ColorNames' // Use a library or write custom functions
import Tag from '@/objects/NuTag'
import NuTag from '@/components/nu/NuTag.vue'


const colors = namedColors

import Inator from '@/objects/Inator'
const inator = new Inator()

import useDiceStore from '@/stores/dice'
const dice = useDiceStore()

const hue = ref(inator.number(360))
const saturation = ref(inator.number(100))
const lightness = ref(inator.number(100))

const color = computed(() => `hsl(${hue.value}, ${saturation.value}%, ${lightness.value}%)`)
const hex = computed(() => hslToHex(hue.value, saturation.value, lightness.value))


const name = computed(() => findByValue(colors, hex.value))

const randomNumber = ref(dice)

watch(randomNumber.value, () => {
  const rollModifier = Number(randomNumber.value.getResults()) / Number(randomNumber.value.getFaces())


  hue.value = (inator.number(360) * rollModifier)
  saturation.value = inator.number(100) * rollModifier
  lightness.value = inator.number(100)

})

const selection = ref<number[]>([])





const selectHue = computed(() =>
  Array.from({ length: hue.value + 1 }, (_, index) => inator.number(360 - index)))

const mergedHue = computed(() => [...selection.value, ...selectHue.value])


</script>

<template>
  <v-btn-toggle v-model="mergedHue" multiple class="d-flex flex-wrap h-auto">
    <v-btn v-for="(index) in 360" :key="index" :color="color" icon="mdi-checkbox-blank" variant="plain" size="small"
      base-color="background" />
  </v-btn-toggle>
  <v-label class="mx-2">hex: {{ hex }}</v-label>
  <v-label v-if="name.length > 0">name: {{ name.toString() }}</v-label>
  <v-container>
    <v-row>
      <v-col>
        <v-label>Hue</v-label>
        <v-slider v-model="hue" :color="color" track-size="10" :min="0" :max="360"></v-slider>
      </v-col>
      <v-col>
        <v-label>Saturation</v-label>
        <v-slider v-model="saturation" :color="color" :min="0" :max="100" thumb-label track-size="10"
          step="1"></v-slider>
      </v-col>
      <v-col>
        <v-label>Lightness</v-label>
        <v-slider v-model="lightness" :color="color" :min="0" :max="100" thumb-label track-size="10"
          step="1"></v-slider>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>
