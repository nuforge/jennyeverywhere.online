<template>
  <v-expand-x-transition>
    <v-chip label class="overflow-visible" :text="tag.name" :color="colorStyle" :variant="variant" :value="tag.name"
      :icon="tag.icon" :id="`nu_${tag.id}`" :closable="props.closable ?? showClosable" @click:close="onCloseTag"
      @click.right.exact.prevent="onRightClick" @click="onTagClick" @dblclick="onDoubleClick" @dragstart="onDragStart"
      @dragend="onDragEnd" @dragover="onDragOver" :draggable="true">

      <!-- Tag Icon / Space -->
      <template #prepend>
        <v-fab-transition>
          <div v-if="icons">

            <NuIcon :icon="(tag.icon as string)" :color="colorStyle" @click.stop="onClickIcon"
              @right-click="onRightClickIcon" @double-click="onDblClickIcon" :start="labels ? true : false" />

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

            <NuLabel :tag="tag" />
            <NuTooltip :tag="tag" />

          </div>
        </v-expand-x-transition>
        <NuBadge :count="count" v-if="showBadges && count" color="transparent" text-color="accent" />
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
import NuLabel from './NuLabel.vue';
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


const emit = defineEmits(['close', 'click-tag', 'click-action', 'right-click', 'double-click', 'click-icon', 'right-click-icon', 'double-click-icon', 'drag-start', 'drag-end', 'drag-over', 'expand', 'compact', 'toggle'])


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
  emit('click-tag', event, props.tag)
}


function onDoubleClick(event: Event) {
  console.log('onDoubleClick')
  emit('double-click', event, props.tag)
}

function onRightClick(event: Event) {
  emit('right-click', event, props.tag)
}

// ICON CLICKS

function onClickIcon(event: Event) {
  emit('click-icon', event, props.tag)
}

function onRightClickIcon(event: Event, tag: Tag) {

  if (!showSpace.value) { expandTag(props.tag) } else { compactTag(props.tag) }
  emit('right-click-icon', event, tag)
}

function onDblClickIcon(event: Event, tag: Tag) {

  toggleLabel(props.tag)
  if (!showSpace.value) { expandTag(props.tag) } else { compactTag(props.tag) }
  emit('double-click-icon', event, tag)
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
