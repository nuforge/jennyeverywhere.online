<template>
  <v-container>
    <custom-tag tag="name" icon="mdi-circle-opacity" color="error">custom tag test</custom-tag>:

    <v-btn @click="roll" text="roll" />
    <v-divider>Active Trays</v-divider>
    <EvTrayCard :tags="(tags as Tag[])" name="Tags" v-model="selected" />
    <v-container>
      <v-row>
        <v-col>
          <v-textarea v-model="body" label="log body" prepend-inner-icon="mdi-pencil" density="compact"
            variant="solo-filled" clearable auto-grow />
        </v-col>
        <v-col>
          <MarkdownRenderer :text="body" :tags="filtered" />
        </v-col>
      </v-row>
      <v-divider>selected</v-divider>
      {{ selected }}

      <v-divider>filtered</v-divider>
      {{ filtered }}
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Tag from '@/objects/Tag'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import EvTrayCard from '@/components/tags/EvTrayCard.vue';
import { useDiceStore } from '@/stores/dice';

import Chaosinator from '@/objects/Chaosinator';

const dice = useDiceStore()
const inator = new Chaosinator()
const selected = ref<string[]>([])
const randomNumber = ref(dice)


const tags = computed(() => inator.tags(randomNumber.value.getResults()))
const body = computed(() => inator.shuffleArray([...tags.value.map((tag) => tag.name), ...inator.words(randomNumber.value.getResults() * 2)]).join(' '))

const filtered = computed(() => tags.value.filter((tag) => selected.value.includes(tag.name)))

dice.rollDice(1, false)

const roll = () => {
  randomNumber.value.clearDice()
  randomNumber.value.rollDice(1, false)
  selected.value = tags.value.map((tag) => tag.name).slice(0, Math.floor(randomNumber.value.getResults() / 2))
  console.log('selected', selected.value)
}


</script>
