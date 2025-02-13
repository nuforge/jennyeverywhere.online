<script setup lang="ts">
</script>
<template>
  <v-bottom-navigation app elevation="4">

    <v-btn value="home" icon="$home" to="/">
    </v-btn>
    <v-btn value="adventure" icon="mdi-all-inclusive" to="/adventure">
    </v-btn>
    <v-btn value="nuforge" icon="mdi-brain" to="/nuforge">
    </v-btn>
    <v-btn value="persona" icon="mdi-account-circle" to="/persona">
    </v-btn>
    <v-btn value="archetypes" icon="mdi-account-multiple" to="/archetype/innocent">
    </v-btn>
  </v-bottom-navigation>
</template>
