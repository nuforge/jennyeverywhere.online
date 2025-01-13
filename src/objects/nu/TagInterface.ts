export default interface TagInterface {
  id: string
  name: string
  color: string
  icon: string
  value?: string | number | boolean
  space?: string
  stamp: Date
  toString(): string
}
