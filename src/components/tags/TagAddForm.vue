<template>
  <v-form @submit.prevent>
    <v-card-text>
      <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()" variant="outlined"
        prepend-inner-icon="mdi-label-outline" autofocus persistent-counter></v-text-field>

      <v-autocomplete label="mdi-* icon" v-model="icon" density="compact" @keydown.enter="addTag()" variant="outlined"
        :prepend-inner-icon="mdicon" :items="icons">
        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" :prepend-icon="`mdi-${item.raw}`" :text="`mdi-${item.raw}`"></v-list-item>
        </template>

        <template #append>
          <v-btn icon="mdi-search-web" target="_blank" rel="noopener noreferrer"
            href="https://pictogrammers.com/library/mdi/" size="small" density="compact" variant="plain"
            :ripple="false"></v-btn>
        </template>
      </v-autocomplete>
      <v-text-field label="color" v-model="color" density="compact" @keydown.enter="addTag()" variant="outlined">
        <template #prepend-inner>
          <v-icon icon="mdi-circle-opacity" :color="color"></v-icon>
        </template>
        <template #append>
          <ColorPickerDialog @apply-color="applyColorChoice" />
        </template>
      </v-text-field>
    </v-card-text>
    <v-card-text class="text-center bg-background rounded-lg">
      <v-divider>sample</v-divider>
      <vTagItem :label="tempTag.name" :icon="mdicon" :color="color" :value="text" variant="tonal" class="elevation-4">
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
  </v-form>
</template>


<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useTagStore } from '@/stores/tags'
import vTagItem from '@/components/tags/VTagItem.vue'
import ColorPickerDialog from '@/components/ColorPickerDialog.vue';
import Tag from '@/objects/Tag'

import json from '@/assets/icons.json'
const icons = json.map((icon) => icon.name)

const tags = useTagStore()

const text = ref('')
const color = ref('#FFFFFF')
const icon = ref('tag')
const mdicon = computed(() => `mdi-${icon.value}`)

const tempTag = ref(computed(() => {
  const tag = new Tag(text.value)
  return {
    id: tag.id,
    name: tag.name,
    space: tag.space,
    color: color.value,
    icon: mdicon.value,
  }
}))


function applyColorChoice(hex: string) {
  color.value = hex
}

function addTag() {
  tags.addLabel(text.value, color.value, mdicon.value)
  text.value = ''
}

onMounted(() => {
  text.value = tags.pasteTag().name
  tags.clipboardEmpty()
})

</script>
