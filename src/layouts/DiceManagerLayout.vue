<template>
  <v-navigation-drawer location="bottom" permanent :scrim="false" class="bg-transparent border-t-0">
    <v-container class="bg-surface rounded-t-lg">/>
      <v-row>
        <v-col class="bg-background rounded-lg py-1 mb-4">
          <dice-tag :dice="dice" />
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dice from '@/game/Dice.ts'
import DiceTag from '@/components/game/DiceTag.vue'

const dice = ref({
  d20: ref(new Dice(20)),
})

</script>
