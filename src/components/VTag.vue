<template>
  <v-chip tile class="rounded-lg text-no-wrap" variant="text" @click="expand ? show() : null" density="comfortable">
    <template v-slot:prepend><v-icon :icon="icon" :color="color"></v-icon></template>
    <template v-slot:default v-if="showText"><span class="mx-2">{{ text }}</span></template>
    <template v-slot:append v-if="value"><span class="mx-1">{{ value }}</span></template>
    <v-tooltip activator="parent" location="bottom" :content-class="`bg-surface`" :text="text" elevated
      v-if="tooltip"><v-icon :icon="icon"></v-icon> {{ text }}
    </v-tooltip>
  </v-chip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  icon: String,
  text: String,
  class: String,
  color: String,
  value: String,
  expand: Boolean,
  tooltip: Boolean
})

const showText = ref(false)

const show = () => {
  console.log('show')
  showText.value = !showText.value
}

</script>
