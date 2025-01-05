<template>
  <v-expand-x-transition>
    <v-chip class="rounded overflow-visible" :text="tag.name" :color="colorStyle" :icon="tag.icon" :variant="variant"
      :value="tag.name" :prepend-icon="labels ? tag.icon : undefined" :id="`nu_${tag.id}`"
      :closable="props.closable ?? showClosable" @click:close="onCloseTag" @click.right.exact.prevent="onRightClick"
      @click="onTagClick" @dblclick="onDoubleClick" @dragstart="onDragStart" @dragend="onDragEnd" @dragover="onDragOver"
      :draggable="true">

      <!-- Tag Icon / Space -->
      <template #prepend>
        <v-fab-transition>
          <div v-if="icons">

            <NuIcon :icon="(tag.icon as string)" :color="colorStyle" @click="onClickIcon"
              @right-click="onRightClickIcon" @double-click="onDblClickIcon" />

          </div>
        </v-fab-transition>
      </template>

      <!-- Tag Label / Value -->
      <template #default>
        <v-expand-x-transition>
          <div v-if="labels">
            <v-expand-x-transition>

              <NuSpace :space="tag.space" v-if="showSpace && tag.space" class="align-center" />

            </v-expand-x-transition>
            {{ tag.name }}

            <NuTooltip :tag="tag" />

            <NuBadge :count="count" v-if="showBadges && count" />

          </div>
        </v-expand-x-transition>
      </template>

    </v-chip>
  </v-expand-x-transition>
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

import useStyleStore from '@/stores/styles';
const styles = useStyleStore()

const showLabels = ref(true);
const showColors = ref(true);
const showIcons = ref(true);
const showBadges = ref(true);
const showClosable = ref(false);

const showSpace = ref(false);

const defaultNoColor = 'text'

const icons = computed(() => showIcons.value && styles.icons && props.tag.icon)
const colors = computed(() => showColors.value && styles.colors && props.tag.color)
const labels = computed(() => showLabels.value && styles.labels && props.tag.name)
const variant = computed(() => styles.variant)

const colorStyle = computed(() => !colors.value ? defaultNoColor : props.tag.color)

const props = defineProps
  ({
    tag: {
      type: Tag,
      required: true,
    },
    label: {
      type: String,
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


const emit = defineEmits(['close', 'click-tag', 'click-action', 'click-icon', 'right-click', 'double-click', 'drag-start', 'drag-end', 'drag-over', 'expand', 'compact', 'toggle'])


const clickAction = (tag: Tag = props.tag) => {
  //console.log('click-action', tag.name)
  emit('click-action', tag)

}

function expandTag(tag: Tag) {
  showSpace.value = showLabels.value
  showLabels.value = true
  //console.log('expandTag', tag)
  emit('expand', tag)
}

function compactTag(tag: Tag) {
  showLabels.value = showSpace.value
  showSpace.value = false
  //console.log('compactTag', tag)
  emit('compact', tag)
}


function toggleLabel(tag: Tag) {

  showLabels.value = showSpace.value
  showSpace.value = !showLabels.value

  //console.log('toggleTag', tag)
  emit('toggle', tag)
}


function onCloseTag(event: Event) {
  emit('close', event, props.tag)
}


function onTagClick(event: Event) {
  clickAction(props.tag)
  emit('click-tag', event, props.tag)
}


function onDoubleClick(event: Event) {
  emit('double-click', event, props.tag)
}

function onRightClick(event: Event) {
  emit('right-click', event, props.tag)
}

// ICON CLICKS

function onClickIcon(event: Event) {
  toggleLabel(props.tag)
  emit('click-icon', event, props.tag)
}

function onRightClickIcon(event: Event, tag: Tag) {

  if (!showSpace.value) { expandTag(props.tag) } else { compactTag(props.tag) }
  emit('right-click', event, tag)
}

function onDblClickIcon(event: Event, tag: Tag) {

  if (!showSpace.value) { expandTag(props.tag) } else { compactTag(props.tag) }
  emit('right-click', event, tag)
}

// DRAG EVENTS
function onDragStart(event: Event) {
  emit('drag-start', event, props.tag)
}

function onDragEnd(event: Event) {
  emit('drag-end', event, props.tag)
}

function onDragOver(event: Event) {
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
