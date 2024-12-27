<template>
  <v-form @submit.prevent>
    <v-card-text>
      <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()" variant="outlined"
        prepend-inner-icon="mdi-label-outline" autofocus persistent-counter></v-text-field>

      <tag-autocomplete v-model="icon" @keydown.enter="addTag()" :prepend-inner-icon="icon" />

      <ColorPicker v-model="color" label="color" @keydown.enter="addTag()" />
    </v-card-text>
    <v-card-text class="text-center bg-background rounded-lg">
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
  </v-form>
</template>


<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useTagStore } from '@/stores/tags'
import vTagItem from '@/components/tags/VTagItem.vue'
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
import Tag from '@/objects/Tag'


const tags = useTagStore()

const text = ref('')
const color = ref('#FFFFFF')
const icon = ref('mdi-tag')

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


function addTag() {
  tags.addLabel(text.value, color.value, icon.value)
  text.value = ''
}

onMounted(() => {
  text.value = tags.pasteTag().name
  tags.clipboardEmpty()
})

</script>
