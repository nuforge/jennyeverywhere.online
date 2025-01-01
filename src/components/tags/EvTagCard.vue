<template>
  <v-card @mouseenter=" hoverStart()" @mouseleave="hoverEnd()" @focusin="focusStart()" @focusout="focusEnd()"
    :elevation="showManager ? 10 : 0">
    <v-layout>
      <v-fade-transition>
        <v-system-bar v-show="showManager" @dragover="preventDefault" class="justify-space-evenly align-center"
          :class="focus ? 'border-opacity-100' : 'border-opacity-20'">
          <TagTrayStyles :tray="tray" :labels="labels" :icons="icons" :colors="colors"
            @update:labels="(value: boolean) => { labels = value }"
            @update:icons="(value: boolean) => { icons = value }"
            @update:colors="(value: boolean) => { colors = value }" />
          <TagTrayActions :tray="(tray as unknown as TagTray)" @update:closable="(value) => { closable = value }"
            @delete-drop="onDeleteDropTags" @add-drop="onDragDrop" @dragstart="onDragTrayStart($event, tags)"
            @dragend="onDragEnd" />
        </v-system-bar>
      </v-fade-transition>
      <v-card-text>
        <EvTagGroup :tags="mergedTags" :labels="gLabels" :colors="gColor" :icons="gIcons" @drop="onDragDrop($event)"
          @drag-over="preventDefault" @drag-start="onDragStart($event)" @drag-end="onDragEnd" />
      </v-card-text>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">

import { computed, ref } from 'vue';
import { useStateStore } from '@/stores/state'

import Tag from '@/objects/Tag'
import TagTray from '@/objects/TagTray'
import EvTagGroup from '@/components/tags/EvTagGroup.vue'
import TagTrayActions from '@/components/tags/TagTrayActions.vue';
import TagTrayStyles from '@/components/tags/TagTrayStyles.vue';
const state = useStateStore()

const tray = ref(new TagTray([]))

const mergedTags = computed(() => [...tray.value.tags, ...props.tags] as Tag[])

const labels = ref(true)
const colors = ref(true)
const icons = ref(true)

const gLabels = computed(() => labels.value || tray.value.labels)
const gColor = computed(() => colors.value || tray.value.color)
const gIcons = computed(() => icons.value || tray.value.icons)

const props = defineProps({
  tags: {
    type: Array as () => Tag[],
    default: Array as () => Tag[]
  }
})

// Local State

const manage = ref(false)
const focus = ref(false)

const showManager = computed(() => focus.value || manage.value || state.tagmanager)

const closable = ref(false)

// EMIT AND PROPS

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

// DRAG START

const onDragStart = (event: DragEvent) => {
  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    event.dataTransfer?.setData('text/plain', selectedText);
  }
  tray.value.dragStart()
}
const onDragTrayStart = (event: DragEvent, tags: Tag[]) => {
  console.log('onDragTrayStart', tags)
  state.dragStart()
}

// DRAG END

const onDragEnd = () => {
  tray.value.dragEnd()
}

// DRAG DROP

const onDragDrop = (event: DragEvent) => {
  if (event.dataTransfer) {
    if (event.dataTransfer.getData('text/plain')) {
      // console.log('onDragDrop', event.dataTransfer.getData('text/plain').trim())
      // props.tray.map.stringTag(event.dataTransfer.getData('text/plain').trim())
    }
  }

  tray.value.dragEnd()

  //props.tray.map.addTags(clipboard.paste(true) as Tag[])
  console.log('onDragDrop', 'Todo: ADD Tags from Drop')
}

const onDeleteDropTags = () => {
  console.log('onDeleteDropTags')
}


// DRAG OVER

const preventDefault = (event: Event) => event.preventDefault()


</script>
