<template>
  <v-dialog v-model="state.add" scrim="#000000" class="elevation-10">
    <form @submit.prevent="addTag()">
      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <v-card class="elevation-10 bg-background">
            <v-card-title class="d-flex align-center">
              <v-icon size="small" icon="$tag-add" class="me-1"></v-icon> Add Tag
              <v-spacer></v-spacer>
              <v-icon @click="admin = !admin" :icon="admin ? 'mdi-eye' : 'mdi-eye-outline'" size="sm"></v-icon>
            </v-card-title>
            <v-card-text>
              <v-text-field label="label" v-model="text" density="compact" @keydown.enter="addTag()"
                variant="solo-filled" prepend-inner-icon="mdi-label-outline" persistent-counter></v-text-field>

              <tag-autocomplete v-model="icon" @keydown.enter="addTag()" :prepend-inner-icon="icon"
                variant="solo-filled" />

              <ColorPicker v-model="color" label="color" @keydown.enter="addTag()" variant="solo-filled" />
            </v-card-text>
            <v-card-actions>
              <v-btn text="Close" prepend-icon="$close" variant="plain" @click="state.add = !state.add"></v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="addTag()" text="Add Tag" density="comfortable" prepend-icon="mdi-tag-plus"
                :disabled="!text" class="elevation-2" variant="tonal"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col v-show="admin">
          <v-expansion-panels multiple variant="accordion" v-model="panels">
            <v-expansion-panel>
              <v-expansion-panel-title static>
                <VTagItem dense label="Tag" icon="mdi-tag"></VTagItem>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background">
                <VTagItem :label="tempTag.name" :icon="icon" :color="color" :value="text" variant="tonal"
                  class="elevation-4" />
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title static>
                <VTagItem dense label="System Tags" icon="mdi-tag-hidden" color="disabled" />
              </v-expansion-panel-title>
              <v-expansion-panel-text class="bg-background">
                <div class="d-flex flex-wrap justify-start ga-1">
                  <div v-for="(attr, index) in tempTag" :key="index">
                    <VTagItem :label="`${attr}`" :value="`${attr}`" variant="tonal" class="elevation-4 "
                      :icon="`$${index}`" :space="`${index}`" v-if="attr" />
                  </div>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </form>
  </v-dialog>

</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import VTagItem from '@/components/tags/VTagItem.vue'
import useStateStore from '@/stores/state'
import useTagStore from '@/stores/tags'
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorPicker from '@/components/form/ColorPicker.vue';
import Tag from '@/objects/NuTag';
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
