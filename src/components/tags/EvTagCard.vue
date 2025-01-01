<template>
  <v-card @mouseenter=" hoverStart()" @mouseleave="hoverEnd()" @focusin="focusStart()" @focusout="focusEnd()"
    :elevation="showManager ? 10 : 0">
    <v-card-text>
      <v-slide-x-transition>
        <EvTagTray :tags="story" @drag-start="onDragStart" @drag-end="onDragEnd" />
      </v-slide-x-transition>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStateStore } from '@/stores/state'

import EvTagTray from '@/components/tags/EvTagTray.vue';
const state = useStateStore()

// Temp add Story Tags
import { useStoryStore } from '@/stores/story';
import type Tag from '@/objects/Tag';
const story = useStoryStore().tags as Tag[]
// END TEMP

// Local State
const manage = ref(false)
const focus = ref(false)

const showManager = computed(() => focus.value || manage.value || state.tagmanager)




// EMIT AND PROPS

function hoverStart() {
  manage.value = true
}

function hoverEnd() {
  manage.value = false
}
function focusStart() {
  focus.value = true
}

function focusEnd() {
  focus.value = false
}


const onDragStart = () => {
  state.dragStart()
}

// DRAG END

const onDragEnd = () => {
  console.log('drag.End')
  state.dragEnd()
}




</script>
