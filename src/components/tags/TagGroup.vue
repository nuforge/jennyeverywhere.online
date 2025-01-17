<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import Tag from '@/objects/nu/Tag'


const selection = ref<string[]>([])

// EMIT AND PROPS
const props = defineProps({
  tags: {
    type: Array as () => Tag[]
  }, // Initial selected tags
  modelValue: {
    type: Array as () => string[],
    default: () => []
  },
  colors: {
    type: [Boolean, String],
    default: true
  },
  labels: {
    type: [Boolean, String],
    default: true
  },
  icons: {
    type: [Boolean, String],
    default: true
  },
  closable: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['update:modelValue', 'click-tag', 'ctrl-click', 'right-click', 'double-click', 'drag-start', 'drag-end', 'drag-drop', 'close'])

// TAGS & CLICKS
function onClose(tag: Tag) {
  emit('close', tag)
}

function onClickTag(event: MouseEvent, tag: Tag) {
  emit('click-tag', event, tag)
}

function onCtrlClick(event: MouseEvent, tag: Tag) {
  emit('ctrl-click', event, tag)
}

function onRightClick(event: MouseEvent, tag: Tag) {
  emit('right-click', event, tag)
}

function onDoubleClick(event: MouseEvent, tag: Tag) {
  emit('double-click', event, tag)
}

// DRAG
// DRAG START
const onDragStart = (event: DragEvent, tag: Tag) => {
  event.dataTransfer?.setData('text/plain', tag.id);
  emit('drag-start', event, tag)
}

// DRAG END
const onDragEnd = () => {
  emit('drag-end')
}

// DRAG OVER
const preventDefault = (event: Event) => event.preventDefault()

watch(() => props.modelValue, (newVal) => {
  selection.value = newVal
});
watch(() => selection.value, (newVal) => {
  emit('update:modelValue', newVal)
});

</script>

<template>
  <v-fade-transition>
    <v-chip-group column multiple @dragend="onDragEnd" @dragover="preventDefault" v-model="selection"
      class="d-flex flex-column px-2 mx-auto justify-center">
      <NuTag v-for="tag in tags" :tag="tag" :key="tag.id" @close="onClose(tag)" @dragstart="onDragStart($event, tag)"
        @ctrl-click="onCtrlClick($event, tag)" @right-click="onRightClick($event, tag)"
        @click-tag="onClickTag($event, tag)" @double-click="onDoubleClick($event, tag)" />
    </v-chip-group>
  </v-fade-transition>
</template>
