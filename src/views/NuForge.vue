<script setup lang="ts">
import { ref } from 'vue'
import Tag from '@/objects/nu/NuTag'
import NuTag from '@/components/nu/NuTag.vue'
import Inator from '@/objects/Inator'
const inator = new Inator()

import NuTray from '@/objects/nu/NuTray'

const tray = ref<NuTray>(new NuTray())

Array.from({ length: 10 }, (_, i) => {
  tray.value.add(inator.ntags(i))
})

const tagClick = (tag: Tag) => {
  console.log('tagClick', tag)
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col>

        <NuTag v-for="tag in tray.tags" :key="tag.id" :tag="tag" @click="tagClick(tag)" />

      </v-col>
    </v-row>
  </v-container>
</template>
