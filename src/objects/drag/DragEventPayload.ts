import Tag from '@/objects/nu/Tag'

export interface DragEventPayload {
  tag: Tag
  additionalData?: Record<string, unknown>
}
