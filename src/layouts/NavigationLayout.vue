<template>
  <v-navigation-drawer temporary absolute>
    <v-btn-toggle density="compact" elevation="4" class="d-flex justify-space-between">
      <v-btn @click="showAdd = !showAdd" :prepend-icon="showAdd ? `mdi-tag-plus` : `mdi-tag-plus-outline`"
        :ripple="false"></v-btn>
      <v-btn @click="showCloser = !showCloser" :prepend-icon="showCloser ? `mdi-delete` : `mdi-delete-outline`"
        :ripple="false"></v-btn>
    </v-btn-toggle>
    <v-container>
      <v-row>
        <v-col>
          <TagList noValue :closer="showCloser" />
        </v-col>
      </v-row>
    </v-container>
    <AddTag v-if="showAdd" />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddTag from '@/components/AddTag.vue'
import TagList from '@/components/TagList.vue';

const showCloser = ref(false)
const showAdd = ref(false)

</script>
