<template>
  <v-container class="bg-background rounded-lg elevation-4 ma-0 pa-0">
    <AddTag v-if="styles.add" class="bg-background rounded-lg py-1 mb-4 " />
    <TagStyles />
    <tag-group :tags="tags.taglist.tags" class="pa-2" column :noLabel="styles.labels" :noIcon="styles.icons"
      :closable="styles.closable" v-model="tags.selection" />
  </v-container>
</template>

<script setup lang="ts">
//
import { onMounted } from 'vue'
import { useStyleStore } from '@/stores/styles'
import { useTagStore } from '@/stores/tags'
import AddTag from '@/components/tags/AddTag.vue'
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
