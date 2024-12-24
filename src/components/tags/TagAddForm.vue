<template>
  <v-form @submit.prevent>
    <v-row>
      <v-col>
        <v-card-text>
          <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()" variant="outlined"
            prepend-inner-icon="mdi-label-outline" autofocus persistent-counter></v-text-field>
          <v-text-field label="icon" v-model="icon" density="compact" @keydown.enter="addTag()" variant="outlined"
            :prepend-inner-icon="icon">
            <template #append>
              <v-btn icon="mdi-search-web" target="_blank" rel="noopener noreferrer"
                href="https://pictogrammers.com/library/mdi/" size="small" density="compact" variant="plain"
                :ripple="false"></v-btn>
            </template>
          </v-text-field>
          <v-text-field label="color" v-model="color" density="compact" @keydown.enter="addTag()" variant="outlined">
            <template #prepend-inner>
              <v-icon icon="mdi-circle-opacity" :color="color"></v-icon>
            </template>
            <template #append>
              <ColorPickerDialog @apply-color="applyColorChoice" />
            </template>
          </v-text-field>
        </v-card-text>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <v-card-text class="text-center">
          <v-divider>sample</v-divider>
          <vTagItem :label="tempTag.name" :icon="icon" :color="color" :value="text" variant="tonal" class="elevation-4">
          </vTagItem>
          <v-divider>details</v-divider>
          <div class="d-flex flex-wrap justify-start ga-1">
            <div v-for="(attr, index) in tempTag" :key="index">
              <v-tag-item :label="`${attr}`" :value="`${attr}`" variant="tonal" class="elevation-4" :icon="`$${index}`"
                :space="`${index}`" v-if="attr !== undefined">
              </v-tag-item>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addTag()" density="comfortable" prepend-icon="mdi-tag-plus" :disabled="!text" variant="tonal"
            block></v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-form>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTagStore } from '@/stores/tags'
import vTagItem from '@/components/tags/VTagItem.vue'
import ColorPickerDialog from '@/components/ColorPickerDialog.vue';
import Tag from '@/objects/Tag'

const tags = ref(useTagStore());
const icon = ref('mdi-tag-outline')
const text = ref('')
const color = ref('#FFFFFF')

const tempTag = ref(computed(() => {
  const tag = new Tag(text.value)
  return {
    id: tag.id,
    name: tag.name,
    space: tag.space,
    color: color.value,
    icon: icon.value,
  }
}))


function applyColorChoice(hex: string) {
  color.value = hex
}

function addTag() {
  tags.value.addLabel(text.value, color.value, icon.value)
  text.value = ''
}

</script>
