import Tag from '@/objects/nu/NuTag'

export interface DragEventPayload {
  tag: Tag
  additionalData?: Record<string, unknown>
}
