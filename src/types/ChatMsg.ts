import type Msg from '@/types/Msg'
import Tag from '@/objects/nu/Tag'

export default interface ChatMsg extends Msg {
  role?: 'developer' | 'user' | 'assistant' | 'system' | 'tool'
  emoji?: string
  tags?: Tag[]

  // Message interface-based properties
  // id: number
  // content: string
  // timestamp: Date
  // sender?: string
}
