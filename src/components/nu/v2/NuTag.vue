<script setup lang="ts">

import { ref, computed, defineProps } from 'vue';
import Tag from '@/objects/nu/v2/Tag';

import NuIcon from '@/components/nu/NuIcon.vue';
import NuLabel from '@/components/nu/v2/NuLabel.vue';
import NuSpace from '@/components/nu/NuSpace.vue';

import useStyleStore from '@/stores/styles';
const styles = useStyleStore();

import DragManager from '@/objects/DragManager';
const dragManager = new DragManager();

import SettingsManager from '@/objects/SettingsManager';

const settings = ref(
  new SettingsManager({
    icon: true,
    name: true,
    badge: false,
    space: false,
    tooltip: true,
    color: true,
  }),
)

const defaultNoColor = 'white'

const showName = computed(() => styles.checkGlobal('labels') && props.labels && settings.value.get('name'))
const showSpace = computed(() => styles.checkGlobal('spaces') && props.tag.space && settings.value.get('space'))

const showIcon = computed(() => styles.checkGlobal('icons') && props.icons && settings.value.get('icon'))
const showColor = computed(() => styles.checkGlobal('colors') && props.colors && settings.value.get('color') && (props.color && !styles.filterColors.includes(props.color)))

//const showBadge = computed(() => styles.checkGlobal('values') && props.values && settings.value.get('badge'))

const showTooltip = computed(() => styles.checkGlobal('tooltips') && settings.value.get('tooltip'))
const iconTooltip = computed(() => (showTooltip.value && !showSpace.value && props.tag.space) ? props.tag.space : props.tag.name)
const prependIcon = computed(() => showIcon.value && (showName.value || showSpace.value))

const variant = computed(() => {
  if (showName.value && styles.get('variants')) {
    return styles.variants as 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain' | undefined;
  }
  return undefined;
});

const colorStyle = computed(() => !showColor.value ? defaultNoColor : props.color)
const variantColorStyle = computed(() => variant.value === 'flat' || variant.value === 'elevated' ? 'text' : colorStyle.value)

const props = defineProps
  ({
    tag: {
      type: Tag,
      required: true,
    },
    color: {
      type: String,
    },
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
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
    selected: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    }

  })
const emit = defineEmits(['close', 'click-tag', 'click', 'click-action', 'right-click', 'double-click', 'click-icon', 'right-click-icon', 'double-click-icon', 'drag-start', 'drag-end', 'drag-over', 'expand-tag', 'compact-tag', 'expand-space', 'toggle-name'])

function onCloseTag(event: Event) {
  emit('close', event, props.tag)
}

function onClick(event: Event) {
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
  emit('click-icon', event, props.tag)
}

function onRightClickIcon(event: Event, tag: Tag) {
  emit('right-click-icon', event, tag)
}

function onDblClickIcon(event: Event, tag: Tag) {
  emit('double-click-icon', event, tag)
}

// DRAG EVENTS
function onDragStart(event: DragEvent) {
  dragManager.dragStart(event, 'tag', props.tag.toString())
  emit('drag-start', event, props.tag)
}

function onDragEnd(event: DragEvent) {
  dragManager.dragEnd(event)
  emit('drag-end', event, props.tag)
}

function onDragOver(event: DragEvent) {
  dragManager.dragOver(event)
  emit('drag-over', event, props.tag)
}


</script>

<template>
  <v-chip label class="overflow-visible" :text="tag.name" :color="colorStyle" :variant="variant" :icon="icon"
    :value="tag.seed" :id="`nu_${tag.id}`" :closable="props.closable" @click:close="onCloseTag"
    @click.right.exact.prevent="onRightClick" @click="onClick" @dblclick="onDoubleClick" @dragstart="onDragStart"
    @dragend="onDragEnd" @dragover="onDragOver" :draggable="true">
    <!-- Tag Icon / Space -->

    <template #prepend>
      <v-fab-transition>
        <div v-if="showIcon && settings.has('icon')">
          <v-tooltip location="top start">
            <template #activator="{ props }">
              <NuIcon :icon="icon" :color="variantColorStyle" @click="onClickIcon" @right-click="onRightClickIcon"
                @double-click="onDblClickIcon" :start="prependIcon ? true : false" v-bind="props" />
            </template>
            {{ iconTooltip }}
          </v-tooltip>
        </div>
      </v-fab-transition>
    </template>

    <!-- Tag Name / Value -->
    <template #default>
      <v-slide-x-transition>
        <NuSpace v-if="showSpace && settings.has('space') && tag.space" :space="tag.space" class="align-center" />
      </v-slide-x-transition>
      <v-slide-x-transition>
        <NuLabel v-if="showName && props.tag" :tag="props.tag" :label="props.label" />
      </v-slide-x-transition>
    </template>

  </v-chip>
</template>
