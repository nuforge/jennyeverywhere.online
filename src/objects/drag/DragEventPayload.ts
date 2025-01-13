import Tag from '@/objects/nu/v1/NuTag'

export interface DragEventPayload {
  tag: Tag
  additionalData?: Record<string, unknown>
}
