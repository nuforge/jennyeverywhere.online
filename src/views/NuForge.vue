<script setup lang="ts">
import { ref, watch } from 'vue';
import IndexedDBEditor from '@/components/IndexedDBEditor.vue';
import ChatEditor from '@/components/ChatEditor.vue';
import LocalStorageEditor from '@/components/LocalStorageEditor.vue';
import ChatManager from '@/objects/chat/ChatManager'
const chatManager = new ChatManager()

import useChatStore from '@/stores/chat/nuchat';
const chat = useChatStore();
const showMessage = ref(true)
const showMemory = ref(false)
const showChat = ref(false)
const truncateMessages = ref(false)
const baseMessageSelect = ref(-1)

const icons: Record<string, string> = {
  developer: 'mdi-code-block-tags',
  user: 'mdi-account-circle',
  assistant: 'mdi-account-multiple-outline',
  system: 'mdi-console-network',
  tool: 'mdi-toolbox-outline',
  bot: 'mdi-robot-outline',
}

const selectedRole = ref('user')
const customRole = ref('')

watch(selectedRole, () => {
  customRole.value = selectedRole.value
})
watch(customRole, () => {
  if (chatManager.roles.includes(customRole.value)) {
    selectedRole.value = customRole.value
  } else {
    selectedRole.value = ''
  }
})

watch(baseMessageSelect, () => {
  if (baseMessageSelect.value >= 0) {
    selectedRole.value = chat.baseMessages[baseMessageSelect.value].role
  }
})

const dragIndex = ref(-1)
const dropIndex = ref(-1)

const onDragStart = (index: number, event: DragEvent) => {
  dragIndex.value = index
  event.dataTransfer?.setData('text/plain', index.toString())
}

const onDragOver = (event: DragEvent) => {
  event.preventDefault()
}

const onDrop = (index: number, event: DragEvent) => {
  event.preventDefault()
  dropIndex.value = index
  const draggedIndex = dragIndex.value
  const droppedIndex = dropIndex.value

  if (draggedIndex !== droppedIndex) {
    const movedItem = chat.baseMessages.splice(draggedIndex, 1)[0]
    chat.baseMessages.splice(droppedIndex, 0, movedItem)
  }

  dragIndex.value = -1
  dropIndex.value = -1
}


</script>

<template><v-card-actions>
    <v-btn-group multiple variant="text">
      <v-btn @click="showMessage = !showMessage" size="small" :icon="showMessage ? `mdi-forum` : `mdi-forum-outline`"
        flat />
      <v-btn @click="showMemory = !showMemory" size="small" :icon="showMemory ? `mdi-brain` : `mdi-brain`" flat />
      <v-btn @click="showChat = !showChat" size="small" :icon="showChat ? `mdi-chat` : `mdi-chat-outline`" flat />
    </v-btn-group>
    <v-spacer />
    <v-btn-group multiple variant="text">
      <v-btn @click="truncateMessages = !truncateMessages" size="small"
        :icon="truncateMessages ? `mdi-dots-horizontal-circle` : `mdi-dots-horizontal-circle-outline`" flat />
    </v-btn-group>
  </v-card-actions>

  <v-divider />

  <v-row v-if="showMessage">
    <v-col>
      <h4><v-icon icon="mdi-forum" size="x-small" /> Messages</h4>
      <v-card-actions class="align-start px-0">
        <v-text-field density="compact" label="Role" v-model="customRole" clearable
          prepend-inner-icon="mdi-account-box-outline" />
        <v-btn-toggle v-model="selectedRole" column>
          <v-btn v-for="role in chatManager.roles" :key="role" :icon="icons[role]" :value="role" color="warning" />
        </v-btn-toggle>
      </v-card-actions>
      <v-textarea label="Content" density="compact" rows="2" auto-grow clearable
        prepend-inner-icon="mdi-message-text-outline" />
      <v-textarea density="compact" label="name  (optional)" variant="plain" rows="1" auto-grow clearable />
      <v-divider />
    </v-col>

    <v-col>
      {{ baseMessageSelect }}
      <v-list lines="three" class="bg-transparent" v-model:selected="baseMessageSelect">
        <v-list-item v-for="(message, index) in chat.baseMessages" :key="`msg-${index}`" :value="index">
          <template #prepend="{ isSelected }">
            <v-tooltip>
              <template #activator="{ props }">
                <v-icon v-bind="props" :icon="icons[message.role]" :color="isSelected ? 'warning' : 'text'"
                  :draggable="true" @dragstart="onDragStart(index, $event)" @dragover="onDragOver"
                  @drop="onDrop(index, $event)" />
              </template>
              <span>{{ message.role }}</span>
            </v-tooltip>
          </template>
          <template #default="{ isSelected }">
            <v-sheet class="rounded-lg pa-2 text-body-2"
              :class="!isSelected && truncateMessages ? `text-truncate` : ''">
              {{ message.content }}
            </v-sheet>
          </template>
        </v-list-item>
      </v-list>
    </v-col>


  </v-row>


  <v-expand-transition>
    <v-row v-if="showMemory">
      <v-col cols="12">
        <h4><v-icon icon="mdi-brain" size="x-small" /> Memory</h4>
      </v-col>
      <v-col>
        <LocalStorageEditor />
      </v-col>
      <v-col>
        <IndexedDBEditor />
      </v-col>
    </v-row>
  </v-expand-transition>

  <v-expand-transition>
    <v-row v-if="showChat">
      <v-col>
        <h4><v-icon icon="mdi-chat" size="x-small" /> Chat</h4>
        <ChatEditor />
        <v-divider />
      </v-col>
    </v-row>
  </v-expand-transition>
</template>
