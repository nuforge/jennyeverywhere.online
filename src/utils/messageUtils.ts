import type ChatGPTMsg from '@/types/ChatGPTMsg'
import type Message from '@/types/Msg'

export function createMessagePayload(
  messages: { role: 'developer' | 'user' | 'assistant' | 'system' | 'tool'; content: string }[],
): ChatGPTMsg[] {
  return messages.map((msg) => ({
    content: msg.content,
    name: msg.role,
    role: msg.role as 'developer' | 'user' | 'assistant' | 'system' | 'tool',
  }))
}

export function formatChatToChatGPT(msg: Message): ChatGPTMsg {
  return {
    content: msg.content,
    name: msg.sender,
    role: msg.sender as 'developer' | 'user' | 'assistant' | 'system' | 'tool',
  }
}
