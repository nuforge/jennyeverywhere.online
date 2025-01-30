<script setup lang="ts">
import { ref, watch } from 'vue';
import Tag from '@/objects/nu/Tag';

const props = defineProps<{
  menuVisible: boolean,
  tag: Tag,
}>();

const emit = defineEmits(['update:menuVisible', 'close']);
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
    <v-list density="compact" nav class="bg-background" :lines="false">
      <v-list-item value="focus" prepend-icon="mdi-image-filter-center-focus" title="Focus" />
      <v-list-item value="edit" prepend-icon="mdi-tag-edit" title="Edit" append-icon="mdi-chevron-right">
        <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
          <v-list density="compact" nav class="bg-background" :lines="false">
            <v-list-item value="icon" prepend-icon="mdi-eye" :title="`icon: ${tag.icon} `" />
            <v-list-item value="color" prepend-icon="mdi-eyedropper" :title="`color: ${tag.color} `" />
          </v-list>
        </v-menu>
      </v-list-item>
      <v-list-item value="delete" prepend-icon="mdi-tag-remove" title="Delete" @click="emit('close')" />
    </v-list>
  </v-menu>
</template>
