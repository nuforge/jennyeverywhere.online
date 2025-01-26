<script setup lang="ts">
import { ref } from 'vue'
import Tag from '@/objects/nu/Tag'
import usePersonaStore from '@/stores/persona'
import TagFactory from '@/objects/nu/TagFactory'
const persona = usePersonaStore()
const tempTag = ref(new Tag(''))

function submitForm() {
  //console.log('submitForm', tempTag.value)
  persona.focusOn(TagFactory.create(tempTag.value.name))
}
</script>

<template>
  <v-form @submit.prevent="submitForm()">
    <!-- ADD TAG FORM -->
    <v-text-field label="label" v-model="tempTag.name" density="compact" variant="outlined"
      prepend-inner-icon="mdi-label-outline" persistent-counter></v-text-field>
  </v-form>
</template>
