<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import LocalStorageManager from '@/utils/LocalStorageManager';
const localStorage = new LocalStorageManager('nuForgeMemory')

// localStorage.storeItem('chat', chat.chatSent)
// chat.chatSent = localStorage.retrieveItem('chat')?.toString() ?? ''
// localStorage.clearAllItems()

//const chatMessages = computed(() => chat.previousMessages)
const localObject = ref(localStorage.retrieveAllItems())

const tagInput = ref('')
const valueInput = ref('')

const validTag = computed(() => tagInput.value.trim().length > 0)

const searchTag = computed(() => tagInput.value.toLowerCase())
const hasValue = computed(() => localStorage.hasItem(searchTag.value))
const searchValue = computed(() => hasValue.value ? localStorage.retrieveItem(searchTag.value) : false)

const SaveToLocal = () => {
  localStorage.storeItem(searchTag.value, valueInput.value)
  localObject.value = localStorage.retrieveAllItems()
}
const RemoveLocal = () => {
  localStorage.removeItem(searchTag.value)
  localObject.value = localStorage.retrieveAllItems()
}
const clearLocal = () => {
  localStorage.clearAllItems()
  localObject.value = localStorage.retrieveAllItems()
}

const submitForm = (event: Event) => {
  event.preventDefault()
  SaveToLocal()
  clearInput()
}

const clearInput = () => {
  tagInput.value = ''
  valueInput.value = ''
}

watch(searchValue, () => {
  if (searchValue.value) {
    valueInput.value = localStorage.retrieveItem(searchTag.value)?.toString() ?? ''
  }
  console.log('searchValue', searchValue.value)
})

</script>

<template>
  <v-card>
    <v-card-title>localStorage</v-card-title>
    <v-text-field v-model="tagInput" density="compact" label="tag" prepend-inner-icon="mdi-tag"
      @keydown.enter="submitForm" clearable></v-text-field>
    <v-textarea v-model="valueInput" density="compact" label="value" prepend-inner-icon="mdi-tray"
      @keydown.enter="submitForm" clearable rows="1" auto-grow></v-textarea>
    <v-card-actions class="align-center">
      <v-btn @click="SaveToLocal" color="primary" icon="mdi-tray-plus" :disabled="!validTag"></v-btn>
      <v-btn @click="RemoveLocal" color="warning" icon="mdi-tray-minus"
        :disabled="!validTag || localStorage.isEmpty()"></v-btn>
      <v-divider></v-divider>
      <v-btn @click="clearLocal" color="warning" icon="mdi-trash-can-outline"
        :disabled="localStorage.isEmpty()"></v-btn>
    </v-card-actions>
    <v-card-text>
      <v-divider><v-label>localStorage</v-label></v-divider>
      <div v-for="(item, index) in localObject" :key="index">
        <v-label>{{ index }}</v-label> {{ item }}
      </div>
    </v-card-text>
  </v-card>

</template>
