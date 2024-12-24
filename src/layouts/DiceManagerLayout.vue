<template>
  <v-navigation-drawer location="bottom" permanent :scrim="false" class="bg-transparent border-t-0">
    <v-container class="bg-surface rounded-t-lg">
      <v-row>
        <v-col class="bg-background rounded-lg py-1 mb-4 text-right">
          <dice-tag :dice="dice.dice" />
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DiceTag from '@/components/game/DiceTag.vue'
import { useDiceStore } from '@/stores/dice'

const dice = ref(useDiceStore())

</script>
