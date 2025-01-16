<script setup lang="ts">
</script>
<template>
  <v-bottom-navigation app elevation="4">

    <!-- Chat -->
    <v-btn value="chat" :icon="`mdi-chat`" to="chat">
    </v-btn>
    <v-btn value="nuforge" icon="mdi-brain" to="/nuforge">
    </v-btn>
    <v-btn value="character" icon="mdi-account-circle" to="/character">
    </v-btn>
    <v-btn value="home" icon="$home" to="/">
    </v-btn>
  </v-bottom-navigation>
</template>
