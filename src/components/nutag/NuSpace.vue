<script setup lang="ts">
import { defineEmits } from 'vue';

const props = defineProps({
  tag: {
    type: Object,
    required: true,
  },
  space: {
    type: String,
  },
})


const spaceLabel = props.space ?? props.tag.name

const emit = defineEmits(['click', 'right-click', 'double-click'])

const onDoubleClick = (event: Event) => {
  console.log('onDoubleClick')
  emit('double-click', event)
}
const onRightClickIcon = (event: Event) => {
  console.log('onRightClickIcon')
  emit('right-click', event)
}

const onClick = (event: Event) => {
  console.log('onClick')
  emit('click', event)
}

</script>


<template>
  <span class="mx-2 text-no-wrap" @click.right.exact.prevent="onRightClickIcon" @click="onClick"
    @dblclick="onDoubleClick"> {{ spaceLabel }}
  </span>
</template>
