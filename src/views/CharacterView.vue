<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" sm="12">
        <h2><router-link to="/">{{ character.name }}</router-link></h2>
        <v-img :src="image" :alt="character.name" max-height="256" />
      </v-col>
      <v-col cols="12" md="8" sm="12">
        <v-card class="elevation-8 border-b-sm border-e-md rounded-b-lg" variant="text">
          <v-card-text>
            <tag-group column :tags="character.attributes" class="bg-background rounded elevation-4 px-2"
              :noLabel="styles.labels" :noIcon="styles.icons" :closable="styles.closable" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JennyEverywhere from '@/game/characters/JennyEverywhere.ts';
import TagGroup from '@/components/tags/TagGroup.vue';
import image from '@/assets/images/characters/jenny-everywhere.png'

import { useStyleStore } from '@/stores/styles'

const styles = ref(useStyleStore())


const character = ref(JennyEverywhere)
// const newbie = ref(Newbie)




</script>
