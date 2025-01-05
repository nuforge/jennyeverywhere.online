<template>
  <v-container>
    <v-row>
      <v-col class="ga-2 d-flex flex-wrap">
        <NuTag v-for="tag in tags" :key="tag.id" :tag="(tag as Tag)" :count="inator.number(randomNumber.getResults())"
          @double-click="onDoubleClick" />
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Tag from '@/objects/Tag';

import usePersonaStore from '@/stores/persona';
const persona = usePersonaStore()

import useDiceStore from '@/stores/dice';
const dice = useDiceStore()

import Inator from '@/objects/Inator';
import NuTag from '@/components/nu/NuTag.vue';
const inator = new Inator()

const randomNumber = ref(dice)

const tags = ref(inator.ntags(randomNumber.value.getResults()))




watch(randomNumber.value, () => {
  tags.value = inator.ntags(randomNumber.value.getResults())
})

const onDoubleClick = (event: MouseEvent, tag: Tag) => {
  //console.log('onClickTag:Tag', tag)
  if (tag) persona.focusOn(tag)
  persona.openDrawer()

}

dice.rollDice(2)

</script>
