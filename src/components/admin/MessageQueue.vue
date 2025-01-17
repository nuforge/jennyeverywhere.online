<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type ChatGPTMsg from '@/types/ChatGPTMsg'
import ChatManager from '@/objects/chat/ChatManager'
const chatManager = new ChatManager()

// import useChatStore from '@/stores/chat/nuchat';
// const chat = useChatStore();
const liveEdit = ref(false)
const truncateMessages = ref(true)

const validMessage = computed(() => messageContent.value.trim().length > 0 && selectedRole.value.length > 0)

const noSelection = computed(() => queueSelection.value.length === 0) // DOES NOT EDIT IF ITEM IS DELETED
const dragIndex = ref(-1)
const dropIndex = ref(-1)



const baseMessages = ref<ChatGPTMsg[]>([
  {
    role: 'developer',
    content: `You are Jenny Everywhere, messaging the user through a cell phone from a different reality. That's not too weird for you, and for all you know, not weird for the user. Casually, and realistically converse with the user about who you are and what you are doing.`,
  },
  {
    role: 'developer',
    content: `The previous message sent by you was:`,
  },
  {
    role: 'user',
    content: 'Hello? Who is this?',
    name: 'user',
  },
])

const icons: Record<string, string> = {
  developer: 'mdi-code-block-tags',
  user: 'mdi-comment-account',
  assistant: 'mdi-account-multiple-outline',
  system: 'mdi-server-network-off', // DEPRECATED
  tool: 'mdi-toolbox',
  bot: 'mdi-robot-outline',
}

const queueSelection = ref([baseMessages.value.length - 1])
const selectedMessage = ref(baseMessages.value[queueSelection.value[0]])

const selectedRole = ref(selectedMessage.value.role)
const customRole = ref(selectedRole.value)
const messageContent = ref(selectedMessage.value.content)
const messageName = ref(selectedMessage.value.name)


const colors: Record<string, string> = {
  developer: 'warning',
  user: 'primary',
  assistant: 'secondary',
  system: 'black', // DEPRECATED
  tool: 'accent',
  bot: 'error',
}

const submitMessageForm = () => {
  if (noSelection.value) {
    addMessage()
  } else {
    editMessage()
  }
}

const clearMessagForm = () => {
  selectedRole.value = 'user'
  messageContent.value = ''
  messageName.value = ''
}

const editMessageByIndex = (index: number, event: Event) => {
  console.log('editMessageByIndex', index, event)
  selectedRole.value = baseMessages.value[index]?.role || ''
  messageContent.value = baseMessages.value[index]?.content || ''
  messageName.value = baseMessages.value[index]?.name || ''
}

const addMessage = () => {
  if (!validMessage.value) return
  const roletoGPT = selectedRole.value as 'developer' | 'user' | 'assistant' | 'system' | 'tool'
  baseMessages.value.push({ role: roletoGPT, content: messageContent.value })
  clearMessagForm()
}

const editMessage = () => {
  if (!validMessage.value) return
  const roletoGPT = selectedRole.value as 'developer' | 'user' | 'assistant' | 'system' | 'tool'
  queueSelection.value.forEach((index: number) => {
    baseMessages.value[index] = { role: roletoGPT, content: messageContent.value }
  })
}
const removeMessages = () => {
  queueSelection.value.forEach((index: number) => {
    baseMessages.value.splice(index, 1)
  })
}


// Message Drag and Drop
const onDragStart = (index: number, event: DragEvent) => {
  dragIndex.value = index
  event.dataTransfer?.setData('text/plain', index.toString())
}

const onDragOver = (index: number, event: DragEvent) => {
  event.preventDefault()
}

const onDrop = (index: number, event: DragEvent) => {
  event.preventDefault()
  dropIndex.value = index
  const draggedIndex = dragIndex.value
  const droppedIndex = dropIndex.value


  if (draggedIndex !== droppedIndex) {
    const movedItem = baseMessages.value.splice(draggedIndex, 1)[0]
    baseMessages.value.splice(droppedIndex, 0, movedItem)

  }

  dragIndex.value = -1
  dropIndex.value = -1
}



// WATCHERS

watch(selectedRole, () => {
  customRole.value = selectedRole.value
})

watch(customRole, () => {
  if (chatManager.roles.includes(customRole.value)) {
    selectedRole.value = customRole.value
  } else {
    selectedRole.value = 'user'
  }
})


</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="bg-background">
          <v-card-actions>
            <v-btn @click="addMessage" icon="mdi-plus" color="primary" :disabled="!validMessage" />
            <v-spacer />
          </v-card-actions>

          <v-card-actions class="align-start px-0">

            <v-btn-toggle v-model="selectedRole" column>
              <v-btn v-for="role in chatManager.roles" :key="role" :icon="icons[role]" :value="role"
                :color="colors[role]" />
            </v-btn-toggle>
            <v-text-field density="compact" label="Role" v-model="customRole" clearable
              :prepend-inner-icon="icons[selectedRole]" variant="plain" @keydown.exact.enter.ctrl="submitMessageForm" />

          </v-card-actions>

          <v-card-text>
            <v-textarea v-model="messageContent" label="Content" density="compact" rows="2" auto-grow clearable
              prepend-inner-icon="mdi-message-text-outline" @keydown.exact.enter.ctrl="submitMessageForm" />
            <v-textarea v-model="messageName" density="compact" label="name  (optional)" variant="plain" rows="1"
              auto-grow clearable />

          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="bg-background">
          <v-card-actions>
            <v-btn @click="editMessage" icon="mdi-pencil" :disabled="noSelection" />
            <v-spacer />
            <v-btn size="small"
              :icon="truncateMessages ? `mdi-dots-horizontal-circle` : `mdi-dots-horizontal-circle-outline`" flat
              @click="truncateMessages = !truncateMessages" />
            <v-btn size="small" :icon="liveEdit ? `mdi-pencil-circle` : `mdi-pencil-circle-outline`" flat
              @click="liveEdit = !liveEdit" />
            <v-spacer />
            <v-btn icon="mdi-trash-can-outline" :color="noSelection ? `disabled` : `warning`" :disabled="noSelection"
              @click="removeMessages" />
          </v-card-actions>

          <v-card-text>
            <v-list lines="three" class="bg-transparent" select-strategy="single-independent"
              v-model:selected="queueSelection" variant="plain" density="compact" multiple="true">
              <v-list-item v-for="(message, index) in baseMessages" :key="`msg-${index}`" :value="index" class="pa-0 "
                @dragover="onDragOver(index, $event)" @drop="onDrop(index, $event)"
                @click.right.prevent="editMessageByIndex(index, $event)" rounded>
                <template #prepend="{ isSelected }">
                  <v-tooltip>
                    <template #activator="{ props }">
                      <v-icon v-bind="props" :icon="icons[message.role]"
                        :color="isSelected ? colors[message.role] : 'text'" :draggable="true"
                        @dragstart="onDragStart(index, $event)" />
                    </template>
                    <span>{{ message.role }}</span>
                  </v-tooltip>
                </template>
                <template #default="{ isSelected }">
                  <v-sheet class="rounded-lg pa-2 text-body-2"
                    :class="[isSelected ? 'bg-surface' : 'bg-background  text-disabled', truncateMessages ? `text-truncate` : '']">
                    {{ message.content }}
                  </v-sheet>
                </template>
              </v-list-item>
            </v-list>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.draggable {
  cursor: grab;
}
</style>
