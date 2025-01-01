<template>
  <v-icon @click="$emit('update:closable', !tray.closable)" :icon="tray.closable ? `mdi-delete-outline` : `mdi-delete`"
    @drop="$emit('delete-drop')" :draggable="true" @dragover="preventDefault($event)">
  </v-icon>
  <v-icon @click="state.add = !state.add" :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`" @drop="tagOrText">
  </v-icon>
  <v-icon icon="mdi-select-search" :draggable="true">
  </v-icon>
  <v-icon icon="mdi-drag" @dragstart="$emit('dragstart', $event)" @dragend="$emit('dragend', $event)" :draggable="true"
    class="grabbable" @click="$emit('toggle-select')"></v-icon>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import Tag from '@/objects/Tag';
import TagTray from '@/objects/TagTray';

const state = useStateStore()

defineProps({
  tray: {
    type: TagTray,
    required: true
  },
})

const emit = defineEmits(['update:closable', 'delete-drop', 'add-drop', 'add-text', 'dragstart', 'dragend', 'toggle-select'])

const tagOrText = (tag: Tag | string) => {
  if (typeof tag === 'string') {
    emit('add-drop', tag)
  }
  emit('add-drop', tag)
}


const preventDefault = (event: Event) => event.preventDefault()


</script>
