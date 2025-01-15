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
    <v-card-title>IndexedDB Manager</v-card-title>
    <v-card-actions class="align-center">
      <v-text-field v-model="tagInput" density="compact" label="tag" prepend-inner-icon="mdi-tag"
        @keydown.enter="submitForm"></v-text-field>
      <v-text-field v-model="valueInput" density="compact" label="value" prepend-inner-icon="mdi-tray"
        @keydown.enter="submitForm"></v-text-field>
    </v-card-actions>
    <v-card-actions class="align-center">
      <v-btn @click="SaveToLocal" color="primary" icon="mdi-tray-plus" :disabled="!validTag"></v-btn>
      <v-btn @click="RemoveLocal" color="primary" icon="mdi-tray-minus" :disabled="!validTag"></v-btn>
      <v-divider></v-divider>
      <v-btn @click="clearLocal" color="primary" icon="mdi-close"></v-btn>
    </v-card-actions>
    <div>
      <v-divider><v-label>local Storage</v-label></v-divider>
      <div v-for="(item, index) in localDatabaseObject" :key="index">
        {{ item.tag }}: <v-label>{{ item.value }}</v-label><br />
        <v-label>{{ item.id }}</v-label>
      </div>
      <v-divider><v-label>Raw</v-label></v-divider>
    </div>
  </v-card>
</template>
