<template>
  <div id="markdown-renderer" class="markdown-body">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-if="props.markdown" v-html="markdown"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
})

</script>
