<script setup lang="ts">
import { ref, computed } from 'vue';

import IndexedDBManager from '@/utils/IndexedDBManager';
import type { Item } from '@/types/Item';
const dbManager = new IndexedDBManager('nuForgeDB', 'items');

const localDatabaseObject = ref<Item[]>([]);
dbManager.getAllItems().then(items => {
  localDatabaseObject.value = items;
});

const tagInput = ref('')
const valueInput = ref('')

const isEmpty = computed(() => localDatabaseObject.value.length === 0)

const validTag = computed(() => tagInput.value.trim().length > 0)
const searchTag = computed(() => tagInput.value.toLowerCase())


const SaveToLocal = async () => {

  const item: Item = { tag: tagInput.value, value: valueInput.value };

  await dbManager.addItem(item);
  localDatabaseObject.value = await dbManager.getAllItems();

}

const RemoveLocal = async () => {
  await dbManager.deleteItem(searchTag.value);
  localDatabaseObject.value = await dbManager.getAllItems();

}
const clearLocal = async () => {
  await dbManager.emptyStore();
  localDatabaseObject.value = await dbManager.getAllItems();

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


///


</script>

<template>
  <v-card>
    <v-card-title>IndexedDB</v-card-title>
    <v-text-field v-model="tagInput" density="compact" label="store" prepend-inner-icon="mdi-tray-arrow-down"
      @keydown.enter="submitForm"></v-text-field>
    <v-textarea v-model="valueInput" density="compact" label="value" prepend-inner-icon="mdi-label"
      @keydown.enter="submitForm" clearable rows="1" auto-grow />
    <v-card-actions class="align-center">
      <v-btn @click="SaveToLocal" color="primary" icon="mdi-tray-plus" :disabled="!validTag"></v-btn>
      <v-btn @click="RemoveLocal" color="warning" icon="mdi-tray-minus" :disabled="!validTag || isEmpty"></v-btn>
      <v-divider></v-divider>
      <v-btn @click="clearLocal" color="warning" icon="mdi-trash-can-outline" :disabled="isEmpty"></v-btn>
    </v-card-actions>
    <div>
      <v-divider><v-label>IndexedDB</v-label></v-divider>
      <div v-for="(item, index) in localDatabaseObject" :key="index">
        <v-label>{{ item.tag }}</v-label> {{ item.value }}<br />
        <v-label>{{ item.id }}</v-label>
      </div>
    </div>
  </v-card>
</template>
