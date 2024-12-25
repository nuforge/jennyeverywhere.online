<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" sm="2">
        <h1>{{ name }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()


console.log(router.currentRoute.value)

const name = router.currentRoute.value.params.pathMatch
[0].toString().toLocaleUpperCase().replace(/-/g, ' ')



</script>
