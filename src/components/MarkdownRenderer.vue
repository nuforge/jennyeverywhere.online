<template>
  <div id="markdown-renderer" class="markdown-body" @click.right.prevent="manageRightClick">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-show="text" v-html="textToMarkdown(text)"></div>
  </div>
</template>

<script setup lang="ts">
import Tag from '@/objects/Tag'
import markdownit from 'markdown-it'


const emit = defineEmits(['click', 'ctrl-click', 'right-click'])


const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  tags: {
    type: Array as () => Tag[],
    default: () => [new Tag('defaultName')],
  }
})

function manageRightClick() {
  emit('right-click')
}

function textToMarkdown(text: string) {
  //const selected = taglist.value.filter(tag => tags.selection.includes(tag.id))
  const md = linkTags(props.tags, text)
  return markitdown(md)
}

function linkTags(tags: Array<Tag>, text?: string) {
  return tags.reduce((updatedText, tag) => {
    const icon = tag.icon || 'default'
    const color = tag.color || 'default'
    const pattern = tag.name
    const regex = escapePattern(pattern)
    return updatedText.replace(
      regex,
      (match) =>
        `[<i class="mdi ${icon} text-${color}"></i> ${match}](${match.toLowerCase().replace(/\s/g, '-')})`,
    )
  }, text || '')
}

// Escape special regex characters if pattern is a literal string
function escapePattern(pattern: string) {
  const escapedPattern =
    typeof pattern === 'string' ? pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : pattern // If already a RegExp, use it as is
  const regex = typeof pattern === 'string' ? new RegExp(`\\b${escapedPattern}\\b`, 'g') : pattern
  return regex
}

const md = markdownit({
  html: true,
  linkify: true,
})

function markitdown(text: string) {
  return md.render(text)
}

</script>
