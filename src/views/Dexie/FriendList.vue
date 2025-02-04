<!-- FriendList.vue -->
<template>
  <ul>
    <li v-for="friend in friends" :key="friend.id">
      {{ friend.name }}, {{ friend.age }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import dexiedb from '@/utils/db';
import type { Friend } from '@/utils/db';

const friends = ref(useObservable(
  liveQuery(() => dexiedb.friends.toArray() as Promise<Friend[]>)
))
</script>
