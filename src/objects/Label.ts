import Tag from './tags/Tag'

class Label extends Tag {
  constructor(name: string, color?: string, icon?: string) {
    super(name, color, icon)
  }

  static cleanLabel = (text: string) => {
    return text.toString().trim()
  }
}

export default Label
