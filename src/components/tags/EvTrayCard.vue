<template>
  <v-layout class="d-flex flex-column">
    <v-card @mouseenter=" hoverStart()" @mouseleave="hoverEnd()" @focusin="focusStart()" @focusout="focusEnd()"
      :elevation="showManager ? 10 : 0" class="bg-transparent">
      <v-fade-transition>
        <v-system-bar v-show="showManager" @dragover="preventDefault" class="align-center ga-2"
          :class="focus ? 'border-opacity-100' : 'border-opacity-52'" @dblclick="minimizeBar($event)">

          <v-btn :icon="showActions ? 'mdi-menu-close' : 'mdi-menu'" @click="showActions = !showActions" variant="plain"
            @dragover="showActions = true" />
          <v-expand-x-transition>
            <v-card-actions v-if="showActions">
              <TagCardActions :tags="(mergedTags as Tag[])" :closable="tray.closable" :selection="selection"
                @update:closable="(value: boolean) => { tray.closable = value }" @delete-drop="onDeleteDropTags"
                @add-drop="onDragDrop" @drag-start="onDragStart" @drag-end="onDragEnd"
                @toggle-select="doToggleSelect" />
            </v-card-actions>
          </v-expand-x-transition>
          <EvTag :text="name" :color="tray.tag.color" :icon="mergedTags.length === 0 ? 'mdi-tray' : 'mdi-tray-full'"
            :ripple="false" variant="plain" @dragstart="onDragTrayStart" :draggable="true" />
          <v-spacer></v-spacer>
          <v-expand-x-transition>
            <v-card-actions v-if="showStyles">
              <TagCardStyles :tray="tray.tray" :labels="tray.labels" :icons="tray.icons" :colors="tray.colors"
                :logs="tray.logs" @update:tray="(value: boolean) => { tray.tray = value }"
                @update:labels="(value: boolean) => { tray.labels = value }"
                @update:icons="(value: boolean) => { tray.icons = value }"
                @update:colors="(value: boolean) => { tray.colors = value }"
                @update:logs="(value: boolean) => { tray.logs = value }" />
              <TagBodyStyles :bodys="tray.bodys" :titles="tray.titles"
                @update:bodys="(value: boolean) => { tray.bodys = value }"
                @update:titles="(value: boolean) => { tray.titles = value }" />
            </v-card-actions>
          </v-expand-x-transition>
          <v-btn :icon="showStyles ? 'mdi-dots-vertical' : 'mdi-dots-horizontal'" @click="showStyles = !showStyles"
            variant="plain"></v-btn>
        </v-system-bar>
      </v-fade-transition>

      <v-fade-transition>
        <v-card-text v-if="!minimized">

          <v-fade-transition>
            <EvTagGroup v-model="selection" :multiple="multiple" v-if="mergedTags.length > 0 && tray.tray"
              :tags="mergedTags" :labels="tray.labels" :colors="tray.colors" :closable="tray.closable"
              :icons="tray.icons" @drop="onDragDrop" @drag-over="preventDefault" @drag-start="onDragStart"
              @drag-end="onDragEnd" @right-click="onRightClick" @click-tag="onClickTag" />
          </v-fade-transition>
          <v-fade-transition>
            <EmptyTagTray @dragover="preventDefault" @drop="onDragDrop" @drag-end="onDragEnd"
              v-if="mergedTags.length === 0 && showManager" />
          </v-fade-transition>
          <v-fade-transition>
            <v-container v-if="tray.logs && body">
              <MarkdownRenderer v-if="tray.bodys" :text="body" :tags="selectedTags"
                :class="selectedTags.length === 0 ? 'text-body' : 'on-surface'" @right-click="onRightClick"
                @click-body="onClickBody" @create-tag="onCreateTag" @click-tag="onClickTag" />
            </v-container>
          </v-fade-transition>
        </v-card-text>
      </v-fade-transition>
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
import { usePersonaStore } from '@/stores/persona';
import TagBodyStyles from './TagBodyStyles.vue';

const persona = usePersonaStore()
const state = useStateStore()
const clipboard = useClipboardStore()

// TAG TRAY
const tray = ref<TagTray>(new TagTray())
const legend = ref(new TagTray().map)
const selection = ref<string[]>([])

const manage = ref(false)
const focus = ref(false)

// Default Tray Settings
const minimized = ref(false)
const showStyles = ref(false)
const showActions = ref(false)

const mergedTags = computed(() => [...legend.value.tags, ...props.tags] as Tag[])
const showManager = computed(() => !props.dense && (focus.value || manage.value || state.tagmanager))
const selectedTags = computed(() => { return mergedTags.value.filter(tag => selection.value.includes(tag.id)) })

const minimizeBar = (event: MouseEvent) => {
  console.log(event)
  showStyles.value = false
  showActions.value = false
}

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
  },
  multiple: {
    type: Boolean,
    default: true
  }

})
// Local State


// EMIT AND PROPS

const emit = defineEmits(['update:modelValue', 'click-tag'])

watch(() => props.modelValue, (newVal) => {
  selection.value = newVal
});
watch(() => selection.value, (newVal) => {
  emit('update:modelValue', newVal)
});

const onCreateTag = (event: MouseEvent, tag: Tag) => {
  //console.log('onClickTag:Tag', event, tag)
  persona.focusOn(tag, true)
  persona.openDrawer()

}

const onClickTag = (event: MouseEvent, tag: Tag) => {
  //console.log('onClickTag:Tag', tag)
  persona.focusOn(tag, true)
  emit('click-tag', event, tag)

}

const onClickBody = (event: MouseEvent, tag: Tag) => {
  //console.log('onClickTag:Tag', tag)
  persona.focusOn(tag, true)

}

const onRightClick = (event: MouseEvent, tag: Tag) => {
  if (tag) persona.focusOn(tag, true)
  persona.openDrawer()

}

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

function doToggleSelect() {
  if (selection.value.length === mergedTags.value.length) {
    selection.value = []
  } else {
    selection.value = mergedTags.value.map(tag => tag.id)
  }
}

// DRAG START
/* <EvTag :text="name" :color="tray.tag.color" :icon="mergedTags.length === 0 ? 'mdi-tray' : 'mdi-tray-full'" :ripple="false" variant="plain" @dragstart="onDragStart" :draggable="true" /> */
const onDragTrayStart = (event: DragEvent) => {
  console.log('onDragTrayStart', event, mergedTags.value)
  writeDataTransfer(event, 'tag', 'tray')
  onDragStart(event, mergedTags.value)
}

const onDragStart = (event: DragEvent, payload: Tag | Tag[]) => {
  console.log('onDragStart', payload)

  writeDataTransfer(event, 'tag', Array.isArray(payload) ? 'tags' : 'tag')
  //console.log('payload', payload)
  clipboard.copy(payload as Tag[])
  //console.log('clipboard', clipboard.clipboard) // Now what? Clipboard?
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
      console.log('onDragDrop.dataTransfer', event.dataTransfer.getData('text/plain').trim())
      legend.value.createTag(event.dataTransfer.getData('text/plain').trim())
      // props.tray.map.stringTag(event.dataTransfer.getData('text/plain').trim())
    }
  }
  legend.value.add(clipboard.paste(true) as Tag[])
  onDragEnd()

}

const onDeleteDropTags = () => {
  //console.log('onDeleteDropTags', clipboard.paste(), event)
  legend.value.delete(clipboard.paste(true) as Tag[])
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
