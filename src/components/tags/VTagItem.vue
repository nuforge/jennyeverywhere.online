<template>
  <v-chip variant="text" density="comfortable" tile class="rounded-lg" :color="!noColor ? color : 'text'" :value="value"
    :closable="styles.closable" close-icon="mdi-close" @click:close="closeTag($event, value)"
    @click="clickTag($event, value)">
    <template v-slot:prepend v-if="!noIcon">
      <v-icon :icon="icon ? icon : `$tag`" :color="!noColor ? color : 'text'" :start="!noLabel"
        @click="clickIcon($event, value)"></v-icon>
      <v-tooltip activator="parent" location="bottom">
        <v-icon :icon="icon" :color="!noColor ? color : 'text'" v-if="icon"></v-icon> <span class="opacity-50"> {{
          space ? `${space} : ` :
            '' }}</span> {{ label }}
      </v-tooltip>
    </template>
    <template v-slot:default v-if="!noLabel">
      {{ label }}
    </template>
  </v-chip>
</template>

<script setup lang="ts">
import { useStyleStore } from '@/stores/styles';

const styles = useStyleStore()

defineProps({
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  value: {
    type: String || Number,
    default: ''
  },
  space: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  isHovering: {
    type: Boolean,
    default: false
  },
  noLabel: {
    type: Boolean,
    default: false
  },
  noValue: {
    type: Boolean,
    default: false
  },
  noIcon: {
    type: Boolean,
    default: false
  },
  noColor: {
    type: Boolean,
    default: false
  },
})


const emit = defineEmits(['click', 'close', 'click-icon'])

function clickTag(event: Event, value: string | number) {
  emit('click', value)
}

function closeTag(event: Event, value: string | number) {
  console.log('VTagItem.closeTag', value)
  emit('close', value)
}

function clickIcon(event: Event, value: string | number) {
  console.log('VTagItem.clickIcon', value)
  emit('click-icon', value)
}


</script>
