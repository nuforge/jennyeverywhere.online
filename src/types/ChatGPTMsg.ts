export default interface ChatGPTMsg {
  content: string
  role: 'developer' | 'user' | 'assistant' | 'system' | 'tool'
  name?: string
}
