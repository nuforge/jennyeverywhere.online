<script setup lang="ts">
import { defineProps, computed } from 'vue';
import Value from '@/objects/NuTag';


// Props

const props = defineProps({
  value: {
    type: Value,
    default: 1
  },
  icon: {
    type: String || undefined,
    default: undefined
  },
  show: {
    type: Boolean,
    default: false
  }
})

const showValue = computed(() => props.show && (props.value || props.icon))

const emit = defineEmits(['click-badge'])

function onClickBadge() {
  emit('click-badge')
  console.log('onClickBadge')
}

const value = computed(() => {
  return props.value
})

</script>

<template>
  <v-badge v-if="showValue" :content="!icon ? value.toString() : undefined" floating @click="onClickBadge"
    :class="showValue ? `opacity-80` : `opacity-100`">
    <template v-slot:badge>
      <v-icon @click="onClickBadge" :icon="icon" v-if="icon"></v-icon>
    </template>
  </v-badge>
</template>
