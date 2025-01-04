<template>
  <v-chip class="rounded overflow-visible" :text="tag.name" :color="!colors ? defaultNoColor : tag.color"
    :icon="tag.icon" :value="tag.name" :prepend-icon="labels ? tag.icon : undefined" :id="`nu_${tag.id}`"
    :closable="tag.closable" @click:close="onCloseTag" @click.right.exact.prevent="onRightClick" @click="onTagClick"
    @dblclick="onDoubleClick" @dragstart="onDragStart" @dragend="onDragEnd" @dragover="onDragOver" :draggable="true">

    <!-- Tag Icon / Space -->
    <template #prepend>
      <v-fab-transition>
        <div v-if="icons">

          <NuIcon :icon="tag.icon" :color="tag.color" @click="onClickIcon" @right-click="onRightClickIcon" />


        </div>
      </v-fab-transition>
    </template>

    <!-- Tag Label / Value -->
    <template #default>
      <v-expand-x-transition>
        <div v-if="labels">
          <v-slide-x-transition>

            <NuSpace :space="tag.space" v-if="showSpace && tag.space" class="align-center" />

          </v-slide-x-transition>
          {{ tag.name }}
          <NuTooltip :tag="tag" />
          <NuBadge :count="count" />

        </div>
      </v-expand-x-transition>
    </template>

  </v-chip>
</template>

<script setup lang="ts">


import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import { ref, computed, defineProps, onMounted } from 'vue';
import Tag from '@/objects/Tag';
import NuTooltip from '@/components/nu/NuTooltip.vue';
import NuBadge from '@/components/nu/NuBadge.vue';
import NuIcon from '@/components/nu/NuIcon.vue';
import NuSpace from '@/components/nu/NuSpace.vue';

import { useStyleStore } from '@/stores/styles';
const styles = useStyleStore()

const showLabels = ref(true);
const showColors = ref(true);
const showIcons = ref(true);

const showSpace = ref(false);

const defaultNoColor = 'text'

const icons = computed(() => showIcons.value && styles.icons && props.tag.icon)
const colors = computed(() => showColors.value && styles.colors && props.tag.color)
const labels = computed(() => showLabels.value && styles.labels && props.tag.name)

const props = defineProps
  ({
    tag: {
      type: Tag as Tag,
      required: true,
    },
    count: {
      type: Number,
      default: 1,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    },

  })

const clickAction = (tag: Tag = props.tag) => {
  console.log('clickAction')
  if (tag.action) {
    return tag.action()
  }
}

const emit = defineEmits(['close', 'click-tag', 'click-icon', 'right-click', 'double-click', 'drag-start', 'drag-end', 'drag-over', 'expand', 'compact'])


function expandTag(tag: Tag) {
  showSpace.value = showLabels.value
  showLabels.value = true
  console.log('expandTag', tag)
  emit('expand', tag)
}

function compactTag(tag: Tag) {
  showLabels.value = showSpace.value
  showSpace.value = false
  console.log('compactTag', tag)
  emit('compact', tag)
}


function onActivity(event: MouseEvent | KeyboardEvent, tag: Tag) {
  event.dataTransfer?.setData('text/plain', tag.id);
}

function onCloseTag(event: MouseEvent) {
  onActivity(event, props.tag)
  emit('close', event, props.tag)
}


function onTagClick(event: MouseEvent | KeyboardEvent) {
  onActivity(event, props.tag)
  emit('click-tag', event, props.tag)
  return clickAction(props.tag)
}


function onDoubleClick(event: MouseEvent | KeyboardEvent) {
  onActivity(event, props.tag)
  emit('double-click', event, props.tag)
}

function onRightClick(event: MouseEvent | KeyboardEvent) {
  onActivity(event, props.tag)
  emit('right-click', event, props.tag)
}

// ICON CLICKS

function onClickIcon(event: MouseEvent | KeyboardEvent) {
  compactTag(props.tag)
  onActivity(event, props.tag)
  emit('click-icon', event, props.tag)
}

function onRightClickIcon(event: MouseEvent | KeyboardEvent, tag: Tag) {

  expandTag(props.tag)

  onActivity(event, tag)
  emit('right-click', event, tag)
}

// DRAG EVENTS
function onDragStart(event: MouseEvent | KeyboardEvent) {
  onActivity(event, props.tag)
  emit('drag-start', event, props.tag)
}

function onDragEnd(event: MouseEvent | KeyboardEvent) {
  onActivity(event, props.tag)
  emit('drag-end', event, props.tag)
}

function onDragOver(event: MouseEvent | KeyboardEvent) {
  onActivity(event, props.tag)
  emit('drag-over', event, props.tag)
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
