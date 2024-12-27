<template>
  <v-container class="bg-surface elevation-10 ma-2 pa-1 rounded-lg">
    <tag-group :tags="tags.tags" class="bg-background rounded-lg ma-1 pa-2" column :noLabel="styles.labels"
      :noIcon="styles.icons" :closable="styles.closable" v-model="tags.selection" @drop="dragDrop"
      @dragover="dragOver" />
    <TagStyles class="d-flex justify-space-between  bg-surface " />
  </v-container>
</template>

<script setup lang="ts">
//
import { onMounted } from 'vue'
import { useStyleStore } from '@/stores/styles'
import { useTagStore } from '@/stores/tags'
import { useStateStore } from '@/stores/state'
import TagGroup from '@/components/tags/TagGroup.vue';
import TagStyles from '@/components/tags/TagStyles.vue';
const tags = useTagStore()
const state = useStateStore()
const styles = useStyleStore()

const dragOver = (event: DragEvent) => {
  event.preventDefault();
}
const dragDrop = (ev: DragEvent) => {
  if (!ev.dataTransfer) return
  console.log('drop', ev.dataTransfer.getData("text/plain"))
  if (ev.dataTransfer.getData("text/plain")) {
    console.log('drop', ev.dataTransfer.getData("text/plain"))
    tags.createTag(ev.dataTransfer.getData("text/plain"))
  } else {
    tags.clipboardSave()
    tags.clipboardEmpty()
  }
  state.dragDrop()
}


onMounted(() => {
  tags.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  tags.addLabel('green portal', 'green', 'mdi-orbit')
  tags.addLabel('flamethrower', 'red', 'mdi-fire')
  tags.addLabel('jetpack', 'warning', 'mdi-rocket-launch')
  tags.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')
});
</script>
