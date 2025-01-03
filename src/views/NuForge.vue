<template>
  <v-container>

    <v-container>
      <v-row>
        <v-col>
          <EvTrayCard :tags="(tags as Tag[])" name="Tags" v-model="selected" :body="body" />
        </v-col>
        <v-col>
          <MarkdownRenderer :text="body" :tags="filtered" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
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


watch(randomNumber.value, () => {
  selected.value = inator.shuffleArray(tags.value.map((tag) => tag.name)).slice(0, Math.floor(randomNumber.value.getResults() / 2))
})

dice.rollDice(1)


</script>
