<template>
  <v-container>
    <v-row>
      <v-col>
        <NuTag v-for="tag in tags" :key="tag.id" :tag="(tag as Tag)" :count="inator.number(randomNumber.getResults())"
          @double-click="onDoubleClick" />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <NuTag v-for="tag in lib.tags" :key="tag.id" :tag="(tag as Tag)"
          :count="inator.number(randomNumber.getResults())" @double-click="onDoubleClick" />
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
import Legend from '@/objects/Legend';

const inator = new Inator()

const randomNumber = ref(dice)
const icons = ref(inator.icons(randomNumber.value.getResults()))
const tags = ref(inator.ntags(randomNumber.value.getResults()))

const lib = ref(new Legend())


watch(randomNumber.value, () => {
  console.log('randomNumber:', randomNumber.value.getResults())
  tags.value = inator.ntags(randomNumber.value.getResults())
  lib.value.clearTags()

  icons.value.forEach((icon: string) => {
    const name = icon.replace('mdi-', '').replace(/-/g, ' ')
    const tag = new Tag(`icon:${name}`, 'text', icon)

    console.log('name:', name)


    lib.value.addTag(tag)

  })

  icons.value = inator.icons(randomNumber.value.getResults())
})


const onDoubleClick = (event: MouseEvent, tag: Tag) => {
  //console.log('onClickTag:Tag', tag)
  if (tag) persona.focusOn(tag)
  persona.openDrawer()

}


</script>
