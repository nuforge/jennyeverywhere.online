<template>
  <v-navigation-drawer temporary>
    <v-container>
      <v-row>
        <v-col>
          <TagList noValue closer />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <AddTag />
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import AddTag from '@/components/AddTag.vue'
import TagList from '@/components/TagList.vue';

</script>
