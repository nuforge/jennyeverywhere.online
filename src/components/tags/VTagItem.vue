<template>
  <v-chip :value="value" :color="!noColor ? !noIcon ? noLabel ? color : color : color : 'text'"
    :closable="styles.closable" @click:close="closeTag($event, value)" @click="clickTag($event, value)"
    :variant="noIcon && noLabel ? noColor ? 'outlined' : 'tonal' : noIcon ? 'text' : 'text'">
    <template v-slot:prepend>
      <v-fab-transition>
        <v-icon :icon="icon ? icon : `$tag`" :color="!noColor ? color : 'text'" :start="!noLabel"
          @click="clickIcon($event, value)" v-show="!noIcon"></v-icon>
      </v-fab-transition>
      <v-tooltip activator="parent" location="bottom">
        <v-icon :icon="icon" :color="!noColor ? color : 'text'" v-show="icon"></v-icon> <span class="opacity-50">
          {{ space ? `${space} : ` :
            '' }}</span> {{ label }}
      </v-tooltip>
    </template>
    <template v-slot:default>
      <v-slide-x-transition>
        <span v-show="!noLabel">{{ label }}</span>
      </v-slide-x-transition>
    </template>
  </v-chip>
</template>

<script setup lang="ts">
import useStyleStore from '@/stores/styles';

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
  emit('close', value)
}

function clickIcon(event: Event, value: string | number) {
  emit('click-icon', value)
}


</script>
