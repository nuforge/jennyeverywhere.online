import { ref } from 'vue'
import { defineStore } from 'pinia'
import Tag from '@/objects/nu/Tag'
import type ChatMsg from '@/types/ChatMsg'
import type ChatGPTMsg from '@/types/ChatGPTMsg'
import { formatChatToChatGPT } from '@/utils/messageUtils'

import ChatManager from '@/objects/chat/ChatManager'
const chatManager = new ChatManager()

const useChatStore = defineStore('chat', () => {
  const chatTags = ref<Tag[]>([])
  const chatTagSelection = ref<string[]>([])
  const chatGreeting = ref('Hello!')
  const chatEmoji = ref('✌️')
  const chatSent = ref('')
  const chatResponse = ref('')
  const chatSummary = ref('')
  const previousMessages = ref<ChatMsg[]>([])
  const previousImages = ref<string[]>([])
  const clearOnSubmit = ref(true)
  const isLoading = ref(false)
  const errorMessage = ref('')
  const baseMessages = ref<ChatGPTMsg[]>([
    {
      role: 'developer',
      content: `You are Jenny Everywhere, messaging the user through a cell phone from a different reality. That's not too weird for you, and for all you know, not weird for the user. Casually, and realistically converse with the user about who you are and what you are doing.`,
    },
    {
      role: 'developer',
      content:
        "Each response should follow these guidelines: - Incorporate a meta-textual summary of past events to maintain continuity between messages. - Keep the conversation relevant and interactive and driving toward a story telling experience. - 3-6 tags are sent with messages to relay intention and memory between you and user. [name:value] or [value] format - Build a short narrative scenes using the user's input and your previous summary. - Keep responses short, and engaging, like an SMS text message between acquaintances. - The Markdown structure should always look like this example (without <> symbols): \n\n## Body\n\n <an emoji>, <message content>\n\n## Tags\n\n[<keyword>], [<keyword>], [<keyword>:<value>], [<keyword>], ...etc \n\n## Summary\n\n<summary content>\n\n",
    },
    {
      role: 'developer',
      content: `After you have considered carefully the next choices you wish to make and present to the player, summarize key points of the conversation so far from what has been included in the messages and history. The summary is for you, not the play, so format it in a way that is easy for you to read and understand.`,
    },
    {
      role: 'developer',
      content: `The conversation summary and context so far is:
          ${chatSummary.value}
        `,
    },
    {
      role: 'developer',
      content: `The previous message sent to you was:
          ${previousMessages.value?.[previousMessages.value.length - 1]?.content}
        `,
    },
    {
      role: 'developer',
      content: `previous message sent by you was:
          ${chatResponse.value}
        `,
    },
    {
      role: 'user',
      content: chatSent.value,
      name: 'user',
    },
  ])

  async function sendGPTMessage(userInput?: string) {
    const messageToSend = userInput || chatSent.value
    if (!messageToSend.trim()) return

    isLoading.value = true

    const newMsg = {
      id: previousMessages.value.length,
      content: messageToSend,
      sender: 'user',
      timestamp: new Date(),
      emoji: extractEmoji(messageToSend),
    } as ChatMsg

    chatSent.value = messageToSend
    previousMessages.value.push(newMsg)
    const formattedMessage = formatChatToChatGPT(newMsg)

    return await chatGPTMessage(baseMessages.value.concat(formattedMessage))
  }

  async function chatGPTMessage(
    messagePayload: ChatGPTMsg[],
  ): Promise<{ response: string; tags: Tag[]; summary: string }> {
    try {
      const response = await chatManager.sendMessageToChatGPT(messagePayload)
      chatResponse.value = response.body
      chatSummary.value = response.summary
      chatTags.value = response.tags
      isLoading.value = false

      const replyMsg = {
        id: previousMessages.value.length,
        content: response.body,
        sender: 'system',
        timestamp: new Date(),
        emoji: extractEmoji(response.body),
      } as ChatMsg

      previousMessages.value.push(replyMsg)
      return { response: response.body, tags: response.tags, summary: response.summary }
    } catch (error) {
      errorMessage.value = 'An error occurred while contacting ChatGPT.'
      console.error(error)
      isLoading.value = false
      return { response: '', tags: [], summary: '' }
    }
  }

  function extractEmoji(text: string) {
    const emojiRegex = /\p{Emoji}/u
    const match = text.match(emojiRegex)
    return match ? match[0] : chatEmoji.value
  }

  return {
    baseMessages,
    chatTags,
    chatTagSelection,
    chatGreeting,
    chatEmoji,
    chatSent,
    chatResponse,
    chatSummary,
    previousMessages,
    previousImages,
    clearOnSubmit,
    isLoading,
    errorMessage,
    sendGPTMessage,
    extractEmoji,
  }
})

export default useChatStore
