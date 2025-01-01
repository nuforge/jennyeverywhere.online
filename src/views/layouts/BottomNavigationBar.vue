<template>
  <v-bottom-navigation app elevation="4" class="bg-background">
    <v-btn value="home" icon="$home" to="/">
    </v-btn>
    <v-btn value="timeline" :icon="`mdi-timeline`" to="timeline">
    </v-btn>
    <v-btn value="character" icon="mdi-account-circle" to="/character">
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
</script>
