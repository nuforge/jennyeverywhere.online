<template>
  <v-container class="bg-surface rounded-t-lg">
    <AddTag v-if="styles.add" class="bg-background rounded-lg py-1 mb-4" />
    <v-row>
      <v-col class="pa-0">
        <TagStyles />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="bg-background rounded-lg py-1 mb-4">
        <tag-group :tags="tags.tags" column class="bg-background rounded elevation-4 px-2" :noLabel="styles.labels"
          :noIcon="styles.icons" :closable="styles.closable" v-model="tags.selection" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStyleStore } from '@/stores/styles'
import { useTagStore } from '@/stores/tags'
import AddTag from '@/components/tags/AddTag.vue'
import TagGroup from '@/components/tags/TagGroup.vue';
import TagStyles from '@/components/tags/TagStyles.vue';
const tags = ref(useTagStore())
const styles = ref(useStyleStore())



onMounted(async () => {
  console.log('App.vue mounted')
  tags.value.addLabel('Jenny Everywhere', 'primary', 'mdi-account-circle')
  tags.value.addLabel('green portal', 'green', 'mdi-orbit')
  tags.value.addLabel('flamethrower', 'red', 'mdi-fire')
  tags.value.addLabel('jetpack', 'warning', 'mdi-rocket-launch')
  tags.value.addLabel('dude with a mohawk', 'text', 'mdi-account-circle-outline')

});
</script>
