<template>
  <v-layout class="d-flex flex-column">
    <v-card @mouseenter=" hoverStart()" @mouseleave="hoverEnd()" @focusin="focusStart()" @focusout="focusEnd()"
      :elevation="showManager ? 10 : 0" class="bg-transparent">
      <v-fade-transition>
        <v-system-bar v-show="showManager" @dragover="preventDefault" class="align-center ga-2"
          :class="focus ? 'border-opacity-100' : 'border-opacity-52'">

          <v-btn :icon="act ? 'mdi-dots-vertical' : 'mdi-dots-horizontal'" @click="act = !act" variant="plain"></v-btn>
          <v-expand-x-transition>
            <v-card-actions v-if="act">
              <TagCardActions :tags="(mergedTags as Tag[])" :closable="tray.closable"
                @update:closable="(value: boolean) => { tray.closable = value }" @delete-drop="onDeleteDropTags"
                @add-drop="onDragDrop" @drag-start="onDragStart" @drag-end="onDragEnd" />
            </v-card-actions>
          </v-expand-x-transition>
          <EvTag :text="name" :color="tray.tag.color" icon="mdi-tray-full" class="opacity-20 " :ripple="false"
            variant="plain" @dragstart="onDragStart" :draggable="true" />

          <v-spacer></v-spacer>

          <v-expand-x-transition>
            <v-card-actions v-if="min">
              <TagCardStyles :tray="tray.tray" :labels="tray.labels" :icons="tray.icons" :colors="tray.colors"
                :bodys="tray.bodys" @update:tray="(value: boolean) => { tray.tray = value }"
                @update:labels="(value: boolean) => { tray.labels = value }"
                @update:icons="(value: boolean) => { tray.icons = value }"
                @update:colors="(value: boolean) => { tray.colors = value }"
                @update:bodys="(value: boolean) => { tray.bodys = value }" />
            </v-card-actions>
          </v-expand-x-transition>
          <v-btn :icon="min ? 'mdi-menu-open' : 'mdi-menu'" @click="min = !min" variant="plain"></v-btn>

        </v-system-bar>
      </v-fade-transition>

      <v-card-text>
        <v-fade-transition>
          <v-container v-if="tray.bodys && body">
            <h2>{{ name }}</h2>
            <MarkdownRenderer :text="body" :tags="selectedTags" />
          </v-container>
        </v-fade-transition>
        <v-fade-transition>
          <EvTagGroup v-model="selection" v-if="mergedTags.length > 0 && tray.tray" :tags="mergedTags"
            :labels="tray.labels" :colors="tray.colors" :closable="tray.closable" :icons="tray.icons" @drop="onDragDrop"
            @drag-over="preventDefault" @drag-start="onDragStart" @drag-end="onDragEnd" />
        </v-fade-transition>
        <v-fade-transition>
          <EmptyTagTray @dragover="preventDefault" @drop="onDragDrop" @drag-end="onDragEnd"
            v-if="mergedTags.length === 0 && showManager" />
        </v-fade-transition>
      </v-card-text>
    </v-card>
  </v-layout>
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
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import EmptyTagTray from '@/components/tags/EmptyTagTray.vue';

const state = useStateStore()
const clipboard = useClipboardStore()

// TAG TRAY
const tray = ref(new TagTray())
const selection = ref<string[]>([])

const manage = ref(false)
const focus = ref(false)
const min = ref(false)
const act = ref(false)

const mergedTags = computed(() => [...tray.value.tags, ...props.tags] as Tag[])
const showManager = computed(() => !props.dense && (focus.value || manage.value || state.tagmanager))
const selectedTags = computed(() => { return mergedTags.value.filter(tag => selection.value.includes(tag.id)) })

const props = defineProps({
  tag: {
    type: Object as () => Tag,
    default: null
  },
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
  name: {
    type: String,
  },
  body: {
    type: String,
  },
  dense: {
    type: Boolean,
    default: false
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
  console.log('payload', payload)
  console.log('dataTransfer', event.dataTransfer?.getData('text/plain'))
  clipboard.copy(payload as Tag[])
  console.log('clipboard', clipboard.clipboard) // Now what? Clipboard?
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
