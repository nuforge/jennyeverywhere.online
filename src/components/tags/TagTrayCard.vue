<template>
  <v-card class="tag-tray rounded-lg bg-transparent" @mouseenter=" hoverStart()" @mouseleave="hoverEnd()"
    @focusin="focusStart()" @focusout="focusEnd()" :elevation="showManager ? 10 : 0" min-width="300px">
    <v-layout>
      <v-fade-transition>
        <v-system-bar v-show="showManager" v-if="!dense" @dragover="onDragOver"
          class="justify-space-evenly align-center" :class="focus ? 'border-opacity-100' : 'border-opacity-20'">
          <TagTrayStyles :tray="(tray as unknown as TagTray)" @update:labels="(value) => { tray.labels = value }"
            @update:icons="(value) => { tray.icons = value }" @update:color="(value) => { tray.color = value }" />
          <TagTrayActions :tray="(tray as unknown as TagTray)" @update:closable="(value) => { tray.closable = value }"
            @delete-drop="dropDeleteTags" @add-drop="onDragDrop" @dragstart="onDragTrayStart($event, tagMerge)"
            @dragend="onDragEnd" @toggle-select="toggleSelect" />
        </v-system-bar>
      </v-fade-transition>
      <v-card-text>
        <v-slide-x-transition>
          <TagGroup v-model="tray.selected" :tags="(tagMerge as Tag[])" :closable="tray.closable" :noIcon="tray.icons"
            :noLabel="tray.labels" :noColor="tray.color" @drop="onDragDrop" @dragover="onDragOver"
            @click="emit('click', $event)" @ctrl-click="manageCtrlClick" @dragstart="onDragStart($event)"
            @dragend="onDragEnd" @close="onClose" />
        </v-slide-x-transition>
      </v-card-text>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, onMounted } from 'vue';

import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import Tag from '@/objects/Tag'

import { useClipboardStore } from '@/stores/clipboard'
import { useStateStore } from '@/stores/state'

import TagTray from '@/objects/TagTray';
import TagGroup from '@/components/tags/TagGroup.vue';
import TagTrayStyles from '@/components/tags/TagTrayStyles.vue';
import TagTrayActions from '@/components/tags/TagTrayActions.vue';

const tray = ref(new TagTray([]))

const state = useStateStore()
const clipboard = useClipboardStore()

const tagMerge = computed(() => Array.from([...tray.value.tags, ...props.tags]) as Tag[])
const manage = ref(false)
const focus = ref(false)
const showManager = computed(() => focus.value || manage.value || state.tagmanager)

//NOt working
const toggleSelect = () => {
  tray.value.selected = tagMerge.value as Tag[]
}
// EMIT AND PROPS
const emit = defineEmits(['click', 'ctrl-click', 'dragstart', 'dragend', 'close'])
const props = defineProps({
  tags: {
    type: Array as () => Tag[],
    required: false,
    default: Array as () => Tag[]
  },
  selected: {
    type: Array as () => string[],
    default: Array as () => Tag[]
  },
  dense: {
    type: Boolean,
    default: false
  }
})

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

// TAGS & CLICKS

function onClose(tag: Tag) {
  emit('close', tag)
  tray.value.map.removeTag(tag.id)
}

function manageCtrlClick(tag: Tag) {
  emit('ctrl-click', tag)
}


const onDragStart = (event: DragEvent) => {
  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    event.dataTransfer?.setData('text/plain', selectedText);
  }
  tray.value.dragging = true
  state.dragStart()
}



const onDragTrayStart = (event: DragEvent, tags: Tag[]) => {
  //console.log('Tray.Start', tags)
  state.dragStart()
  clipboard.copy(tags)
  onDragStart(event)
}


// DRAG OVER

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer) {
    //console.log(event.dataTransfer.getData('text/plain'));
  }
}


// DRAG END

const onDragEnd = () => {
  clipboard.clear()
  tray.value.dragging = false
  // console.log('drag.End')
  state.dragEnd()
}


// DRAG DROP

const onDragDrop = (event: DragEvent) => {
  if (event.dataTransfer) {
    if (event.dataTransfer.getData('text/plain')) {
      // console.log('onDragDrop', event.dataTransfer.getData('text/plain').trim())
      tray.value.map.stringTag(event.dataTransfer.getData('text/plain').trim())
    }
  }
  tray.value.dragging = false
  tray.value.map.addTags(clipboard.paste(true) as Tag[])
  state.dragDrop()
}

const dropDeleteTags = () => {
  const tags = clipboard.paste(true) as Tag[]
  tags.forEach((tag) => { onClose(tag) })
  tray.value.map.removeTags(tags)
  clipboard.clear()
  state.dragDrop()
}

// TAG DRAGGING

// DRAG START

// const writeDataTransfer = (event: DragEvent, type: string, data: string) => {
//   if (!event.dataTransfer) return
//   event.dataTransfer.clearData();
//   event.dataTransfer.setData(type, data);

//   if (!event.dataTransfer) return
//   event.dataTransfer.clearData();
//   if (dragImage.value) {
//     event.dataTransfer?.setDragImage(dragImage.value, 10, 10);
//   } else {
//     console.warn('Drag image not ready!');
//   }
// }

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
