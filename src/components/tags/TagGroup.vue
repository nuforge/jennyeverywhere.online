<template>
  <v-chip-group column multiple>
    <v-tag-item v-for="tag in tags as Tag[]" :key="tag.id" :value="tag.id" :icon="tag.icon" :label="tag.name"
      :color="tag.color" :space="tag.space" :noValue="noValue" :noLabel="noLabel" :noIcon="noIcon" tooltip
      @click.ctrl.exact="manageCtrlClick(tag)" :closable="closable">
    </v-tag-item>
  </v-chip-group>
</template>

<script setup lang="ts">
import Tag from '@/objects/Tag'
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['click', 'ctrl-click'])

function manageCtrlClick(tag: Tag) {
  emit('ctrl-click', tag)
}

const props = defineProps({
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
