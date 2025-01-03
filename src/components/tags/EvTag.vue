<template>
  <v-chip :text="text" :color="tagColor" :icon="icon" :value="tagValue" :prepend-icon="prependIcon" :id="value"
    :closable="closable" @click:close="onCloseTag" @click.right.exact.prevent="onRightClick" @click="onTagClick"
    :variant="tagVariant" @dblclick="onDoubleClick">

    <template #prepend>
      <v-fab-transition>
        <div v-if="icon" expand-x-transition>
          <v-icon :icon="icon" :color="iconColor" @click="onClickIcon">
            <v-tooltip activator="parent" location="bottom">{{ text }}
            </v-tooltip>
          </v-icon>
        </div>
      </v-fab-transition>
    </template>
    <template #default>
      <v-slide-x-transition>
        <div v-if="tagLabel" expand-x-transition>{{ tagLabel }}
          <v-tooltip activator="parent" location="bottom">{{ text }}
          </v-tooltip>
        </div>
      </v-slide-x-transition>
    </template>

  </v-chip>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import Tag from '@/objects/Tag';

const tagLabel = computed(() => { return !props.text ? (!props.value ? undefined : String(props.value)) : props.text })
const tagColor = computed(() => { return props.selected ? 'plain' : props.color ? props.text ? props.color : props.color : 'text' })
const tagValue = computed(() => { return props.tag?.id ? props.tag.id : !props.value ? props.text : props.value })

const prependIcon = computed(() => { return props.icon && props.text ? props.icon : undefined })
const iconColor = computed(() => { return !props.color ? 'accent' : props.color })
const tagVariant = computed(() => { return (!tagLabel.value ? !props.icon ? props.selected ? 'tonal' : 'tonal' : 'text' : undefined) })

const emit = defineEmits(['close', 'click-tag', 'click-icon', 'right-click', 'double-click'])

function onTagClick(event: MouseEvent | KeyboardEvent) {
  emit('click-tag', event, props.value)
}

function onCloseTag(event: MouseEvent) {
  emit('close', event, props.value)
}

function onClickIcon(event: MouseEvent | KeyboardEvent) {
  emit('click-icon', event, props.value)
}

function onDoubleClick(event: MouseEvent | KeyboardEvent) {
  console.log('Double-click detected!');
  emit('double-click', event, props.value)
}

function onRightClick(event: MouseEvent | KeyboardEvent) {
  emit('right-click', event, props.value)
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
