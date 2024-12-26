<template>
  <div id="markdown-renderer">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-if="props.markdown" v-html="markdown" class="story-body"></div>
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
<style>
.story-body {
  font-size: 1.05em;
}

.story-body a {
  text-decoration: none;
  transition: color 0.2s;
  font-weight: bold;
  font-variation-settings:
    "wdth" 75;
}
</style>
