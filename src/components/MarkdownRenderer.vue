<template>
  <div id="markdown-renderer" class="markdown-body" @click.right.prevent="manageRightClick">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-if="props.markdown" v-html="markdown"></div>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['click', 'ctrl-click', 'right-click'])
const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
})

function manageRightClick() {
  emit('right-click')
}

</script>
