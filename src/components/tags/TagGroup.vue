<template>
  <v-chip-group column multiple>
    <v-tag-item v-for="(tag, index) in tags" :key="index" :value="tag.id" :icon="tag.icon" :label="tag.name"
      :color="tag.color" :space="tag.space" :noValue="noValue" :noLabel="noLabel" :noIcon="noIcon" tooltip
      @click.ctrl.exact="manageCtrlClick(tag)" :closable="closable">
    </v-tag-item>
  </v-chip-group>
</template>

<script setup lang="ts">

const emit = defineEmits(['click', 'ctrl-click'])

function manageCtrlClick(tag: Tag) {
  console.log('ctrl-click', tag)
  emit('ctrl-click', tag)
}

interface Tag {
  id: string
  name: string
  icon: string | undefined
  color: string | undefined
  space?: string
}

defineProps({
  tags: {
    type: Array<Tag>,
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
