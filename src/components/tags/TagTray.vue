<template>
  <v-scale-transition>
    <v-card @mouseenter="hoverStart()" @mouseleave="hoverEnd()" class="tag-tray">
      <v-card-actions :draggable="true" @dragstart="onDragTrayStart($event, tagMerge)">
        <TagActions :tray="(tray as unknown as TagTray)" v-show="showManager" @delete-drop="dropDeleteTags"
          @update:closable="(value) => { tray.closable = value }" @update:labels="(value) => { tray.labels = value }"
          @update:icons="(value) => { tray.icons = value }" @update:color="(value) => { tray.color = value }" />
      </v-card-actions>
      <v-card-text>
        <TagGroup v-model="tray.selected" :tags="(tagMerge as Tag[])" :closable="tray.closable" :noIcon="tray.icons"
          :noLabel="tray.labels" :noColor="tray.color" @drop="onDragDrop" @dragover="onDragOver"
          @click="emit('click', $event)" @ctrl-click="manageCtrlClick" @dragstart="onDragStart" @dragend="onDragEnd"
          @close="onClose" />
        <div></div>
      </v-card-text>
      <v-card-actions :draggable="true" @dragstart="onDragTrayStart($event, tagMerge)"
        @dragover="($event) => $event.preventDefault()">
        <TagStyles :tray="(tray as unknown as TagTray)" v-show="showManager" @delete-drop="dropDeleteTags"
          @update:closable="(value) => { tray.closable = value }" @update:labels="(value) => { tray.labels = value }"
          @update:icons="(value) => { tray.icons = value }" @update:color="(value) => { tray.color = value }" />
      </v-card-actions>
    </v-card>
  </v-scale-transition>

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
import TagStyles from '@/components/tags/TagStyles.vue';
import TagActions from '@/components/tags/TagActions.vue';

const tray = ref(new TagTray([]))

const state = useStateStore()
const clipboard = useClipboardStore()

const tagMerge = computed(() => Array.from([...tray.value.tags, ...props.tags]) as Tag[])
const manage = ref(false)
const showManager = computed(() => state.tagmanager || manage.value)

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
  }
})


function hoverStart() {
  manage.value = true
}

function hoverEnd() {
  manage.value = false
}



// TAGS & CLICKS

function onClose(tag: Tag) {
  console.log('TagTray.onClose', tag)
  emit('close', tag)
  tray.value.map.removeTag(tag.id)
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

const onDragStart = () => {
  tray.value.dragging = true
  state.dragStart()
}



const onDragTrayStart = (event: DragEvent, tags: Tag[]) => {
  //console.log('Tray.Start', tags)
  state.dragStart()
  clipboard.copy(tags)
  writeDataTransfer(event, 'list', 'test');
  onDragStart()
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

const onDragDrop = () => {
  tray.value.dragging = false
  //console.log('drag.Drop')
  //const tagMapDifference = tagMap.value.difference(tags)
  //console.log('TagTray.onDragDrop', tags, tagMap.value.tagList, tagMapDifference)
  tray.value.map.addTags(clipboard.paste(true) as Tag[])
  state.dragDrop()
}

const dropDeleteTags = () => {
  //console.log('dropDeleteTags', clipboard.paste())
  const tags = clipboard.paste(true) as Tag[]
  tags.forEach((tag) => { onClose(tag) })
  tray.value.map.removeTags(tags)
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
