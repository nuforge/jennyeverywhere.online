<script setup lang="ts">
import { computed, defineProps, watch } from 'vue';
import SelectionManager from '@/utils/SelectionManager'
import Tag from '@/objects/nu/Tag';

const emit = defineEmits(["update:selection", "double-click", "click"]);

const props = defineProps<{
  tags: Tag[],
}>();

const selectionManager = new SelectionManager()

const tagSelection = computed(() => selectionManager.getSelection());

const onClick = (index: number, event: Event) => {
  emit("click", index, event);
}
const onDoubleClick = (index: number, tag: Tag, event: Event) => {
  emit("double-click", index, tag, event);
}

const onKeydown = (index: number, event: KeyboardEvent) => {
  if (["Enter", " "].includes(event.key)) {
    onClick(index, event);
  }
}

const onDrop = () => {
  console.log('yes')
}

watch(
  () => tagSelection.value,
  (newSelection) => {
    if (newSelection) {
      selectionManager.clearSelection();
      newSelection.forEach((index) => selectionManager.addToSelection(index));
    }
  },
  { immediate: true }
);

// Emit selection updates
watch(
  () => selectionManager.getSelection(),
  (newSelection) => {
    emit("update:selection", newSelection);
  }
);
</script>

<template>
  <v-list density="compact" nav return-object slim class="bg-background rounded py-1 ma-1 "
    v-droppable="console.log('yes')">
    <v-list-item v-for="(tag, index) in props.tags" :key="tag.name" class="ma-0 pa-0"
      :active="tagSelection.includes(index)" :min-height="0" @dblclick="onDoubleClick(index, tag, $event)"
      @keydown="onKeydown(index, $event)" @drop="onDrop">
      <NuTag :tag="tag" size="small" :variant="tagSelection.includes(index) ? `tonal` : `text`"
        class="d-flex flex-block" />
    </v-list-item>
  </v-list>
</template>
