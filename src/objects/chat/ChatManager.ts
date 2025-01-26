import OpenAI from 'openai'
import Tag from '@/objects/nu/Tag'
import TagFactory from '@/objects/nu/TagFactory'
import type ChatGPTMsg from '@/types/ChatGPTMsg'

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY
const openai = new OpenAI({ apiKey: openaiApiKey, dangerouslyAllowBrowser: true })
const MESSAGE_PARSE_STRING = /## Body\n\n(.*?)\n\n## Tags\n\n(.*?)\n\n## Summary\n\n(.*)/s

export default class ChatManager {
  protected _models = ['gpt-4o-mini', 'gpt-4o']
  protected _roles = ['developer', 'user', 'assistant', 'system', 'tool']
  protected _stream = true
  protected _temperature = 0.7

  async sendMessageToChatGPT(
    messages: ChatGPTMsg[] | ChatGPTMsg,
  ): Promise<{ body: string; tags: Tag[]; summary: string }> {
    const messagePayload = Array.isArray(messages) ? messages : [messages]

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messagePayload, // Ensure correct type,
      stream: this._stream,
      temperature: this._temperature,
    })

    let streamedMessage = ''
    for await (const chunk of response) {
      streamedMessage += chunk.choices[0]?.delta?.content || ''
    }

    const [body, parsedTags, summary] = this.parseMarkdownResponse(streamedMessage)
    return { body, tags: parsedTags, summary }
  }

  parseMarkdownResponse(response: string): [string, Tag[], string] {
    const bodyMatch = response.match(MESSAGE_PARSE_STRING)

    if (!bodyMatch) return [response, [], '']

    const body = bodyMatch[1].trim()
    const tags = bodyMatch[2]
      .split(',')
      .map((tag) => TagFactory.create(tag.trim().replace('[', '').replace(']', '')))
    const summary = bodyMatch[3].trim()

    console.log('💬 Parsed Body:', body)
    console.log('🏷️ Parsed Tags:', tags)
    console.log('⭐ Parsed Summary:', summary)
    return [body, tags, summary]
  }

  get models() {
    return this._models
  }

  get roles() {
    return this._roles
  }
}
