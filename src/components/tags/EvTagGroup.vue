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

<script setup lang="ts">
/* Manages content for a group of tags in a chip group
Finalizes the styles (icon, color, label, closable) for display and sends to the Tag
*/
import { ref, watch, defineProps, defineEmits } from 'vue';



import Tag from '@/objects/nu/NuTag'
import NuTag from '@/components/nu/NuTag.vue'

// EMIT AND PROPS
const selection = ref<string[]>([])

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

watch(() => props.modelValue, (newVal) => {
  selection.value = newVal
});
watch(() => selection.value, (newVal) => {
  emit('update:modelValue', newVal)
});

const emit = defineEmits(['update:modelValue', 'click-tag', 'ctrl-click', 'right-click', 'double-click', 'drag-start', 'drag-end', 'drag-drop', 'close'])

// TAGS & CLICKS
function onClose(tag: Tag) {
  //console.log('onClose:Tag', tag)
  emit('close', tag)
}

function onClickTag(event: MouseEvent, tag: Tag) {
  //console.log('onClickTag:Tag', event, tag)
  emit('click-tag', event, tag)
}

function onCtrlClick(event: MouseEvent, tag: Tag) {
  //console.log('onCtrlClickTag:Tag', event, tag)
  emit('ctrl-click', event, tag)
}

function onRightClick(event: MouseEvent, tag: Tag) {
  //console.log('onRightClick:Tag', event, tag)

  emit('right-click', event, tag)
}

function onDoubleClick(event: MouseEvent, tag: Tag) {
  //console.log('onDoubleClick:Tag', event, tag)
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
  // console.log('drag.End')
  emit('drag-end')
}

// DRAG OVER

const preventDefault = (event: Event) => event.preventDefault()

</script>
