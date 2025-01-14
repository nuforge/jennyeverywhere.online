<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import Tag from '@/objects/nu/Tag'
import Label from '@/objects/nu/Label'
import MarkdownManager from '@/objects/MarkdownManager';
const markdowninator = new MarkdownManager()

// import DragManager from '@/objects/DragManager';
// const drag = new DragManager()

const emit = defineEmits(['click', 'ctrl-click', 'right-click', 'click-tag', 'click-body', 'click-icon', 'click-anchor', 'click-paragraph', 'create-tag'])

const editable = ref(false)

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

function onClick(event: MouseEvent) {
  //console.log('onClick')
  //router.push('/tags/ ')
  //getTagFromEvent(event)
  emit('click', event)
}

function onRightClick(event: MouseEvent) {
  //console.log('onRightClick', event)
  const tag = markdowninator.getTagFromEvent(event)
  emit('right-click', event, tag)
}


// // function onDragOver(event: DragEvent) {
// //   drag.dragOver(event)

// // }
// // function onDragStart(event: DragEvent) {
// //   editable.value = true
// //   drag.dragStart(event, 'bold')
// // }
// // function onDragEnd() {
// //   editable.value = false
// //   drag.dragEnd(event)
// // }

// // function onDrop(event: DragEvent) {

// //   const selection = window.getSelection();
// //   if (!selection || !selection.rangeCount) return;

// //   const range = selection.getRangeAt(0);
// //   const selectedText = range.toString();

// //   // Find the word or letters under the drop point (use range start or end)
// //   const word = getWordFromRange(range);

// //   console.log('Dropped text:', selectedText);
// //   console.log('Word under drop:', word);

// //   // Example action based on the drop (e.g., bold)
// //   const action = drag.drop(event)
// //   if (action === 'bold' && word) {
// //     document.execCommand('bold'); // Apply bold formatting to the selected word
// //   }
// //   if (action === 'tag' && word) {

// //     console.log('tag', word)
// //   }

// //   editable.value = false
// // }

// function getWordFromRange(range: Range): string | null {
//   const textNode = range.startContainer;
//   if (textNode && textNode.nodeType === Node.TEXT_NODE) {
//     const text = textNode.textContent || '';
//     const startOffset = range.startOffset;
//     const endOffset = range.endOffset;

//     // Extract the word (simple approach: split by spaces)
//     const word = text.slice(startOffset, endOffset);
//     return word;
//   }
//   return null;
// }

</script>

<template>
  <div id="markdown-renderer" class="markdown-body" @click.right.exact.prevent="onRightClick" @click="onClick">
    <!-- Use the renderContent method to parse and render as Vue components -->
    <div v-show="text" v-html="markdowninator.textToMarkdown(text, props.tags as Label[])" :contenteditable="editable">
    </div>
    <!--v-btn @dragstart="onDragStart" @drop="onDrop" @dragover="onDragOver" @dragend="onDragEnd" :draggable="true"
      variant="plain">Drag
      Me</v-btn -->
  </div>
</template>

<style scoped>
:deep a,
:deep i {

  color: #FFFFFF;
  cursor: pointer;
}
</style>
