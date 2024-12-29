<template>
  <v-card density="compact" flat>
    <v-card-text>
      <v-chip-group column multiple class="bg-background rounded-lg pa-2" @drop="dragDrop($event, taglist)"
        @dragover="dragOver">
        <v-tag-item v-for="tag in (tagMerge as Tag[])" :key="tag.id" :value="tag.id" :icon="tag.icon" :label="tag.name"
          :color="tag.color" :space="tag.space" tooltip @click.ctrl.exact="manageCtrlClick(tag)" draggable
          @dragstart="dragStart($event, tag)" @dragend="dragEnd($event, tag)">
        </v-tag-item>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

import { defineProps, defineEmits, computed, ref, onMounted } from 'vue';
import Tag from '@/objects/Tag'
import TagMap from '@/objects/TagMap'
import { useClipboardStore } from '@/stores/clipboard'


import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

const taglist = ref(new TagMap())

const clipboard = useClipboardStore()

const tagMerge = computed(() => {
  const tm = Array.from([...taglist.value.tags, ...props.tags]) as Tag[]
  return tm
})


const emit = defineEmits(['click', 'ctrl-click', 'dragstart', 'dragend'])
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

function manageCtrlClick(tag: Tag) {
  emit('ctrl-click', tag)
}

const dragStart = (event: DragEvent, tag: Tag) => {
  console.log('dragStart', tag.id)
  if (!event.dataTransfer) return
  event.dataTransfer.clearData();
  event.dataTransfer.effectAllowed = "move";
  if (dragImage.value) {
    event.dataTransfer?.setDragImage(dragImage.value, 10, 10);
  } else {
    console.warn('Drag image not ready!');
  }
  event.dataTransfer?.setData('text/plain', tag.id);
  clipboard.copyTag(tag)
}

const dragOver = (event: DragEvent) => {
  if (event.dataTransfer) {
    //console.log(event.dataTransfer.getData('text/plain'));
  }
  event.preventDefault();
}

const dragEnd = (event: DragEvent, tag: Tag) => {
  clipboard.clear()
  taglist.value.deleteTag(tag)
  console.log('dragEnd', tag.id)
}

const dragDrop = (event: DragEvent, tags: TagMap) => {
  tags.addTag(clipboard.pasteTag())
  clipboard.clear()
}


onMounted(() => {
  // Preload the image
  const img = new Image();
  img.src = imgSrc;

  img.onload = () => {
    dragImage.value = img;
    console.log('Image preloaded and ready to use:', img);
  };
});

</script>
