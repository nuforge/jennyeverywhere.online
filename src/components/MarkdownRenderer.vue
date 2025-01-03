<template>
  <div id="markdown-renderer" class="markdown-body" @click.right.exact.prevent="onRightClick" @click="onClick">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-show="text" v-html="textToMarkdown(text)"></div>
  </div>
</template>

<script setup lang="ts">
import Tag from '@/objects/Tag'
import markdownit from 'markdown-it'


const emit = defineEmits(['click', 'ctrl-click', 'right-click', 'click-tag', 'click-body', 'click-icon', 'click-anchor', 'click-paragraph', 'create-tag'])

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

function getTagFromEvent(event: MouseEvent) {
  const target = event.target as HTMLElement;

  if (target.tagName === 'A' || target.tagName === 'I') {
    const newTag = new Tag(target.getAttribute('tag') || undefined, target.getAttribute('color') || undefined, target.getAttribute('icon') || undefined)
    emit('click-tag', event, newTag)
    return newTag
  }

  if (target.tagName === 'P') {
    console.log(target.tagName, window.getSelection());
    const selectedText = window.getSelection()?.toString().trim();
    if (selectedText && typeof selectedText === 'string') {
      console.log('P:', selectedText);
      const newTag = new Tag(selectedText)
      emit('create-tag', event, newTag)
      return newTag
    }
  }
  return false
}

function onClick(event: MouseEvent) {
  //console.log('onClick')
  //router.push('/tags/ ')
  //getTagFromEvent(event)
  emit('click', event)
}

function onRightClick(event: MouseEvent) {
  //console.log('onRightClick', event)
  const tag = getTagFromEvent(event)
  emit('right-click', event, tag)
}


// MARK DOWN

function escapePattern(pattern: string): string {
  return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Escape special regex characters if pattern is a literal string
function generateRegex(pattern: string): RegExp {
  // Escape special regex characters
  return new RegExp(`\\b${escapePattern(pattern)}\\b`, 'gi'); // Whole word match, case insensitive
}

function linkTags(tags: Array<Tag>, text?: string) {
  //match.toLowerCase().replace(/\s/g, '-') // Convert to lowercase and replace spaces with hyphens
  const placeholders: Record<string, Tag> = {};
  let modifiedText = text || '';
  const sortedTags = [...tags].sort((a, b) => b.name.length - a.name.length);

  // Replace matches with unique placeholders
  for (const tag of sortedTags) {
    const placeholder = `__PLACEHOLDER_${tag.name}__`;
    placeholders[placeholder] = tag;

    // Match tag name as a whole word (case insensitive)
    const regex = generateRegex(tag.name)
    //console.log('regex:', regex)
    modifiedText = modifiedText.replace(regex, placeholder);
  }


  // Replace placeholders with their final values
  for (const [placeholder, replacement] of Object.entries(placeholders)) {
    modifiedText = modifiedText?.replace(new RegExp(placeholder, 'g'), replacement.name);
  }

  return tags.reduce((modifiedText, tag) => {
    const icon = tag.icon || 'default'
    const color = tag.color || 'default'
    const pattern = tag.name
    const regex = escapePattern(pattern)
    // OLD:  `<i class="mdi ${icon} text-${color}" icon="${icon}" color="${color}" tag="${match}"></i> [${match}]()`
    return modifiedText.replace(
      regex,
      (match) =>
        `<custom-tag tag="${match}" color="${color}" icon="${icon}" >${match}</custom-tag>`,
    )
  }, text || '')
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
