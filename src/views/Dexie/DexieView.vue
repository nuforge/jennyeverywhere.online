<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { dexiedb } from '@/utils/db';
import type { Friend } from '@/utils/db';
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import type { Observable } from "rxjs";
import { useMemoryStore } from '@/stores/memory';

const memoryStore = useMemoryStore();

const props = defineProps<{
  defaultAge: number;
}>();


const status = ref('');
const friendName = ref('');
const friendAge = ref(props.defaultAge);
const friends = ref(useObservable(
  liveQuery(() => dexiedb.friends.toArray()) as unknown as Observable<Friend[]>
))

async function addFriend() {
  try {
    // Add the new friend!
    const id = await dexiedb.friends.add({
      name: friendName.value
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
onMounted(async () => {
});
</script>
<!-- FriendAdder.vue -->
<template>
  <div>
    <!-- Loading State -->
    <v-progress-circular v-if="memoryStore.isLoading" indeterminate />

    <!-- Error Display -->
    <v-alert v-if="memoryStore.error" type="error">
      {{ memoryStore.error }}
    </v-alert>
    <!-- Memory List -->
    <v-list>
      <v-list-item v-for="memory in memoryStore.memories" :key="memory.id">
        <v-list-item-content>
          <v-list-item-title>{{ memory.content }}</v-list-item-title>
          <v-list-item-subtitle>
            <v-chip v-for="tag in memory.tags" :key="`${tag.space}:${tag.name}`" class="ma-1">
              {{ tag.space ? `${tag.space}:` : '' }}{{ tag.name }}
            </v-chip>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="memoryStore.deleteMemory(memory.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <VCard class="bg-background ">
      <VCardTitle>Add new friend</VCardTitle>
      <VTextField v-model="friendName" type="text" density="compact" label="Name" />
      <VBtn @click="addFriend" size="small">Add Friend</VBtn>
      <p>{{ status }}</p>
      <v-btn value="friends" icon="mdi-list-box-outline" to="/dexie/friends" />
      <VList density="compact">
        <VListItem v-for="(friend) in friends as Friend[]" :key="friend.id">
          <VListItemTitle>{{ friend.name }}</VListItemTitle>
        </VListItem>
      </VList>
    </VCard>
  </div>
</template>
