<template>
  <v-bottom-navigation app elevation="2" grow>
    <v-btn value="home" icon="$home" to="/">
    </v-btn>
    <v-btn value="timeline" :icon="`$events`" to="timeline">
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
</script>
