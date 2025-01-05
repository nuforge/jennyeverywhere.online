<template>

  <v-btn :prepend-icon="momentum.icon()" @click.alt.exact="momentum.decrement()" @click.exact="momentum.increment()"
    color="text" :text="momentum.count().toString()"></v-btn>
</template>

<script setup lang="ts">
import useCounterStore from '@/stores/counter';
const momentum = useCounterStore()

</script>
