<template>
  <v-card :variant="state.dragging ? 'elevated' : 'flat'" @dragover="dragOver">
    <v-card-actions :class="tray.dragging ? `bg-surface` : `bg-background`">
      <VBtnToggle>

        <v-btn @click="styles.closable = !styles.closable"
          :prepend-icon="styles.closable ? `mdi-delete-outline` : `mdi-delete`" @drop="dropDeleteTags">
          <v-tooltip activator="parent">
            Show Tag Closers: <v-icon :icon="styles.closable ? `mdi-delete-outline` : `mdi-delete`"></v-icon> {{
              !styles.closable
            }}
          </v-tooltip>
        </v-btn>
        <v-btn @click="styles.labels = !styles.labels"
          :prepend-icon="styles.labels ? `mdi-label-off-outline` : `mdi-label`">
          <v-tooltip activator="parent">
            Show labels: <v-icon :icon="styles.labels ? `mdi-label-off-outline` : `mdi-label`"></v-icon> {{
              !styles.labels
            }}
          </v-tooltip>
        </v-btn>
        <v-btn @click="styles.icons = !styles.icons" :prepend-icon="styles.icons ? `mdi-eye-off-outline` : `mdi-eye`">
          <v-tooltip activator="parent">
            Show icons: <v-icon :icon="styles.icons ? `mdi-eye-off-outline` : `mdi-eye`"></v-icon> {{ !styles.icons }}
          </v-tooltip>
        </v-btn>
        <v-btn @click="styles.color = !styles.color"
          :prepend-icon="styles.color ? `mdi-palette` : `mdi-palette-outline`">
          <v-tooltip activator="parent">
            Show color: <v-icon :icon="styles.color ? `mdi-palette-outline` : `mdi-palette`"></v-icon> {{ styles.color
            }}
          </v-tooltip>
        </v-btn>
        <v-btn :prepend-icon="`mdi-drag`" @dragstart="dragTrayStart($event, tagMerge)" :draggable="true">
          <v-tooltip activator="parent">
            <v-icon :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"></v-icon> Add Tag
          </v-tooltip>
        </v-btn>
        <v-btn @click="state.add = !state.add" :prepend-icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`">
          <v-tooltip activator="parent">
            <v-icon :icon="state.add ? `mdi-tag-plus` : `mdi-tag-plus-outline`"></v-icon> Add Tag
          </v-tooltip>
        </v-btn>

      </VBtnToggle>
    </v-card-actions>


    <v-card-text>
      <v-chip-group draggable column multiple @drop="dragDrop" @dragover="dragOver" v-model="tray.selected">
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

import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import Tag from '@/objects/Tag'

import { useClipboardStore } from '@/stores/clipboard'
import { useStateStore } from '@/stores/state'
import { useStyleStore } from '@/stores/styles'

import TagTray from '@/objects/TagTray';

const tray = ref(new TagTray())

const state = useStateStore()
const styles = useStyleStore()
const clipboard = useClipboardStore()

const tagMerge = computed(() => Array.from([...tray.value.tags, ...props.tags]) as Tag[])

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

const dragStart = () => {
  tray.value.dragging = true
  state.dragStart()
}

const dragTagStart = (event: DragEvent, tag: Tag) => {
  // console.log('Tag.Start', tag.id)
  writeDataTransfer(event, 'tag', tag.id)
  state.dragStart()

  console.log('Tag.Start: tray.value.selected', tray.value.selected)

  clipboard.copy(tag)
  dragStart()
}


const dragTrayStart = (event: DragEvent, tags: Tag[]) => {
  //console.log('Tray.Start', tags)
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
  tray.value.dragging = false
  // console.log('drag.End')
  state.dragEnd()
}

const dragTagEnd = () => {
  // console.log('Tag.End', tag)
  dragEnd()
}


// DRAG DROP

const dragDrop = () => {
  tray.value.dragging = false
  //console.log('drag.Drop')
  //const tagMapDifference = tagMap.value.difference(tags)
  //console.log('TagTray.dragDrop', tags, tagMap.value.tagList, tagMapDifference)
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
