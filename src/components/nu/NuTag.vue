<script setup lang="ts">
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import { ref, computed, defineProps, onMounted } from 'vue';
import type { PropType } from 'vue';
import Tag from '@/objects/NuTag';
import type Value from '@/objects/NuTag';

import NuIcon from '@/components/nu/NuIcon.vue';
import NuLabel from './NuLabel.vue';
import NuSpace from '@/components/nu/NuSpace.vue';
import NuBadge from '@/components/nu/NuBadge.vue';
import NuTooltip from '@/components/nu/NuTooltip.vue';

import useStyleStore from '@/stores/styles';
const styles = useStyleStore()

const showSpace = ref(false);

const defaultNoColor = 'text'

// SETTING Default vs Setting permanent
//const icons = computed(() => props.icons && showIcons.value && styles.icons && props.tag.icon)
//const icons = computed(() => showIcons.value && styles.icons && props.tag.icon)

const icons = computed(() => showIcons.value && styles.display.icons && props.icons)
const colors = computed(() => showColors.value && styles.display.colors && props.colors)
const labels = computed(() => showLabels.value && styles.display.labels && props.labels)

const variant = computed(() => {
  if (showLabels.value && styles.display.variants) {
    return styles.variants as 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain' | undefined;
  }
  return undefined;
});

const colorStyle = computed(() => !colors.value ? defaultNoColor : props.tag.color)
const variantColorStyle = computed(() => variant.value === 'flat' || variant.value === 'elevated' ? 'text' : colorStyle.value)

const props = defineProps
  ({
    tag: {
      type: Tag,
      required: true,
    },
    labels: {
      type: Boolean,
      default: true,
    },
    icons: {
      type: Boolean,
      default: true,
    },
    colors: {
      type: Boolean,
      default: true,
    },
    values: {
      type: Boolean,
      default: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    }, value: {
      type: [Boolean, Number, String, Object] as PropType<Value>, // Explicitly allows Value types
      default: undefined, // Matches the Value type
    }

  })

const showLabels = ref(props.labels);
const showColors = ref(props.colors);
const showIcons = ref(props.icons);
const showClosable = ref(props.closable);

const emit = defineEmits(['close', 'click-tag', 'click', 'click-action', 'right-click', 'double-click', 'click-icon', 'right-click-icon', 'double-click-icon', 'drag-start', 'drag-end', 'drag-over', 'expand-tag', 'compact-tag', 'expand-space', 'toggle-label'])


function expandTag(tag: Tag) {
  showSpace.value = showLabels.value
  showLabels.value = true
  //console.log('expandTag', tag)
  emit('expand-tag', tag)
}

function compactTag(tag: Tag) {
  showLabels.value = showSpace.value
  showSpace.value = false
  //console.log('compactTag', tag)
  emit('compact-tag', tag)
}

function toggleLabel(tag: Tag) {

  showLabels.value = showSpace.value
  showSpace.value = !showLabels.value

  //console.log('toggleTag', tag)
  emit('toggle-label', tag)
}

function expandToSpace(tag: Tag) {

  if (!showSpace.value) { expandTag(props.tag) } else { compactTag(props.tag) }

  //console.log('toggleTag', tag)
  emit('expand-space', tag)
}

function onCloseTag(event: Event) {
  emit('close', event, props.tag)
}

function onTagClick(event: Event) {
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
  emit('click', event, props.tag)
  emit('click-icon', event, props.tag)
}

function onRightClickIcon(event: Event, tag: Tag) {
  expandToSpace(tag)
  emit('right-click-icon', event, tag)
}

function onDblClickIcon(event: Event, tag: Tag) {

  // Clicking the icon draws content toward it, or opens the tag. Double-clicking the icon toggles the label.
  // It is the call to action for the button or tag. ??
  toggleLabel(tag)
  //if (!showSpace.value) { compactTag(props.tag) } else { expandTag(props.tag) }
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

<template>
  <v-expand-x-transition>
    <v-chip label class="overflow-visible" :text="tag.name" :color="colorStyle" :variant="variant" :icon="tag.icon"
      :id="`nu_${tag.id}`" :closable="props.closable ?? showClosable" @click:close="onCloseTag"
      @click.right.exact.prevent="onRightClick" @click="onTagClick" @dblclick="onDoubleClick" @dragstart="onDragStart"
      @dragend="onDragEnd" @dragover="onDragOver" :draggable="true">

      <!-- Tag Icon / Space -->
      <template #prepend>
        <v-fab-transition>
          <div v-if="icons">

            <NuIcon :icon="(tag.icon as string)" :color="variantColorStyle" @click.stop="onClickIcon"
              @right-click="onRightClickIcon" @double-click.stop="onDblClickIcon" :start="labels ? true : false" />


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
        <v-expand-x-transition>
          <NuBadge :icon="`mdi-cards-${tag.space}`" :text-color="colorStyle" />
        </v-expand-x-transition>
      </template>

    </v-chip>
  </v-expand-x-transition>
</template>
