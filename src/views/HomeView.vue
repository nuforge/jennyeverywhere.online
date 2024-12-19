<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <img src="@/assets/stories/gallery/001.png" alt="A glowing green portal" />
        </v-col>
        <v-col cols="12" md="8">
          <h2>You wake up on a Monday. Or is it Tuesday?</h2>
          <p>Either way, it's a day, and Jenny Everywhere is banging on your apartment window.</p>
          <p>"Get your jetpack, we're late!" she yells, her 🧣scarf flapping dramatically, even though there's no wind.
            She doesn't seem to care that you're still in pajamas—or that jetpacks aren't real (or so you thought).</p>

          <p>You stumble to the window, pulling it open. Jenny grins, radiating that effortless 😎 confidence that makes
            you want to believe she knows exactly what's going on... even though she probably doesn't. 😏 </p>

          <p>Behind her, a glowing green 🟢 portal hums ominously in the middle of the street, swirling with unearthly
            energy.</p>

          <p>A dude with a mohawk and a flamethrower casually steps out, his expression as calm as if he's just picking
            up groceries.</p>
        </v-col>
      </v-row>

      <v-row class="">
        <v-col cols="12" md="8">
          <v-item-group selected-class="rounded-e-xl bg-surface border-opacity-100" v-model="selection">
            <v-item v-slot="{ isSelected, selectedClass, toggle }" v-for="(button, index) in buttons" :key="index">
              <v-card hover
                :class="['mx-auto border-s-lg my-2 rounded-s-lg bg-transparent', selectedClass, `border-${button.color}`]"
                @click="toggle">

                <template v-slot:prepend><v-icon :icon="button.icon"
                    :color="isSelected ? button.color : 'text'"></v-icon></template>
                <template v-slot:subtitle>{{ button.text
                  }}</template>
                <template v-slot:append v-if="isSelected"><v-icon icon="$next" color="text"></v-icon></template>
              </v-card>
            </v-item>
          </v-item-group>
        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script setup lang="ts">

import { ref } from 'vue'

interface Button {
  text: string
  icon: string
  color: string
}

const selection = ref([])


const buttons = ref<Button[]>([
  { text: 'Slam the window shut and pretend this isn’t happening?', icon: 'mdi-account', color: 'primary' },
  { text: 'Grab a pillow, because clearly you’re still dreaming?', icon: 'mdi-home', color: 'secondary' },
  { text: 'Ask Jenny why there’s a 🟢 portal in the middle of the road?', icon: 'mdi-dice-d20', color: 'tertiary' },
  { text: 'Activate Shifting Power', icon: 'mdi-star', color: 'quaternary' },
])

</script>
