<script setup lang="ts">
import imgSrc from '@/assets/images/jenny-everywhere-icon-blue.png';
const dragImage = ref<HTMLImageElement | null>(null);

import { ref, computed, defineProps, onMounted } from 'vue';
import Tag from '@/objects/nu/NuTag';

import NuIcon from '@/components/nu/NuIcon.vue';
import NuLabel from '@/components/nu/NuLabel.vue';
import NuSpace from '@/components/nu/NuSpace.vue';
import NuBadge from '@/components/nu/NuBadge.vue';
import NuTooltip from '@/components/nu/NuTooltip.vue';

import useStyleStore from '@/stores/styles';
const styles = useStyleStore()

const defaultNoColor = 'text'

// SETTING Default vs Setting permanent
//const icons = computed(() => props.icons && showIcons.value && styles.icons && props.tag.icon)
//const icons = computed(() => showIcons.value && styles.icons && props.tag.icon)

const icon = ref(true)
const label = ref(true)
const space = ref(false)
const tooltip = ref(true)
const color = ref(true)

const showSpace = computed(() => space.value && props.tag.space)
const showIcon = computed(() => styles.display.icons && props.icons && icon.value)
const showColor = computed(() => styles.display.colors && props.colors && color.value && !styles.filterColors.includes(props.tag.color))
const showLabel = computed(() => styles.display.labels && props.labels && label.value)
const showValue = computed(() => styles.display.values && props.values)
const showTooltip = computed(() => styles.display.tooltips && tooltip.value)

const prependIcon = computed(() => showIcon.value && (showLabel.value || showSpace.value))


const variant = computed(() => {
  if (showLabel.value && styles.display.variants) {
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

const writeDataTransfer = (event: DragEvent, type: string, data: string) => {
  console.log('writeDataTransfer', data)
  if (!event.dataTransfer) return
  event.dataTransfer.clearData();
  event.dataTransfer.setData(type, data);

  if (dragImage.value) {
    event.dataTransfer?.setDragImage(dragImage.value, 10, 10);
  } else {
    console.warn('Drag image not ready!');
  }
}

const emit = defineEmits(['close', 'click-tag', 'click', 'click-action', 'right-click', 'double-click', 'click-icon', 'right-click-icon', 'double-click-icon', 'drag-start', 'drag-end', 'drag-over', 'expand-tag', 'compact-tag', 'expand-space', 'toggle-label'])


function showLabels() {
  label.value = true
}

function expandTag(tag: Tag) {
  space.value = label.value
  showLabels()
  //console.log('expandTag', tag)
  emit('expand-tag', tag)
}

function compactTag(tag: Tag) {
  label.value = space.value
  space.value = false
  //console.log('compactTag', tag)
  emit('compact-tag', tag)
}

function toggleLabel(tag: Tag) {

  label.value = space.value
  space.value = !label.value

  //console.log('toggleTag', tag)
  emit('toggle-label', tag)
}

function expandToSpace(tag: Tag) {

  if (!space.value) { expandTag(props.tag) } else { compactTag(props.tag) }

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
  //if (!space.value) { compactTag(props.tag) } else { expandTag(props.tag) }
  emit('double-click-icon', event, tag)
}

// DRAG EVENTS
function onDragStart(event: DragEvent) {
  console.log(onDragStart, props.tag.toString())
  writeDataTransfer(event, 'tag', props.tag.toString())
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
  <v-chip label class="overflow-visible" :text="tag.name" :color="colorStyle" :variant="variant" :icon="tag.icon"
    :value="value" :id="`nu_${tag.id}`" :closable="props.closable" @click:close="onCloseTag"
    @click.right.exact.prevent="onRightClick" @click="onTagClick" @dblclick="onDoubleClick" @dragstart="onDragStart"
    @dragend="onDragEnd" @dragover="onDragOver" :draggable="true">
    <!-- Tag Icon / Space -->

    <template #prepend>
      <v-fab-transition>
        <div>
          <NuIcon v-if="showIcon && icon" :icon="(tag.icon as string)" :color="variantColorStyle" @click="onClickIcon"
            @right-click="onRightClickIcon" @double-click.stop="onDblClickIcon" :start="prependIcon ? true : false" />
        </div>
      </v-fab-transition>
    </template>
    <!-- Tag Label / Value -->
    <template #default>
      <v-slide-x-transition>
        <NuSpace v-if="showSpace && tag.space" :space="tag.space" class="align-center" />
      </v-slide-x-transition>
      <v-slide-x-transition>
        <NuLabel v-if="showLabel && tag" :tag="tag" />
      </v-slide-x-transition>
      <v-fab-transition>
        <NuBadge v-if="showValue && tag.value" :icon="value ? undefined : tag.icon" :content="value || undefined"
          :text-color="colorStyle" />
      </v-fab-transition>
      <NuTooltip v-if="showTooltip && tag" :tag="tag" />
    </template>

  </v-chip>
</template>
