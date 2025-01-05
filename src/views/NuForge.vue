<template>
  <v-container>
    <v-row>
      <v-col>
        <NuTag v-for="tag in tags" :key="tag.id" :tag="(tag as Tag)" :count="inator.number(10)" />
      </v-col>
    </v-row>
    <v-divider />
    <NuTag :tag="new Tag('total', 'text', 'mdi-all-inclusive')" :count="total" />
    <NuTag :tag="new Tag('category:colors', 'primary', 'mdi-circle-opacity')" :count="colors" />
    <NuTag :tag="new Tag('icons', 'secondary', 'mdi-image')" :count="icons" />
    <NuTag :tag="new Tag('name', 'success', 'mdi-label-outline')" :count="name" />
    <NuTag :tag="new Tag('SPACE', 'accent', 'mdi-tray')" :count="space" />


  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Tag from '@/objects/Tag';


import useDiceStore from '@/stores/dice';
const dice = useDiceStore()

import Inator from '@/objects/Inator';
import NuTag from '@/components/nu/NuTag.vue';
const inator = new Inator()

const randomNumber = ref(dice)

const tags = ref(inator.ntags(randomNumber.value.getResults()))

const total = ref(0)
const colors = ref(0)
const icons = ref(0)
const name = ref(0)
const space = ref(0)

watch(randomNumber.value, () => {
  tags.value = inator.ntags(randomNumber.value.getResults())
})

</script>
