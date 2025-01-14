<script setup lang="ts">

import { ref, computed, defineProps } from 'vue';
import Tag from '@/objects/nu/Tag';

import NuIcon from '@/components/nu/NuIcon.vue';
import NuLabel from '@/components/nu/NuLabel.vue';
import NuSpace from '@/components/nu/NuSpace.vue';

import useStyleStore from '@/stores/styles';
const styles = useStyleStore();


import SettingsManager from '@/objects/SettingsManager';

const settings = ref(
  new SettingsManager({
    icon: true,
    label: true,
    badge: false,
    space: false,
    tooltip: true,
    color: true,
    toolTipDelay: 800
  }),
)

const defaultNoColor = 'white'

const label = computed(() => props.label ?? props.tag?.label ?? '')
const tag = computed(() => props.tag ?? new Tag(label.value.toString()))

const showLabel = computed(() => styles.checkGlobal('labels') && props.labels && settings.value.get('label'))
const showSpace = computed(() => styles.checkGlobal('spaces') && tag.value?.space && settings.value.get('space'))

const showIcon = computed(() => styles.checkGlobal('icons') && props.icons && settings.value.get('icon'))
const showColor = computed(() => styles.checkGlobal('colors') && props.colors && settings.value.get('color') && (props.color && !styles.filterColors.includes(props.color)))


//const showBadge = computed(() => styles.checkGlobal('values') && props.values && settings.value.get('badge'))

//const showTooltip = computed(() => styles.checkGlobal('tooltips') && settings.value.get('tooltip'))
//const iconTooltip = computed(() => (showTooltip.value && !showSpace.value && props.tag.space) ? props.tag.space : props.tag.label)
const prependIcon = computed(() => showIcon.value && (showLabel.value || showSpace.value))

const variant = computed(() => {
  if (showLabel.value && styles.get('variants')) {
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
    },
    label: {
      type: String,
    },
    color: {
      type: String,
    },
    icon: {
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
const emit = defineEmits(['close', 'click-tag', 'click', 'click-action', 'right-click', 'double-click', 'click-icon', 'right-click-icon', 'double-click-icon', 'drag-start', 'drag-end', 'drag-over', 'drop', 'expand-tag', 'compact-tag', 'expand-space', 'toggle-label'])

function onCloseTag(event: Event) {
  emit('close', event, tag.value)
}

function onClick(event: Event) {
  emit('click-tag', event, tag.value)
}

function onDoubleClick(event: Event) {
  emit('double-click', event, tag.value)
}

function onRightClick(event: Event) {
  emit('right-click', event, tag.value)
}

// ICON CLICKS
function onClickIcon(event: Event) {
  emit('click-icon', event, tag.value)
}

function onRightClickIcon(event: Event, tag: Tag) {
  emit('right-click-icon', event, tag)
}

function onDblClickIcon(event: Event, tag: Tag) {
  emit('double-click-icon', event, tag)
}

// DRAG EVENTS
function onDragStart(event: DragEvent) {
  emit('drag-start', event, tag.value)
}

function onDragEnd(event: DragEvent) {
  emit('drag-end', event, tag.value)
}

function onDragOver(event: DragEvent) {
  emit('drag-over', event, tag.value)
}

function onDrop(event: DragEvent) {
  emit('drop', event, tag.value)
}

</script>

<template>
  <v-chip label class="overflow-visible" :color="colorStyle" :variant="variant" :value="tag?.seed" :id="tag?.id"
    :closable="props.closable" @click:close="onCloseTag" @click.right.exact.prevent="onRightClick" @click="onClick"
    @dblclick="onDoubleClick" @drag-start="onDragStart" @drag-end="onDragEnd" @drag-over="onDragOver" @drop="onDrop"
    v-draggable="tag" v-droppable="console.log">
    <!-- Tag Icon / Space -->

    <template #prepend v-if="icon">
      <v-fab-transition>
        <div v-if="showIcon && settings.has('icon')">
          <v-tooltip location="bottom start" :open-delay="Number(settings.get('toolTipDelay'))">
            <template #activator="{ props }">
              <NuIcon :icon="icon" :color="variantColorStyle" @click="onClickIcon" @right-click="onRightClickIcon"
                @double-click="onDblClickIcon" :start="prependIcon ? true : false" v-bind="props" />
            </template>
            <v-label class="ga-1"><v-icon :icon="icon"></v-icon>{{ icon }}</v-label>
          </v-tooltip>
        </div>
      </v-fab-transition>
    </template>

    <!-- Tag Name / Value -->
    <v-fab-transition>
      <template #default v-if="showLabel">
        <NuSpace v-if="showSpace && tag?.space" :tag="tag" :space="tag.space" class="align-center" />
        <NuLabel v-if="showLabel && label" :tag="tag" :label="label" />
      </template>
    </v-fab-transition>

  </v-chip>
</template>
