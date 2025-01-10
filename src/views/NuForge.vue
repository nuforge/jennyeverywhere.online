<script setup lang="ts">
import { ref } from 'vue'
import Tag from '@/objects/nu/NuTag'
import NuTag from '@/components/nu/NuTag.vue'
import Inator from '@/objects/Inator'
const inator = new Inator()

import NuTray from '@/objects/nu/NuTray'

const tray = ref<NuTray>(new NuTray())
const index = ref(0)
const hover = ref(0)

Array.from({ length: 10 }, () => {
  const tag = inator.ntag()
  tray.value.addTag(tag)
})

function trackIndex(tag: Tag) {
  index.value = tray.value.getTagIndex(tag.name)
}

function dragOver(tag: Tag) {

  hover.value = tray.value.getTagIndex(tag.name)
  event.preventDefault()
}

function drop(event: DragEvent) {
  event.preventDefault()
  tray.value.moveIndex(index.value, hover.value)
}

function dragEnd(event: DragEvent) {
  event.preventDefault()
  index.value = 0
  hover.value = 0
}

</script>

<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-wrap ga-2">
        <NuTag v-for="tag in tray.getOrderedTags()" :key="tag.id" :tag="tag" @drag-start="trackIndex(tag, $event)"
          @drag-over="dragOver(tag, $event)" @drag-end="dragEnd" @drop="drop" />

      </v-col>
    </v-row>
  </v-container>
</template>
