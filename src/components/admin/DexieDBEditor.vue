<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import MemoryManager from '@/objects/storage/MemoryManager';
import Tag from '@/objects/nu/Tag';
import TagFactory from '@/objects/nu/TagFactory';

const dbManager = new MemoryManager(); // Ensure the store name matches the one used in TagDb

const localDatabaseObject = ref<Tag[]>([]);

onMounted(async () => {
  localDatabaseObject.value = await dbManager.getTags();
});

const storeInput = ref('')
const valueInput = ref('')

const isEmpty = computed(() => localDatabaseObject.value.length === 0)

const validTag = computed(() => storeInput.value.trim().length > 0)
const searchTag = computed(() => storeInput.value.toLowerCase())

const SaveToLocal = async () => { //id, space, name
  const item: Tag = TagFactory.create(`${storeInput.value}:${valueInput.value}`)
  await dbManager.addTag(item)
  localDatabaseObject.value = await dbManager.getTags();
}

const RemoveLocal = async () => {
  await dbManager.deleteTag(searchTag.value);
  localDatabaseObject.value = await dbManager.getTags();
}

const clearLocal = async () => {
  await dbManager.emptyTags();
  localDatabaseObject.value = await dbManager.getTags();
}

const submitForm = (event: Event) => {
  event.preventDefault()
  SaveToLocal()
  clearInput()
}

const clearInput = () => {
  storeInput.value = ''
  valueInput.value = ''
}
</script>

<template>
  <v-card>
    <v-card-title>DexieDB</v-card-title>
    <v-text-field v-model="storeInput" density="compact" label="store" prepend-inner-icon="mdi-tray-arrow-down"
      @keydown.enter="submitForm"></v-text-field>
    <v-textarea v-model="valueInput" density="compact" label="value" prepend-inner-icon="mdi-label"
      @keydown.enter="submitForm" clearable rows="1" auto-grow />
    <v-card-actions class="align-center">
      <v-btn @click="SaveToLocal" color="primary" icon="mdi-tray-plus" :disabled="!validTag"></v-btn>
      <v-btn @click="RemoveLocal" color="warning" icon="mdi-tray-minus" :disabled="!validTag || isEmpty"></v-btn>
      <v-divider></v-divider>
      <v-btn @click="clearLocal" color="warning" icon="mdi-trash-can-outline" :disabled="isEmpty"></v-btn>
    </v-card-actions>
    <v-card-text>
      <v-divider><v-label>IndexedDB</v-label></v-divider>
      <div v-for="(item, index) in localDatabaseObject" :key="index">
        <v-label>{{ item.id }}</v-label>
      </div>

    </v-card-text>
  </v-card>
</template>
