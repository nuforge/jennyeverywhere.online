<template>
  <v-card @mouseenter=" hoverStart()" @mouseleave="hoverEnd()" @focusin="focusStart()" @focusout="focusEnd()"
    :elevation="showManager ? 10 : 0" class="bg-transparent">
    <v-layout>
      <v-fade-transition>
        <v-system-bar v-if="showManager" @dragover="preventDefault" class="justify-space-evenly align-center"
          :class="focus ? 'border-opacity-100' : 'border-opacity-20'" transition="fab-transition">
          <EvTag :text="name" :color="tray.tag.color" :icon="tray.tag.icon" class="opacity-20" :ripple="false"
            variant="plain" />
          <TagCardStyles :labels="tray.labels" :icons="tray.icons" :colors="tray.colors"
            @update:labels="(value: boolean) => { tray.labels = value }"
            @update:icons="(value: boolean) => { tray.icons = value }"
            @update:colors="(value: boolean) => { tray.colors = value }" />
          <TagCardActions :tags="(mergedTags as Tag[])" :closable="tray.closable"
            @update:closable="(value: boolean) => { tray.closable = value }" @delete-drop="onDeleteDropTags"
            @add-drop="onDragDrop" @drag-start="onDragStart" @drag-end="onDragEnd" />
        </v-system-bar>
      </v-fade-transition>
      <v-card-text>
        <v-fade-transition>
          <EvTagGroup v-model="selection" v-if="mergedTags.length > 0" :tags="mergedTags" :labels="tray.labels"
            :colors="tray.colors" :closable="tray.closable" :icons="tray.icons" @drop="onDragDrop"
            @drag-over="preventDefault" @drag-start="onDragStart" @drag-end="onDragEnd" />
        </v-fade-transition>
        <div
          class="d-flex align-center justify-center ma-2 mt-4 pa-1 rounded border-dashed border-md border-opacity-100 border-accent bg-surface opacity-30"
          v-if="mergedTags.length === 0 && showManager" @dragover="preventDefault" @drop="onDragDrop"
          @drag-end="onDragEnd"><v-label><v-icon icon='mdi-tag-arrow-down-outline' size="small"
              density="compact"></v-icon></v-label>
        </div>
      </v-card-text>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, computed, onMounted } from 'vue';
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import { useStateStore } from '@/stores/state'
import { useClipboardStore } from '@/stores/clipboard';

import Tag from '@/objects/Tag'
import TagTray from '@/objects/TagTray'
import EvTagGroup from '@/components/tags/EvTagGroup.vue'
import TagCardActions from '@/components/tags/TagCardActions.vue';
import TagCardStyles from '@/components/tags/TagCardStyles.vue';
import EvTag from './EvTag.vue';

const state = useStateStore()
const clipboard = useClipboardStore()

// TAG TRAY
const tray = ref(new TagTray())
const selection = ref<string[]>([])

const manage = ref(false)
const focus = ref(false)

const mergedTags = computed(() => [...tray.value.tags, ...props.tags] as Tag[])
const showManager = computed(() => focus.value || manage.value || state.tagmanager)

const props = defineProps({
  tags: {
    type: Array as () => Tag[],
    default: Array as () => Tag[]
  },
  modelValue: {
    type: Array as () => string[],
    default: () => []
  },
  labels: {
    type: Boolean,
    default: true
  },
  icons: {
    type: Boolean,
    default: true
  },
  colors: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: false
  },
  tag: {
    type: Object as () => Tag,
    default: null
  },
  name: {
    type: String,
    default: 'Tray'
  }

})
// Local State


// EMIT AND PROPS

const emit = defineEmits(['update:modelValue'])

watch(() => selection.value, (newVal) => {
  emit('update:modelValue', newVal)
});


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

const onDragStart = (event: DragEvent, payload: Tag | Tag[]) => {

  writeDataTransfer(event, 'tag', Array.isArray(payload) ? 'tags' : 'tag')
  //console.log('payload', payload)
  //console.log('dataTransfer', event.dataTransfer?.getData('text/plain'))
  clipboard.copy(payload as Tag[])
  //console.log('clipboard', clipboard.value.tags) // Now what? Clipboard?
  state.dragStart()
  tray.value.dragStart()
}

// DRAG END

const onDragEnd = () => {
  clipboard.clear()
  state.dragEnd()
  tray.value.dragEnd()
}

// DRAG DROP

const onDragDrop = (event: DragEvent) => {
  if (event.dataTransfer) {
    if (event.dataTransfer.getData('text/plain')) {
      //console.log('onDragDrop', event.dataTransfer.getData('text/plain').trim())
      // props.tray.map.stringTag(event.dataTransfer.getData('text/plain').trim())
    }
  }
  //console.log('onDragDrop: ', clipboard.paste())
  tray.value.copy(clipboard.paste(true) as Tag[])
  onDragEnd()

}

const onDeleteDropTags = () => {
  //console.log('onDeleteDropTags', clipboard.paste(), event)
  tray.value.map.delete(clipboard.paste(true) as Tag[])
  onDragEnd()
}


// DRAG OVER

const preventDefault = (event: Event) => event.preventDefault()

const writeDataTransfer = (event: DragEvent, type: string, data: string) => {
  if (!event.dataTransfer) return
  event.dataTransfer.clearData();
  event.dataTransfer.setData(type, data);

  const selectedText = window.getSelection()?.toString().trim();
  if (selectedText) {
    event.dataTransfer?.setData('text/plain', selectedText);
  }
  if (dragImage.value) {
    event.dataTransfer?.setDragImage(dragImage.value, 10, 10);
  } else {
    console.warn('Drag image not ready!');
  }
  if (!event.dataTransfer) return
}

onMounted(() => {
  // Preload the drag image
  const img = new Image();
  img.src = imgSrc;

  img.onload = () => {
    dragImage.value = img;
  };
});

</script>
