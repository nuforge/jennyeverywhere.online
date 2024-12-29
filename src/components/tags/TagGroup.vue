<template>
  <v-chip-group column multiple>
    <v-tag-item v-for="tag in (tags as Tag[])" :key="tag.id" :value="tag.id" :icon="tag.icon" :label="tag.name"
      :color="tag.color" :space="tag.space" :noValue="noValue" :noLabel="noLabel" :noIcon="noIcon" tooltip
      @click.ctrl.exact="manageCtrlClick(tag)" :closable="closable" draggable @dragstart="dragStart($event, tag)"
      @dragend="emit('dragend', tag)">
    </v-tag-item>
  </v-chip-group>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useStateStore } from '@/stores/state';
import { useTagStore } from '@/stores/tags';
import Tag from '@/objects/Tag'

const state = useStateStore()
const tagstore = useTagStore()


const emit = defineEmits(['click', 'ctrl-click', 'dragstart', 'dragend'])

function manageCtrlClick(tag: Tag) {
  emit('ctrl-click', tag)
}

const dragStart = (ev: DragEvent, tag: Tag) => {
  emit('dragstart', tag)
  console.log('TagGroup.dragStart', tag)
  if (!ev.dataTransfer) return
  ev.dataTransfer.clearData();
  tagstore.copyTag(tag)
  state.dragStart()
  ev.dataTransfer.effectAllowed = "move";
}


defineProps({
  tags: {
    type: Array, // Runtime validation as an array
    required: true,
  },

  noLabel: {
    type: Boolean,
    default: false
  },
  noValue: {
    type: Boolean,
    default: false
  },
  noIcon: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
})

</script>
