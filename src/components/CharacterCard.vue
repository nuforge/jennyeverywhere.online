<template>
  <v-card class="elevation-8 border-b-sm border-e-md rounded-b-lg" variant="text">
    <v-card-text>
      <v-chip-group v-for="(section, index) in sections" :key="index" column variant="elevated">
        <v-tag v-for="(tag, index) in section" :key="index" :icon="tag.icon" :color="tag.color" :label="tag.name"
          :value="tag.value.toString()" tooltip bottom noLabel>
        </v-tag>
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
