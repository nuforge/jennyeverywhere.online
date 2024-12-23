<template>
  <v-navigation-drawer location="bottom" permanent :scrim="false" class="bg-transparent border-t-0">
    <v-container class="bg-surface rounded-t-lg">
      <AddTag v-if="showAdd" class="bg-background rounded-lg py-1 mb-4" />
      <v-row>
        <v-col class="pa-0">
          <v-btn-toggle density="compact" class="d-flex justify-space-between bg-surface rounded-t-lg" variant="plain">
            <v-btn @click="showAdd = !showAdd" :prepend-icon="showAdd ? `mdi-tag-plus` : `mdi-tag-plus-outline`"
              :ripple="false">
              <v-tooltip activator="parent" location="top">
                <v-icon :icon="showAdd ? `mdi-tag-plus` : `mdi-tag-plus-outline`"></v-icon> Add Tag
              </v-tooltip>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="noLabel = !noLabel" :prepend-icon="noLabel ? `mdi-label` : `mdi-label-off-outline`"
              :ripple="false">
              <v-tooltip activator="parent" location="top">
                Show labels: <v-icon :icon="noLabel ? `mdi-label` : `mdi-label-off-outline`"></v-icon> {{ noLabel }}
              </v-tooltip>
            </v-btn>
            <v-btn @click="noIcon = !noIcon" :prepend-icon="noIcon ? `mdi-eye-off-outline` : `mdi-eye`" :ripple="false">
              <v-tooltip activator="parent" location="top">
                Show icons: <v-icon :icon="noIcon ? `mdi-eye-off-outline` : `mdi-eye`"></v-icon> {{ !noIcon }}
              </v-tooltip>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="showCloser = !showCloser" :prepend-icon="showCloser ? `mdi-delete` : `mdi-delete-outline`"
              :ripple="false">
              <v-tooltip activator="parent" location="top" text="Delete Tags" variant="text"></v-tooltip>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="bg-background rounded-lg py-1 mb-4">
          <TagList :noLabel="!noLabel" :noIcon="noIcon" :closer="showCloser" />
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddTag from '@/components/AddTag.vue'
import TagList from '@/components/TagList.vue';

const showCloser = ref(false)
const showAdd = ref(false)
const noLabel = ref(true)
const noIcon = ref(false)

</script>
