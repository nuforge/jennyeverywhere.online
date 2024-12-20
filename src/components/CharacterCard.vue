<template>
  <v-card class="elevation-8" variant="plain" density="compact">
    <v-card-text>
      <v-chip-group v-for="(section, index) in sections" :key="index" column>
        <v-tag v-for="(attribute, index) in section" :key="index" :text="attribute.name" :icon="attribute.icon"
          :color="attribute.color" :value="attribute.value?.toString()">
        </v-tag>
        <v-divider></v-divider>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

defineProps({
  character: Object,
  attributes: Object,
  sections: Object,
})


</script>
