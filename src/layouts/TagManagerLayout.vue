<template>
  <v-container class="bg-surface rounded-lg elevation-4 me-15  mb-6 ms-2 pa-0  ">
    <AddTag v-if="styles.add" class="bg-surface" />
    <v-divider v-if="styles.add" />
    <tag-group :tags="tags.tags" class="pa-1 bg-background ma-2 rounded" column :noLabel="styles.labels"
      :noIcon="styles.icons" :closable="styles.closable" v-model="tags.selection" />
  </v-container>
</template>

<script setup lang="ts">
//
import { onMounted } from 'vue'
import { useStyleStore } from '@/stores/styles'
import { useTagStore } from '@/stores/tags'
import AddTag from '@/components/tags/AddTag.vue'
import TagGroup from '@/components/tags/TagGroup.vue';
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
