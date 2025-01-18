<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['click', 'right-click'])

function toggleFloat() {
  float.value = !float.value
}
function toggleShow() {
  show.value = !show.value
}

function onClickBadge() {
  toggleShow()
  emit('click')
}

function onRightClickBadge() {
  toggleFloat()
  show.value = float.value
  emit('right-click')
}

const show = ref(false)
const float = ref(true)
</script>

<template>
  <v-badge :floating="float" @click="onClickBadge" @click.right.exact.prevent="onRightClickBadge" :color="`transparent`"
    :class="[show ? `opacity-100` : `opacity-20`]">
  </v-badge>
</template>
