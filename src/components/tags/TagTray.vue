<template>
  <v-card :class="['rounded-t-lg']" :variant="state.dragging ? 'elevated' : 'flat'" @dragover="dragOver">
    <v-card-actions :class="dragging ? `bg-surface` : `bg-background`">
      <v-btn icon="mdi-delete" size="small" density="compact" class="rounded" variant="plain" @drop="dropDeleteTags"
        :draggable="true" />
      <v-spacer />
      <v-btn icon="mdi-drag" size="small" density="compact" class="rounded" variant="plain"
        @dragstart="dragTrayStart($event, tagMerge)" :draggable="true" />
    </v-card-actions>
    <v-card-text class="pa-0 pt-1">
      <v-chip-group draggable column multiple class="bg-background pa-2" @drop="dragDrop" @dragover="dragOver">
        <v-tag-item v-for="tag in (tagMerge as Tag[])" :key="tag.id" draggable tooltip :value="tag.id" :icon="tag.icon"
          :label="tag.name" :color="tag.color" :space="tag.space" @click="emit('click', tag)" @close="tagClosed(tag)"
          @click.ctrl.exact="manageCtrlClick(tag)" @dragstart="dragTagStart($event, tag)" @dragend="dragTagEnd">
        </v-tag-item>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, onMounted } from 'vue';
import Tag from '@/objects/Tag'
import TagMap from '@/objects/TagMap'
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';

import { useClipboardStore } from '@/stores/clipboard'
import { useStateStore } from '@/stores/state'

const dragging = ref(false)
const tagMap = ref(new TagMap())
const dragImage = ref<HTMLImageElement | null>(null);

const state = useStateStore()
const clipboard = useClipboardStore()


const tagMerge = computed(() => {
  const tm = Array.from([...tagMap.value.tags, ...props.tags]) as Tag[]
  return tm
})

// EMIT AND PROPS

const emit = defineEmits(['click', 'ctrl-click', 'dragstart', 'dragend', 'close'])
const props = defineProps({
  tags: {
    type: Array as () => Tag[],
    required: false,
    default: () => []
  },
  selected: {
    type: Array as () => string[],
  }
})


// TAGS & CLICKS

function tagClosed(tag: Tag) {
  emit('close', tag)
  tagMap.value.removeTag(tag.id)
}

function manageCtrlClick(tag: Tag) {
  emit('ctrl-click', tag)
}

// TAG DRAGGING

// DRAG START

const writeDataTransfer = (event: DragEvent, type: string, data: string) => {
  if (!event.dataTransfer) return
  event.dataTransfer.clearData();
  event.dataTransfer.setData(type, data);

  if (!event.dataTransfer) return
  event.dataTransfer.clearData();
  if (dragImage.value) {
    event.dataTransfer?.setDragImage(dragImage.value, 10, 10);
  } else {
    console.warn('Drag image not ready!');
  }
  event.dataTransfer?.setData('text/plain', 'tag');
}

const dragStart = () => {
  dragging.value = true
  state.dragStart()
}

const dragTagStart = (event: DragEvent, tag: Tag) => {
  console.log('Tag.Start', tag.id)
  writeDataTransfer(event, 'tag', tag.id)
  state.dragStart()
  clipboard.copy(tag)
  dragStart()
}


const dragTrayStart = (event: DragEvent, tags: Tag[]) => {
  console.log('Tray.Start', tags)
  state.dragStart()
  clipboard.copy(tags)
  writeDataTransfer(event, 'list', 'test');
  dragStart()
}


// DRAG OVER

const dragOver = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer) {
    //console.log(event.dataTransfer.getData('text/plain'));
  }
}


// DRAG END

const dragEnd = () => {
  clipboard.clear()
  dragging.value = false
  // console.log('drag.End')
  state.dragEnd()
}

const dragTagEnd = () => {
  // console.log('Tag.End', tag)
  dragEnd()
}

const dragTrayEnd = () => {
  // console.log('Tray.End', tags)
  dragEnd()
}

// DRAG DROP

const dragDrop = () => {
  dragging.value = false
  //console.log('drag.Drop')
  //const tagMapDifference = tagMap.value.difference(tags)
  //console.log('TagTray.dragDrop', tags, tagMap.value.tagList, tagMapDifference)
  tagMap.value.addTags(clipboard.paste(true) as Tag[])
  state.dragDrop()
}

const dropDeleteTags = () => {
  console.log('dropDeleteTags', clipboard.paste())
  tagMap.value.removeTags(clipboard.paste() as Tag[])
  clipboard.clear()
  state.dragDrop()
}


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
