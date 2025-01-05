<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" sm="12">
        <h2><router-link to="/">{{ character.name }}</router-link></h2>
        <v-img :src="image" :alt="character.name" max-height="256" />
      </v-col>
      <v-col cols="12" md="8" sm="12">
        <EvTrayCard :tags="(character.attributes as Tag[])" @ctrl-click="handleCtrlClick" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JennyEverywhere from '@/objects/game/characters/JennyEverywhere';
import image from '@/assets/images/characters/jenny-everywhere.png'
import useTagStore from '@/stores/tags'
import type Tag from '@/objects/Tag';
import EvTrayCard from '@/components/tags/EvTrayCard.vue';
const tags = useTagStore()


function handleCtrlClick(tag: Tag) {
  tags.addTag(tag)
}

const character = ref(JennyEverywhere)


</script>
