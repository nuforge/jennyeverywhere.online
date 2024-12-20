<template>
  <v-card class="elevation-8 border-b-sm border-e-md rounded-b-lg" variant="text">
    <v-card-text>
      <v-chip-group v-for="(section, index) in sections" :key="index" column variant="elevated">
        <v-tag v-for="(attribute, index) in section" :key="index" :text="attribute.name" :icon="attribute.icon"
          :color="attribute.color" :value="attribute.value?.toString()" tooltip>
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
