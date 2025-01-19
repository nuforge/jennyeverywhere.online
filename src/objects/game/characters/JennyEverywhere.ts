import Persona from '@/objects/Persona'

const JennyEverywhere = new Persona('Jenny Everywhere')

console.log('JennyEverywhere:', '"hello world"')
// STA - STAR TREK ADVENTURES

import json from '@/assets/personas/JennyEverywhere.json'

json.tags.forEach((tag) => {
  const strtag = tag.name !== null ? `${tag.space}:${tag.name}` : tag.name

  //JennyEverywhere.addLabel(tag.space, tag.color ?? '', tag.icon)
  JennyEverywhere.addLabel(strtag, tag.color ?? '', tag.icon)
})
export default JennyEverywhere
