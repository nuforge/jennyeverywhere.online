<template>
  <v-navigation-drawer location="bottom" permanent :scrim="false" class="bg-transparent border-t-0">
    <v-container class="bg-surface rounded-t-lg">
      <AddTag v-if="styles.add" class="bg-background rounded-lg py-1 mb-4" />
      <v-row>
        <v-col class="pa-0">
          <TagStyles />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="bg-background rounded-lg py-1 mb-4">
          <TagList :noLabel="!styles.labels" :noIcon="styles.icons" :closable="styles.closable" />
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import AddTag from '@/components/tags/AddTag.vue'
import TagList from '@/components/tags/TagList.vue';
import TagStyles from '@/components/tags/TagStyles.vue';
import { ref } from 'vue'
import { useStyleStore } from '@/stores/styles'

const styles = ref(useStyleStore())


</script>
