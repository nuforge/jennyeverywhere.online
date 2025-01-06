<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref, computed } from 'vue'
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);
const styles = useStyleStore()

const showClosable = computed(() => props.closable || styles.closable)
const noIcon = computed(() => props.noIcon || styles.icons)
const noLabel = computed(() => props.noLabel || styles.labels)
const noColor = computed(() => props.noColor || styles.colors)

import useStateStore from '@/stores/state';
import useStyleStore from '@/stores/styles';

import useClipboardStore from '@/stores/clipboard'
import Tag from '@/objects/Tag'

const state = useStateStore()
const clipboard = useClipboardStore()

const emit = defineEmits(['click', 'close', 'ctrl-click', 'dragstart', 'dragend'])

function manageCtrlClick(tag: Tag) {
  emit('ctrl-click', tag)
}

const onTagClosed = (tag: Tag) => {
  emit('close', tag)
}

const onDragStart = (event: DragEvent, tag: Tag) => {
  emit('dragstart', tag)
  console.log('TagGroup.dragStart', tag)
  if (!event.dataTransfer) return
  writeDataTransfer(event, 'tag', tag.id)
  event.dataTransfer.clearData();
  clipboard.copy(tag)
  state.dragStart()
  event.dataTransfer.effectAllowed = "move";
}

const onDragend = (event: DragEvent, tag: Tag) => {
  clipboard.clear()
  // console.log('drag.End')
  state.dragEnd()
  emit('dragend', tag)
}

const writeDataTransfer = (event: DragEvent, type: string, data: string) => {
  if (!event.dataTransfer) return
  event.dataTransfer.clearData();
  event.dataTransfer.setData(type, data);

  if (dragImage.value) {
    event.dataTransfer?.setDragImage(dragImage.value, 10, 10);
  } else {
    console.warn('Drag image not ready!');
  }
  if (!event.dataTransfer) return
  event.dataTransfer.clearData();
  event.dataTransfer?.setData('text/plain', 'tag');
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
  noColor: {
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
// MOUNTED

onMounted(() => {
  // Preload the image
  const img = new Image();
  img.src = imgSrc;

  img.onload = () => {
    dragImage.value = img;
  };
});

</script>

<template>
  <v-chip-group draggable column multiple>
    <VTagItem v-for="tag in (tags as Tag[])" :key="tag.id" draggable tooltip :value="tag.id" :icon="tag.icon"
      :label="tag.name" :color="tag.color" :space="tag.space" :closable="showClosable" @click="emit('click', tag)"
      :noColor="noColor" :noIcon="noIcon" :noLabel="noLabel" @close="onTagClosed(tag)"
      @click.ctrl.exact="manageCtrlClick(tag)" @dragstart="onDragStart($event, tag)" @dragend="onDragend($event, tag)">
    </VTagItem>
  </v-chip-group>
</template>
