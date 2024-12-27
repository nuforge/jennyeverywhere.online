<template>
  <v-container class="bg-surface elevation-10 ma-2 pa-1 rounded-lg">
    <tag-group :tags="tags.tags" class="bg-background rounded-lg ma-1 pa-2" column :noLabel="styles.labels"
      :noIcon="styles.icons" :closable="styles.closable" v-model="tags.selection" />
    <TagStyles class="d-flex justify-space-between  bg-surface " />
  </v-container>
</template>

<script setup lang="ts">
//
import { onMounted } from 'vue'
import { useStyleStore } from '@/stores/styles'
import { useTagStore } from '@/stores/tags'
import TagGroup from '@/components/tags/TagGroup.vue';
import TagStyles from '@/components/tags/TagStyles.vue';
const tags = useTagStore()
const styles = useStyleStore()

onMounted(() => {
  tags.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  tags.addLabel('green portal', 'green', 'mdi-orbit')
  tags.addLabel('flamethrower', 'red', 'mdi-fire')
  tags.addLabel('jetpack', 'warning', 'mdi-rocket-launch')
  tags.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')
});
</script>
