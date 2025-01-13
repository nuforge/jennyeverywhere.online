<script setup lang="ts">
import { defineEmits } from 'vue';

defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  tag: {
    type: String,
  },
})

const emit = defineEmits(['click', 'right-click', 'double-click'])

const onClick = (event: Event) => {
  //console.log('onClick')
  emit('click', event)
}

const onRightClickIcon = (event: Event) => {
  //console.log('onRightClickIcon')
  emit('right-click', event)
}

const onDoubleClick = (event: Event) => {
  //console.log('onDoubleClick')
  emit('double-click', event)
}

</script>

<template>
  <v-icon :icon="icon" :color="color" @click.right="onRightClickIcon" @click="onClick" @dblclick="onDoubleClick" />
</template>
