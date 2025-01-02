<template>
  <v-chip-group column multiple @dragend="onDragEnd" @dragover="preventDefault" v-model="selection"
    class="d-flex flex-column px-2 mx-auto justify-center">
    <EvTag v-for="tag in tags" :tag="tag" :key="tag.name" :text="labels ? tag.name : undefined"
      :icon="icons ? tag.icon : undefined" :color="colors ? tag.color : undefined" draggable :closable="closable"
      @close="onClose(tag)" @dragstart="onDragStart($event, tag)" @ctrl-click="onCtrlClick(tag)"
      @right-click="onRightClick" @click-tag="onClickTag" />
  </v-chip-group>
</template>

<script setup lang="ts">
/* Manages content for a group of tags in a chip group
Finalizes the styles (icon, color, label, closable) for display and sends to the Tag
*/

import { ref, watch, defineProps, defineEmits } from 'vue';

import Tag from '@/objects/Tag'
import EvTag from '@/components/tags/EvTag.vue'

// EMIT AND PROPS
const selection = ref<string[]>([])

defineProps({
  tags: {
    type: Array as () => Tag[]
  }, // Initial selected tags
  modelValue: {
    type: Array as () => string[],
    default: () => []
  },
  colors: {
    type: [Boolean, String],
    default: true
  },
  labels: {
    type: [Boolean, String],
    default: true
  },
  icons: {
    type: [Boolean, String],
    default: true
  },
  closable: {
    type: Boolean,
    default: false
  },
})

watch(() => selection.value, (newVal) => {
  emit('update:modelValue', newVal)
});

const emit = defineEmits(['update:modelValue', 'click', 'ctrl-click', 'right-click', 'drag-start', 'drag-end', 'drag-drop', 'close'])

// TAGS & CLICKS
function onClickTag() {
}

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
const onDragStart = (event: DragEvent, tag: Tag) => {

  event.dataTransfer?.setData('text/plain', tag.id);
  console.log('onDragStart')
  emit('drag-start', event, tag)
}


// DRAG END
const onDragEnd = () => {
  // console.log('drag.End')
  emit('drag-end')
}

// DRAG OVER

const preventDefault = (event: Event) => event.preventDefault()

</script>
