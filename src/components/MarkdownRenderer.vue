<template>
  <div id="markdown-renderer" class="markdown-body" @click.right.prevent="manageRightClick" @click="handleClick">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-show="text" v-html="textToMarkdown(text)"></div>
  </div>
</template>

<script setup lang="ts">
import Tag from '@/objects/Tag'
import markdownit from 'markdown-it'


const emit = defineEmits(['click', 'ctrl-click', 'click-right', 'click-tag', 'click-icon'])

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

function handleClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (target.tagName === 'A') {
    console.log('Matched link:', target.innerHTML.toLowerCase().replace(/\s/g, '-'));
    emit('click-tag', target.textContent?.toLowerCase().replace(/\s/g, '-'))
  }

  if (target.tagName === 'I') {
    console.log('Matched icon:', target.classList[1], target.classList[2].toString().replace('text-', ''));
    emit('click-icon', target.getAttribute('tag'), target.getAttribute('color'), target.getAttribute('icon'))
  }
  if (target.tagName === 'CUSTOMTAG') {
    console.log('Matched tag:', target.classList[1], target.classList[2].toString().replace('text-', ''));
    emit('click-icon', target.getAttribute('tag'), target.getAttribute('color'), target.getAttribute('icon'))
  }
  //router.push('/tags/ ')

}

function manageRightClick() {
  emit('click-right')
}


// MARK DOWN

function linkTags(tags: Array<Tag>, text?: string) {
  //match.toLowerCase().replace(/\s/g, '-')
  return tags.reduce((updatedText, tag) => {
    const icon = tag.icon || 'default'
    const color = tag.color || 'default'
    const pattern = tag.name
    const regex = escapePattern(pattern)
    // OLD:  `<i class="mdi ${icon} text-${color}" icon="${icon}" color="${color}" tag="${match}"></i> [${match}]()`
    return updatedText.replace(
      regex,
      (match) =>
        `<custom-tag tag="${match}" color="${color}" icon="${icon}" >${match}</custom-tag>`,
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


md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];

  // Remove the href attribute if it's empty
  const hrefIndex = token.attrIndex('href');
  if (hrefIndex !== -1 && token.attrs && !token.attrs[hrefIndex][1]) {
    token.attrs.splice(hrefIndex, 1);
  }

  // Render the opening tag
  return self.renderToken(tokens, idx, options);
};

function textToMarkdown(text: string) {
  //const selected = taglist.value.filter(tag => tags.selection.includes(tag.id))
  const md = linkTags(props.tags, text)
  return markitdown(md)
}

function markitdown(text: string) {
  return md.render(text)
}

</script>

<style scoped>
:deep a,
:deep i {

  color: #FFFFFF;
  cursor: pointer;
}
</style>
