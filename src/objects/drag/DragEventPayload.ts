import Tag from '@/objects/nu/v1/ValTag'

export interface DragEventPayload {
  tag: Tag
  additionalData?: Record<string, unknown>
}
