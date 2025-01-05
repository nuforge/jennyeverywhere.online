<template>
  <v-badge v-if="props.value > 1" :content="props.value" :dot="showCount" floating @click="onClickBadge"
    :class="showCount ? `opacity-20` : `opacity-100`">
    <template v-slot:badge>
      <v-icon @click="onClickBadge">mdi-lock</v-icon>
    </template>
  </v-badge>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';

const show = ref(false)

// Props

const props = defineProps({
  value: {
    type: Number,
    default: 1,
  },
})

const showCount = computed(() => show.value && props.value > 1)


const emit = defineEmits(['click-badge'])

function onClickBadge() {
  show.value = !show.value
  emit('click-badge')
  console.log('onClickBadge')
}

</script>
