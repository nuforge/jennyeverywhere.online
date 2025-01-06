<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Tag from '@/objects/Tag.ts';
import NuTag from '@/components/nu/NuTag.vue';
import TagAutocomplete from '@/components/form/TagAutocomplete.vue';
import ColorAutocomplete from '@/components/form/ColorAutocomplete.vue';
import TagCardStyles from '@/components/tags/TagCardStyles.vue';

import useStateStore from '@/stores/state';
import usePersonaStore from '@/stores/persona';
import useStyleStore from '@/stores/styles'
const persona = usePersonaStore()
const state = useStateStore()
const styles = useStyleStore()

const tempTag = ref(new Tag('', 'primary', 'mdi-tag'))

const descending = computed(() => [...persona.attention.tags].reverse())

const tagVariant = ref('text')

const expansions = ref([0])

function selectVariant(variant: string) {
  //console.log('selectVariant', variant)
  tagVariant.value = variant
}

function submitForm() {
  //console.log('submitForm', tempTag.value)
  persona.focusOn(new Tag(tempTag.value.name, tempTag.value.color, tempTag.value.icon))
}

function resetTemp() {
  tempTag.value = persona.focus
}

watch(
  () => persona.focus, // Use optional chaining to avoid errors
  (newFocus) => {
    expansions.value = [0]
    console.log('watch', newFocus)
  }
);

</script>


<template>
  <v-navigation-drawer class="bg-background" v-model="persona.drawer" app right width="300" :scrim="!state.dragging"
    flat>
    <v-card flat>

      <!-- Focus Drawer Card Actions -->
      <v-card-actions>
        <v-icon @click="persona.drawer = !persona.drawer">mdi-close</v-icon>
        <v-spacer />
        <TagCardStyles :tray="styles.trays" :labels="styles.labels" :icons="styles.icons" :colors="styles.colors"
          :logs="styles.logs" @update:labels="(value: boolean) => { styles.labels = value }"
          @update:icons="(value: boolean) => { styles.icons = value }"
          @update:colors="(value: boolean) => { styles.colors = value }"
          @update:logs="(value: boolean) => { styles.logs = value }"
          @update:tray="(value: boolean) => { styles.trays = value }" />
      </v-card-actions>

      <!-- Focus Tag Tray -->
      <v-card-text>
        <v-divider />
        <v-btn-toggle v-model="styles.variant" class="d-flex justify-space-evenly">
          <v-tooltip bottom v-for="variant in styles.chipVariants" :key="variant">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-button-pointer" :value="variant" v-bind="props" @click="selectVariant(variant)"
                variant="plain" class="rounded" />
            </template>
            {{ variant }}
          </v-tooltip>
        </v-btn-toggle>
        <v-divider />
      </v-card-text>
      <v-card-text>
        <v-expansion-panels variant="accordion" multiple static flat collapse-icon="mdi-chevron-up"
          v-model="expansions">
          <v-expansion-panel title="Focus" expand-icon="mdi-eye">
            <v-expansion-panel-text class="bg-background  text-center ma-0 ">
              <NuTag :tag="(persona.focus as Tag)" :variant="styles.variant" />
            </v-expansion-panel-text>
          </v-expansion-panel>


          <v-expansion-panel title="Create Tag" expand-icon="mdi-tag-plus">
            <v-expansion-panel-text>
              <v-btn @click="resetTemp" block prepend-icon="mdi-eye-plus" flat>Load Focus</v-btn>
              <v-form @submit.prevent="submitForm()">

                <v-text-field label="label" v-model="tempTag.name" density="compact" variant="outlined"
                  prepend-inner-icon="mdi-label-outline" autofocus persistent-counter></v-text-field>
                <tag-autocomplete v-model="tempTag.icon" :prepend-inner-icon="tempTag.icon" />
                <ColorAutocomplete v-model="(tempTag.color as string)" label="color" />


              </v-form>

            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel title="System Tags" expand-icon="mdi-tag-multiple-outline">
            <v-expansion-panel-text>

              <v-list lines="one" density="compact">
                <v-list-item v-for="tag in (persona.focus.attributesToTags() as Tag[])" :key="tag.id">
                  <NuTag :tag="tag" elevation="2" />
                </v-list-item>
              </v-list>


            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel title="History" expand-icon="mdi-timeline">
            <v-expansion-panel-text>

              <v-list lines="one" density="compact">
                <v-list-item v-for="tag in (descending as Tag[])" :key="tag.id">
                  <NuTag :tag="tag" elevation="2" />
                </v-list-item>
              </v-list>

            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>



      </v-card-text>
      <!-- Tag Details -->
    </v-card>
  </v-navigation-drawer>
</template>
