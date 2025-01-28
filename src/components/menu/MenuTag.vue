<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  menuVisible: boolean
}>();

const emit = defineEmits(['update:menuVisible']);
const localMenuVisible = ref(props.menuVisible);

watch(localMenuVisible, (newValue) => {
  emit('update:menuVisible', newValue);
});

watch(() => props.menuVisible, (newValue) => {
  localMenuVisible.value = newValue;
});
</script>

<template>
  <v-menu v-model="localMenuVisible" activator="parent" transition="slide-x-transition" :open-on-click="false">
    <v-list density="compact" class="bg-background rounded">
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-delete</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Remove</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
