<script setup lang="ts">
import { ref } from 'vue';
import dexiedb from '@/utils/db';
import type { Friend } from '@/utils/db';
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";

const props = defineProps<{
  defaultAge: number;
}>();


const status = ref('');
const friendName = ref('');
const friendAge = ref(props.defaultAge);
const friends = ref(useObservable(
  liveQuery(() => dexiedb.friends.toArray())
))

async function addFriend() {
  try {
    // Add the new friend!
    const id = await dexiedb.friends.add({
      name: friendName.value,
      age: friendAge.value ?? 21,
    });

    status.value = `Friend ${friendName.value}
          successfully added. Got id ${id}`;

    // Reset form:
    friendName.value = '';
    friendAge.value = props.defaultAge;
  } catch (error) {
    status.value = `Failed to add
          ${friendName.value}: ${error}`;
  }
}
</script>
<!-- FriendAdder.vue -->
<template>
  <VCard class="bg-background ">
    <VCardTitle>Add new friend</VCardTitle>
    <VTextField v-model="friendName" type="text" density="compact" label="Name" />
    <VTextField v-model="friendAge" type="number" density="compact" label="Age" />
    <VBtn @click="addFriend" size="small">Add Friend</VBtn>
    <p>{{ status }}</p>
    <v-btn value="friends" icon="mdi-list-box-outline" to="/dexie/friends" />
    <VList density="compact">
      <VListItem v-for="(friend) in friends as Friend[]" :key="friend.id">
        <VListItemTitle>{{ friend.name }}, {{ friend.age }}</VListItemTitle>
      </VListItem>
    </VList>
  </VCard>
</template>
