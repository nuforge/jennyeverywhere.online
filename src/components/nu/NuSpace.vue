<template>
  <v-label class="text-black" @click.right.exact.prevent="onRightClickIcon" @click="onClick" @dblclick="onDoubleClick">
    <template #default>
      {{ space }}
    </template>
  </v-label>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

defineProps({
  space: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['click', 'right-click', 'double-click'])

const onDoubleClick = (event: Event) => {
  console.log('onDoubleClick')
  emit('double-click', event, tag)
}
const onRightClickIcon = (event: Event) => {
  console.log('onRightClickIcon')
  emit('right-click', event, tag)
}

const onClick = (event: Event) => {
  console.log('onClick')
  emit('click', event, tag)
}

</script>
