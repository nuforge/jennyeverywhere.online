import Tag from '@/objects/nu/Tag'

export interface Item {
  tag: string
  id?: string
  value?: string | Tag
}
