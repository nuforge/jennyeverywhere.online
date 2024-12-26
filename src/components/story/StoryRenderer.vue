<template>
  <div id="markdown-renderer">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-if="props.markdown" v-html="getRawHtml()" class="story-body"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTagStore } from '@/stores/tags'
import markdownit from 'markdown-it'

const tags = ref(useTagStore())

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
})

const md = markdownit({
  html: true,
  linkify: true,
})

md.renderer.rules.link_open = (tokens, idx) => {
  const href = tokens[idx].attrGet('href'); //const content = tokens[idx + 1]?.content || '';

  // Render as router-link directly
  return `<a href="${href}">`;
};

md.renderer.rules.link_close = () => '</a>';

const getRawHtml = () => {
  const mdown = props.markdown
  const linked = linkText(mdown)
  const render = md.render(linked)
  return render
}

const linkText = (text: string) => {
  // Create a RegExp if pattern is a string
  //const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern;
  let temp = text
  tags.value.selection.forEach((id) => {
    if (!tags.value.tags[id]) return
    const pattern = tags.value.tags[id].name
    const icon = tags.value.tags[id].icon
    const color = tags.value.tags[id].color
    const reg = '/\[([^\]]+)\]\(([^)]+)\)/g'

    // Escape special regex characters if pattern is a literal string
    const escapedPattern =
      typeof pattern === 'string' ? pattern.replace(reg, '\\$&') : pattern // If already a RegExp, use it as is

    const regex = typeof pattern === 'string' ? new RegExp(escapedPattern, 'g') : pattern

    temp = temp.replace(
      regex,
      (match) => `[<i class="mdi ${icon} text-${color}"></i> ${match}](${match.toLowerCase().replace(/\s/g, '-')})`,
    )
  })
  return temp
}
</script>
