<template>
  <v-card :variant="state.dragging ? 'elevated' : 'flat'" @dragover="onDragOver">
    <v-card-actions :class="tray.dragging ? `bg-surface` : `bg-background`">
      <VBtnToggle>
        <v-btn @click="tray.closable = !tray.closable"
          :prepend-icon="tray.closable ? `mdi-delete-outline` : `mdi-delete`" @drop="dropDeleteTags">
          <v-tooltip activator="parent">
            Show Tag Closers: <v-icon :icon="tray.closable ? `mdi-delete-outline` : `mdi-delete`"></v-icon> {{
              !tray.closable
            }}
          </v-tooltip>
        </v-btn>
        <v-btn @click="tray.labels = !tray.labels" :prepend-icon="tray.labels ? `mdi-label-off-outline` : `mdi-label`">
          <v-tooltip activator="parent">
            Show labels: <v-icon :icon="tray.labels ? `mdi-label-off-outline` : `mdi-label`"></v-icon> {{
              !tray.labels
            }}
          </v-tooltip>
        </v-btn>
        <v-btn @click="tray.icons = !tray.icons" :prepend-icon="tray.icons ? `mdi-eye-off-outline` : `mdi-eye`">
          <v-tooltip activator="parent">
            Show icons: <v-icon :icon="tray.icons ? `mdi-eye-off-outline` : `mdi-eye`"></v-icon> {{ !tray.icons }}
          </v-tooltip>
        </v-btn>
        <v-btn @click="tray.color = !tray.color" :prepend-icon="tray.color ? `mdi-palette` : `mdi-palette-outline`">
          <v-tooltip activator="parent">
            Show color: <v-icon :icon="tray.color ? `mdi-palette-outline` : `mdi-palette`"></v-icon> {{ tray.color
            }}
          </v-tooltip>
        </v-btn>
        <v-btn @click="state.add = !state.add" :prepend-icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`">
          <v-tooltip activator="parent">
            <v-icon :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"></v-icon> Add Tag
          </v-tooltip>
        </v-btn>
        <v-btn prepend-icon="mdi-drag" @dragstart="onDragTrayStart($event, tagMerge)" :draggable="true">
          <v-tooltip activator="parent">
            <v-icon icon="mdi-drag"></v-icon> Drag All Tags
          </v-tooltip>
        </v-btn>
      </VBtnToggle>
    </v-card-actions>

    <v-card-text>
      <TagGroup :tags="(tagMerge as Tag[])" @drop="onDragDrop" @dragover="onDragOver" @click="emit('click', $event)"
        @ctrl-click="manageCtrlClick" @dragstart="onDragStart" @dragend="onDragEnd" :closable="showClosable"
        v-model="tray.selected" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref, onMounted } from 'vue';

import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import Tag from '@/objects/Tag'

import { useClipboardStore } from '@/stores/clipboard'
import { useStateStore } from '@/stores/state'
import { useStyleStore } from '@/stores/styles'

import TagTray from '@/objects/TagTray';
import TagGroup from './TagGroup.vue';

const tray = ref(new TagTray())

const state = useStateStore()
const styles = useStyleStore()
const clipboard = useClipboardStore()

const tagMerge = computed(() => Array.from([...tray.value.tags, ...props.tags]) as Tag[])

const showClosable = computed(() => tray.value.closable || styles.closable)

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

// TAGS & CLICKS

function tagClosed(tag: Tag) {
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
  tags.forEach((tag) => { tagClosed(tag) })
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
