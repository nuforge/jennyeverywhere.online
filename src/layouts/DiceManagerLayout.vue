<template>
  <v-container class="bg-surface rounded-t-lg mx-auto ">
    <v-row>
      <v-col class="bg-background rounded-lg py-1 mb-4 text-right">
        <dice-tag :dice="dice.dice" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DiceTag from '@/components/game/DiceTag.vue'
import { useDiceStore } from '@/stores/dice'

const dice = ref(useDiceStore())

</script>
