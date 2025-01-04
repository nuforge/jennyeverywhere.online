<template>
  <v-navigation-drawer :scrim="false" v-model="state.drawer" disable-route-watcher close-delay="200"
    class="bg-background">
    <v-container>
      <TagCardStyles :tray="styles.trays" :labels="styles.labels" :icons="styles.icons" :colors="styles.colors"
        :logs="styles.logs" @update:labels="(value: boolean) => { styles.labels = value }"
        @update:icons="(value: boolean) => { styles.icons = value }"
        @update:colors="(value: boolean) => { styles.colors = value }"
        @update:logs="(value: boolean) => { styles.logs = value }"
        @update:tray="(value: boolean) => { styles.trays = value }" />
      <EvTrayCard :tags="(tags.tags as Tag[])" :title="false" v-model="tags.selection" />
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state';
import { useTagStore } from '@/stores/tags'
import { useStyleStore } from '@/stores/styles'
import Tag from '@/objects/Tag.ts';
import EvTrayCard from '@/components/tags/EvTrayCard.vue';
import TagCardStyles from '@/components/tags/TagCardStyles.vue';

const state = useStateStore()
const styles = useStyleStore()
const tags = useTagStore()


</script>
