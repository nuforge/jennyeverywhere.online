<template>
  <v-dialog v-model="state.add" scrim="#000000">
    <form @submit.prevent="addTag()">
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="d-flex align-center">
              <v-icon size="small" icon="$tag-add" class="me-1"></v-icon> Add Tag
              <v-spacer></v-spacer>
              <v-icon @click="admin = !admin" :icon="admin ? 'mdi-eye' : 'mdi-eye-outline'" size="sm"></v-icon>
            </v-card-title>
            <v-card-text>
              <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()" variant="outlined"
                prepend-inner-icon="mdi-label-outline" autofocus persistent-counter></v-text-field>

              <tag-autocomplete v-model="icon" @keydown.enter="addTag()" :prepend-inner-icon="icon" />

              <ColorPicker v-model="color" label="color" @keydown.enter="addTag()" />
            </v-card-text>
            <v-card-actions>
              <v-btn text="Cancel" density="comfortable" prepend-icon="mdi-close" variant="tonal"
                @click="state.add = !state.add"></v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="addTag()" text="Add" density="comfortable" prepend-icon="mdi-tag-plus" :disabled="!text"
                variant="tonal"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col v-show="admin">
          <v-expansion-panels multiple variant="accordion" v-model="panels">
            <v-expansion-panel>
              <v-expansion-panel-title static>
                <v-tag dense label="Tag" icon="mdi-tag"></v-tag>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background">
                <vTagItem :label="tempTag.name" :icon="icon" :color="color" :value="text" variant="tonal"
                  class="elevation-4">
                </vTagItem>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title static>
                <v-tag dense label="System Tags" icon="mdi-tag-hidden" color="disabled"></v-tag>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background">
                <div class="d-flex flex-wrap justify-start ga-1">
                  <div v-for="(attr, index) in tempTag" :key="index">
                    <v-tag-item :label="`${attr}`" :value="`${attr}`" variant="tonal" class="elevation-4 "
                      :icon="`$${index}`" :space="`${index}`" v-if="attr !== undefined">
                    </v-tag-item>
                  </div>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </form>
  </v-dialog>

</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import vTagItem from '@/components/tags/VTagItem.vue'
import { useStateStore } from '@/stores/state'
import { useTagStore } from '@/stores/tags'
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
import Tag from '@/objects/Tag';
const state = useStateStore()

const admin = ref(true)
const panels = ref([0, 1])

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
