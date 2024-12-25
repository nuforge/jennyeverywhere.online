<template>
  <v-container class="bg-background rounded-lg">
    <AddTag v-if="styles.add" class="bg-background rounded-lg py-1 mb-4" />
    <v-row>
      <v-col class="pa-0">
        <TagStyles />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="bg-background rounded-lg py-1 mb-4">
        <tag-group :tags="tags.taglist.tags" column class="bg-background rounded elevation-4 px-2"
          :noLabel="styles.labels" :noIcon="styles.icons" :closable="styles.closable" v-model="tags.selection" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStyleStore } from '@/stores/styles'
import { useTagStore } from '@/stores/tags'
import AddTag from '@/components/tags/AddTag.vue'
import TagGroup from '@/components/tags/TagGroup.vue';
import TagStyles from '@/components/tags/TagStyles.vue';
const tags = useTagStore()
const styles = useStyleStore()



onMounted(async () => {
  tags.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  tags.addLabel('green portal', 'green', 'mdi-orbit')
  tags.addLabel('flamethrower', 'red', 'mdi-fire')
  tags.addLabel('jetpack', 'warning', 'mdi-rocket-launch')
  tags.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')



});
</script>
