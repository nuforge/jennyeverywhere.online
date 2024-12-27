<template>
  <v-chip variant="text" density="comfortable" tile class="rounded-lg" :color="noIcon ? color : undefined"
    :value="value">
    <template v-slot:prepend v-if="!noIcon">
      <v-icon :icon="icon ? icon : `$tag`" :color="color" :start="!noLabel"></v-icon>
      <v-tooltip activator="parent" location="bottom" content-class="bg-surface">
        <v-icon :icon="icon" :color="color" v-if="icon"></v-icon> <span class="opacity-50"> {{ space ? `${space} : ` :
          '' }}</span> {{ label }}
      </v-tooltip>
    </template>
    <template v-slot:default v-if="!noLabel">
      {{ label }}
    </template>
    <template v-slot:append v-if="noIcon && noLabel">
      <v-icon :icon="`$no-tag`" :color="color" :start="!noLabel" id="tooltip-activator"></v-icon>
      <v-tooltip activator="parent" location="bottom" content-class="bg-surface" elevated>
        <v-icon :icon="icon" :color="color" v-if="icon"></v-icon> {{ space }} {{ label }}
      </v-tooltip>
    </template>
  </v-chip>
</template>

<script setup lang="ts">
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
})




</script>
