<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, computed, onMounted } from 'vue';
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import useStateStore from '@/stores/state'
import useClipboardStore from '@/stores/clipboard';

import Tag from '@/objects/nu/v1/ValTag'
import TagTray from '@/objects/tags/TagTray'
import EvTagGroup from '@/components/tags/EvTagGroup.vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import EmptyTagTray from '@/components/tags/EmptyTagTray.vue';
import usePersonaStore from '@/stores/persona';


import useStyleStore from '@/stores/styles';
import TraySystemBar from '../tray/TraySystemBar.vue';
const styles = useStyleStore()

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

const mergedTags = computed(() => [...legend.value.tags, ...props.tags] as Tag[])
const showManager = computed(() => !props.dense && (focus.value || manage.value || state.tagmanager))
const selectedTags = computed(() => { return mergedTags.value.filter(tag => selection.value.includes(tag.id)) })

// EMIT AND PROPS
const emit = defineEmits(['update:modelValue', 'click-tag', 'click-icon', 'double-click-tag'])

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
  },
  multiple: {
    type: Boolean,
    default: true
  }

})


watch(() => props.modelValue, (newVal) => {
  selection.value = newVal
});
watch(() => selection.value, (newVal) => {
  emit('update:modelValue', newVal)
});

const onCreateTag = (event: MouseEvent, tag: Tag) => {
  //console.log('onClickTag:Tag', event, tag)
  persona.focusOn(tag)
  persona.openDrawer()

}

const onClickIcon = (event: MouseEvent, tag: Tag) => {
  console.log('onClickIcon:Tag', tag)
  //persona.focusOn(tag)
  emit('click-icon', event, tag)

}
const onClickTag = (event: MouseEvent, tag: Tag) => {
  //console.log('onClickTag:Tag', tag)
  //persona.focusOn(tag)
  emit('click-tag', event, tag)

}
const onDoubleClick = (event: MouseEvent, tag: Tag) => {
  //console.log('onClickTag:Tag', tag)
  if (tag) persona.focusOn(tag)
  persona.openDrawer()
  emit('double-click-tag', event, tag)

}

const onClickBody = (event: MouseEvent, tag: Tag) => {
  //console.log('onClickTag:Tag', tag)
  persona.focusOn(tag)

}

const onRightClick = (event: MouseEvent, tag: Tag) => {
  if (tag) persona.focusOn(tag)
  //persona.openDrawer()

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



const onDragStart = (event: DragEvent, payload: Tag | Tag[]) => {
  console.log('onDragStart', payload)

  writeDataTransfer(event, 'tag', Array.isArray(payload) ? 'tags' : 'tag')
  //console.log('payload', payload)
  clipboard.copy(payload)
  //console.log('clipboard', clipboard.clipboard) // Now what? Clipboard?
  state.dragStart()
  tray.value.dragStart()
}

// DRAG START
/* <EvTag :text="name" :color="tray.tag.color" :icon="mergedTags.length === 0 ? 'mdi-tray' : 'mdi-tray-full'" :ripple="false" variant="plain" @dragstart="onDragStart" :draggable="true" /> */
const onDragTrayStart = (event: DragEvent) => {
  console.log('onDragTrayStart', event, mergedTags.value)
  writeDataTransfer(event, 'tag', 'tray')
  onDragStart(event, mergedTags.value)
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
  const pastedTags = clipboard.paste(true) as Tag[];
  legend.value.addTags(pastedTags);
  onDragEnd()

}


const onDeleteDropTags = (event: Event, tags: Tag[]) => {
  console.log('onDeleteDropTags', clipboard.paste(), event, tags)
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
<template>
  <v-layout class="d-flex flex-column">
    <v-card @mouseenter=" hoverStart()" @mouseleave="hoverEnd()" @focusin="focusStart()" @focusout="focusEnd()"
      :elevation="showManager ? 10 : 0" class="bg-transparent">
      <v-fade-transition>

        <TraySystemBar v-show="showManager" :tray="tray" @delete-drop="onDeleteDropTags"
          @drag-tray-start="onDragTrayStart">
        </TraySystemBar>
      </v-fade-transition>

      <v-fade-transition>
        <v-card-text v-if="!minimized">

          <v-fade-transition>
            <EvTagGroup v-model="selection" :multiple="multiple"
              v-if="mergedTags.length > 0 && tray.tray && styles.trays" :tags="mergedTags" :labels="tray.labels"
              :colors="tray.colors" :closable="tray.closable" :icons="tray.icons" @drop="onDragDrop"
              @drag-over="preventDefault" @drag-start="onDragStart" @drag-end="onDragEnd" @right-click="onRightClick"
              @click-tag="onClickTag" @double-click="onDoubleClick" @click-icon="onClickIcon" />
          </v-fade-transition>
          <v-fade-transition>
            <EmptyTagTray @dragover="preventDefault" @drop="onDragDrop" @drag-end="onDragEnd"
              v-if="mergedTags.length === 0 && showManager" />
          </v-fade-transition>
          <v-fade-transition>
            <v-container v-if="tray.logs && body && styles.logs">
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
