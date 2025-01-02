<template>
  <v-chip :text="text" :color="tagColor" :icon="icon" :value="tagValue" :prepend-icon="prependIcon" :id="value"
    :closable="closable" @click:close="onCloseTag" @click.right.exact.prevent="onRightClick" @click="onTagClick"
    :variant="tagVariant">
    <template v-slot:prepend>
      <v-fab-transition>
        <v-icon v-if="icon" :icon="icon" :color="iconColor" @click="onClickIcon">
          <v-tooltip activator="parent" location="bottom">{{ text }}
          </v-tooltip></v-icon>
      </v-fab-transition>
    </template>
    <template v-slot:default>
      <v-slide-x-transition>
        <span v-if="tagLabel" expand-x-transition>{{ tagLabel }}</span>
      </v-slide-x-transition>
    </template>
  </v-chip>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import Tag from '@/objects/Tag';

const tagLabel = computed(() => { return !props.text ? (!props.value ? undefined : String(props.value)) : props.text })
const tagColor = computed(() => { return props.color ? props.text ? props.color : props.color : 'text' })
const tagValue = computed(() => { return props.tag?.id ? props.tag.id : !props.value ? props.text : props.value })

const prependIcon = computed(() => { return props.icon && props.text ? props.icon : undefined })
const iconColor = computed(() => { return !props.color ? 'accent' : props.color })
const tagVariant = computed(() => { return props.selected ? 'plain' : 'text' })

const emit = defineEmits(['close', 'click-tag', 'click-icon', 'right-click'])

function onTagClick() {
  emit('click-tag', props.value)
}

function onCloseTag() {
  emit('close', props.value)
}

function onClickIcon() {
  emit('click-icon', props.value)
}

function onRightClick(event: MouseEvent | KeyboardEvent) {
  emit('right-click', event)
}
// Props
const props = defineProps
  ({
    text: {
      type: String,
    },
    tag: {
      type: Tag,
    },
    color: {
      type: String,
    },
    icon: {
      type: String,
    },
    value: {
      type: [String, Number],
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

</script>
