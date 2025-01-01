<template>
  <v-chip :text="text" :color="tagColor" :icon="icon" :value="tagValue" :prepend-icon="prependIcon" :id="value"
    @click:close="onCloseTag" @click.right.exact.prevent="onRightClick" :variant="tagVariant">
    <template v-slot:prepend>
      <v-fab-transition>
        <v-icon :icon="icon" :color="iconColor" v-show="icon" @click="onClickIcon"></v-icon>
      </v-fab-transition>
    </template>
    <v-expand-x-transition>
      <template v-slot:default>
        <v-slide-x-transition>
          <span v-show="tagLabel">{{ tagLabel }}</span>
        </v-slide-x-transition>
      </template>
    </v-expand-x-transition>
  </v-chip>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const tagLabel = computed(() => { return !props.text ? (!props.value ? undefined : String(props.value)) : props.text })
const tagColor = computed(() => { return props.color ? props.text ? props.color : props.color : 'text' })
const tagValue = computed(() => { return !props.value ? props.text : props.value })

const prependIcon = computed(() => { return props.icon && props.text ? props.icon : undefined })
const iconColor = computed(() => { return !props.color ? 'text' : props.color })
const tagVariant = computed(() => { return props.selected ? 'plain' : 'text' })

const emit = defineEmits(['close', 'click-icon', 'right-click'])

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
  })

</script>
