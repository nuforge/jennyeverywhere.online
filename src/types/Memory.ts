import Tag from '@/objects/nu/Tag'

export interface Memory {
  id: string // Unique ID (UUID or hash)
  content: string // Text/content of the memory
  tags: Tag[] // Associated tags
  metadata?: {
    source?: string // URL or context where the memory was created
    timestamp?: Date // When the memory was stored
    personaId?: string // Associated AI persona
  }
}
