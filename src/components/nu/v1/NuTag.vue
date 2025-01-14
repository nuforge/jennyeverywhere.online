<script setup lang="ts">
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import { ref, computed, defineProps, onMounted } from 'vue';
import Tag from '@/objects/nu/v1/ValTag';
import type TagInterface from '@/objects/nu/TagInterface';

import NuIcon from '@/components/nu/NuIcon.vue';
import NuLabel from '@/components/nu/NuLabel.vue';
import NuSpace from '@/components/nu/NuSpace.vue';
import NuBadge from '@/components/nu/NuBadge.vue';

import useStyleStore from '@/stores/styles';
const styles = useStyleStore();

import DragDataHandler from '@/objects/drag/DragManager';
const drag = new DragDataHandler();

import SettingsManager from '@/objects/SettingsManager';

const settings = ref(
  new SettingsManager({
    icon: true,
    label: true,
    badge: false,
    space: false,
    tooltip: true,
    color: true,
  }),
)

const defaultNoColor = 'text'

const showSpace = computed(() => styles.checkGlobal('spaces') && props.tag.space && settings.value.get('space'))
const showIcon = computed(() => styles.checkGlobal('icons') && props.icons && settings.value.get('icon'))
const showColor = computed(() => styles.checkGlobal('colors') && props.colors && settings.value.get('color') && !styles.filterColors.includes(props.tag.color))
const showLabel = computed(() => styles.checkGlobal('labels') && props.labels && settings.value.get('label'))
const showBadge = computed(() => styles.checkGlobal('values') && props.values && settings.value.get('badge'))
const showTooltip = computed(() => styles.checkGlobal('tooltips') && settings.value.get('tooltip'))

const iconTooltip = computed(() => (showTooltip.value && !showSpace.value && props.tag.space) ? props.tag.space : props.tag.label)
const prependIcon = computed(() => showIcon.value && (showLabel.value || showSpace.value))

const variant = computed(() => {
  if (showLabel.value && styles.get('variants')) {
    return styles.variants as 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain' | undefined;
  }
  return undefined;
});

const colorStyle = computed(() => !showColor.value ? defaultNoColor : props.tag.color)
const variantColorStyle = computed(() => variant.value === 'flat' || variant.value === 'elevated' ? 'text' : colorStyle.value)

const props = defineProps
  ({
    tag: {
      type: Tag,
      required: true,
    },
    value: {
      type: [Boolean, Number, String, Object, Tag], // Explicitly allows Value types
      default: undefined, // Matches the Value type
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
    }

  })
const emit = defineEmits(['close', 'click-tag', 'click', 'click-action', 'right-click', 'double-click', 'click-icon', 'right-click-icon', 'double-click-icon', 'drag-start', 'drag-end', 'drag-over', 'expand-tag', 'compact-tag', 'expand-space', 'toggle-label'])

function showLabels() {
  settings.value.set('label', true)
}

function expandTag(tag: TagInterface) {

  settings.value.set('space', settings.value.get('label'))
  showLabels()
  //console.log('expandTag', tag)
  emit('expand-tag', tag)
}

function compactTag(tag: TagInterface) {
  settings.value.set('label', settings.value.get('space'))
  settings.value.set('space', false)
  //console.log('compactTag', tag)
  emit('compact-tag', tag)
}

function toggleLabel(tag: TagInterface) {
  settings.value.set('label', settings.value.get('space'))
  settings.value.set('space', !settings.value.get('label'))
  //console.log('toggleTag', tag)
  emit('toggle-label', tag)
}

function expandToSpace(tag: TagInterface) {

  if (!settings.value.get('space')) { expandTag(props.tag) } else { compactTag(props.tag) }

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

function onRightClickIcon(event: Event, tag: TagInterface) {
  expandToSpace(tag)
  emit('right-click-icon', event, tag)
}

function onDblClickIcon(event: Event, tag: Tag) {

  // Clicking the icon draws content toward it, or opens the tag. Double-clicking the icon toggles the label.
  // It is the call to action for the button or tag. ??
  toggleLabel(tag)
  //if (!space.value) { compactTag(props.tag) } else { expandTag(props.tag) }
  emit('double-click-icon', event, tag)
}

// DRAG EVENTS
function onDragStart(event: DragEvent) {
  drag.dragStart(event, 'tag', props.tag.toString())
  emit('drag-start', event, props.tag)
}

function onDragEnd(event: DragEvent) {
  drag.dragEnd(event)
  emit('drag-end', event, props.tag)
}

function onDragOver(event: DragEvent) {
  drag.dragOver(event)
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
  <v-chip label class="overflow-visible" :text="tag.label" :color="colorStyle" :variant="variant" :icon="tag.icon"
    :value="value" :id="`nu_${tag.id}`" :closable="props.closable" @click:close="onCloseTag"
    @click.right.exact.prevent="onRightClick" @click="onTagClick" @dblclick="onDoubleClick" @dragstart="onDragStart"
    @dragend="onDragEnd" @dragover="onDragOver" :draggable="true">
    <!-- Tag Icon / Space -->

    <template #prepend>
      <v-fab-transition>
        <div v-if="showIcon && settings.has('icon')">
          <v-tooltip location="top start">
            <template #activator="{ props }">
              <NuIcon :icon="(tag.icon as string)" :color="variantColorStyle" @click="onClickIcon"
                @right-click="onRightClickIcon" @double-click.stop="onDblClickIcon" :start="prependIcon ? true : false"
                v-bind="props" />
            </template>
            {{ iconTooltip }}
          </v-tooltip>
        </div>
      </v-fab-transition>
    </template>
    <!-- Tag Label / Value -->
    <template #default>
      <v-slide-x-transition>
        <NuSpace v-if="showSpace && settings.has('space') && tag.space" :space="tag.space" class="align-center" />
      </v-slide-x-transition>
      <v-slide-x-transition>
        <NuLabel v-if="showLabel && props.tag" :tag="props.tag" />
      </v-slide-x-transition>
      <v-fab-transition>
        <NuBadge v-if="showBadge && tag" :icon="value ? undefined : tag.icon" :content="value || undefined"
          :text-color="colorStyle" />
      </v-fab-transition>
    </template>

  </v-chip>
</template>
