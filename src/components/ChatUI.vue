<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" :class="message.role">
        <span><strong>{{ message.role }}:</strong> {{ message.content }}</span>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input v-model="userInput" type="text" placeholder="Type your message..." class="chat-input" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OpenAI from "openai";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const reply = ref('')
const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
const userInput = ref('');
const messages = ref([
  { role: 'Jenny Everywhere', content: 'Hello! How can I assist you today?' },
]);

const sendMessage = async () => {
  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: userInput.value }],
    stream: true,
  });
  let assistantMessage = '';
  messages.value.push({ role: 'Jenny Everywhere', content: '' });

  for await (const chunk of stream) {
    assistantMessage += chunk.choices[0]?.delta?.content || '';
    messages.value[messages.value.length - 1].content = assistantMessage;
    reply.value = messages.value[messages.value.length - 1].content
  }
  userInput.value = '';
};

</script>

<style scoped>
.chat-container {
  margin: 20px auto;
  border: 1px solid #333;
  padding: 16px;
  border-radius: 8px;
}

.chat-messages {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 16px;
}

.chat-messages .user {
  text-align: right;
  color: blue;
}

.chat-messages .assistant {
  text-align: left;
  color: green;
}

.chat-input {
  width: calc(100% - 70px);
  padding: 10px;
  margin-right: 10px;
}

button {
  padding: 10px 16px;
  cursor: pointer;
}
</style>
