<template>
  <v-chip class="rounded overflow-visible" :text="tag.name" :color="!colors ? defaultNoColor : tag.color"
    :icon="tag.icon" :value="tag.name" :prepend-icon="labels ? tag.icon : undefined" :id="`nu_${tag.id}`"
    :closable="tag.closable" @click:close="onCloseTag" @click.right.exact.prevent="onRightClick" @click="onTagClick"
    @dblclick="onDoubleClick" @dragstart="onDragStart" @dragend="onDragEnd" @dragover="onDragOver" :draggable="true">

    <!-- Tag Icon / Space -->
    <template #prepend>
      <v-fab-transition>
        <div v-if="icons">
          <v-icon :icon="tag.icon" :color="!colors ? defaultNoColor : tag.color"
            @click.right.exact.prevent="onRightClickIcon" @click="onClickIcon">
          </v-icon>
        </div>
      </v-fab-transition>
    </template>

    <!-- Tag Label / Value -->
    <template #default>
      <v-expand-x-transition>
        <div v-if="labels">
          <v-slide-x-transition>
            <v-label v-if="showNamespace && tag.space" class="align-center">{{ tag.space
              }}
            </v-label>
          </v-slide-x-transition> {{
            tag.name }}
          <NuTooltip :tag="tag"></NuTooltip>
          <NuBadge :count="count" />
        </div>
      </v-expand-x-transition>
    </template>

  </v-chip>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';
import Tag from '@/objects/Tag';
import NuTooltip from '@/components/tags/NuTooltip.vue';
import NuBadge from '@/components/tags/NuBadge.vue';

import { useStyleStore } from '@/stores/styles';
const styles = useStyleStore()

const showNamespace = ref(false);

const defaultNoColor = 'text'

const icons = computed(() => styles.icons && props.tag.icon)
const colors = computed(() => styles.colors && props.tag.color)
const labels = computed(() => styles.labels && props.tag.name)

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

const emit = defineEmits(['close', 'click-tag', 'click-icon', 'right-click', 'double-click', 'drag-start', 'drag-end', 'drag-over'])



function onActivity(event: MouseEvent | KeyboardEvent, tag: Tag) {
  event.dataTransfer?.setData('text/plain', tag.id);
}

function onTagClick(event: MouseEvent | KeyboardEvent) {
  onActivity(event, props.tag)
  emit('click-tag', event, props.tag)
  return clickAction(props.tag)
}

function onCloseTag(event: MouseEvent) {
  onActivity(event, props.tag)
  emit('close', event, props.tag)
}

function onClickIcon(event: MouseEvent | KeyboardEvent) {
  onActivity(event, props.tag)
  emit('click-icon', event, props.tag)
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


function onRightClickIcon(event: MouseEvent | KeyboardEvent) {
  showNamespace.value = !showNamespace.value
  onActivity(event, props.tag)
  emit('right-click', event, props.tag)
}


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

</script>
