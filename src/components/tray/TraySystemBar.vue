<script setup lang="ts">
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);
import { ref, reactive, defineEmits, onMounted, computed } from 'vue';

import Tag from '@/objects/nu/Tag';

import TagCardActions from '@/components/tags/TagCardActions.vue';
import TagCardStyles from '@/components/tags/TagCardStyles.vue';
import TagBodyStyles from '@/components/tags/TagBodyStyles.vue';
import TagTray from '@/objects/tags/TagTray';


const props = defineProps({
  modelValue: {
    type: Object as () => TagTray,
    default: () => new TagTray()
  }
})

const tray = reactive(props.modelValue)
const selection = ref<string[]>([])
const focus = ref(false)

const showActions = ref(false);
const showStyles = ref(false);


const mergedTags = computed(() => [...tray.tags, ...props.modelValue.tags] as Tag[])


const minimizeBar = (event: MouseEvent) => {
  console.log(event)
  showStyles.value = false
  showActions.value = false
}

const emit = defineEmits(['drag-start', 'drag-end', 'drag-drop', 'delete-drop', 'toggle-select', 'drag-tray-start', 'update:modelValue'])


const onDragStart = (event: Event, payload: Tag | Tag[]) => {
  console.log('onDragStart', payload)
  emit('drag-start', event, payload)
}

const onDragEnd = (event: Event, tags: Tag[]) => {
  emit('drag-end', event, tags)
}


const doToggleSelect = (event: Event, tag: Tag) => {
  if (selection.value.length === mergedTags.value.length) {
    selection.value = []
  } else {
    selection.value = mergedTags.value.map(tag => tag.id)
  }
  emit('toggle-select', event, tag)
}

const onDragDrop = (event: Event, tag: Tag) => {
  emit('drag-drop', event, tag)
}


const onDeleteDropTags = (event: Event, tags: Tag[]) => {
  console.log('onDeleteDropTags', event, tags)
  tray.dragDrop(tags)
  props.modelValue.dragDrop(tags)
  emit('delete-drop', event, tags)
  onDragEnd(event, tags)
}

const preventDefault = (event: Event) => event.preventDefault()

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
  <v-system-bar @dragover="preventDefault" class="align-center ga-2"
    :class="focus ? 'border-opacity-100' : 'border-opacity-52'" @dblclick="minimizeBar($event)">

    <v-btn :icon="showActions ? 'mdi-menu-close' : 'mdi-menu'" @click="showActions = !showActions" variant="plain"
      @dragover="showActions = true" />
    <v-expand-x-transition>
      <v-card-actions v-if="showActions">

        <TagCardActions :tags="(mergedTags as Tag[])" :closable="tray.closable" :selection="selection"
          @update:closable="(value: boolean) => { tray.closable = value }" @delete-drop="onDeleteDropTags"
          @add-drop="onDragDrop" @drag-start="onDragStart" @drag-end="onDragEnd" @toggle-select="doToggleSelect" />

      </v-card-actions>
    </v-expand-x-transition>
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
</template>
