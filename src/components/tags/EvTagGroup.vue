<template>
  <v-chip-group column multiple @dragend="onDragEnd" @dragover="preventDefault">
    <EvTag v-for="tag in tags" :key="tag.name" :text="labels ? tag.name : undefined"
      :icon="icons ? tag.icon : undefined" :color="colors ? tag.color : undefined" draggable @close="onClose(tag)"
      @dragstart="onDragStart" @ctrl-click="onCtrlClick(tag)" @right-click="onRightClick" />
  </v-chip-group>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Tag from '@/objects/Tag'
import EvTag from '@/components/tags/EvTag.vue'

// EMIT AND PROPS
const emit = defineEmits(['click', 'ctrl-click', 'right-click', 'drag-start', 'drag-end', 'drag-drop', 'close'])


defineProps({
  tags: {
    type: Array as () => Tag[],
  },
  selected: {
    type: Array as () => string[],
  },
  colors: {
    type: [Boolean, String],
    default: false
  },
  labels: {
    type: [Boolean, String],
    default: false
  },
  icons: {
    type: [Boolean, String],
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  },
})


// TAGS & CLICKS

function onClose(tag: Tag) {
  console.log('onClose', tag)
}

function onCtrlClick(tag: Tag) {
  emit('ctrl-click', tag)
}

function onRightClick() {
  emit('right-click')
}


// DRAG

// DRAG START
const onDragStart = (event: DragEvent) => {
  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    event.dataTransfer?.setData('text/plain', selectedText);
  }
  emit('drag-start')
}


// DRAG END
const onDragEnd = () => {
  // console.log('drag.End')
  emit('drag-end')
}

// DRAG OVER

const preventDefault = (event: Event) => event.preventDefault()

</script>
