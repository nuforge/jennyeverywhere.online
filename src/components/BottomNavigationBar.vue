<script setup lang="ts">
</script>
<template>
  <v-bottom-navigation app elevation="4">

    <v-btn value="home" icon="$home" to="/">
    </v-btn>
    <!-- Chat -->
    <v-btn value="chat" :icon="`mdi-chat`" to="chat">
    </v-btn>
    <v-btn value="nuforge" icon="mdi-brain" to="/nuforge">
    </v-btn>
    <v-btn value="persona" icon="mdi-account-circle" to="/persona">
    </v-btn>
    <v-btn value="search" icon="mdi-tag-search" to="/search">
    </v-btn>
    <v-btn value="playingcards" icon="mdi-cards" to="/playingcards">
    </v-btn>
  </v-bottom-navigation>
</template>
