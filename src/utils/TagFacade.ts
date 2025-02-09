import Tag from '@/objects/nu/Tag'
// src/utils/TagFacade.ts
export class TagFacade<T extends object> {
  constructor(private tag: Tag) {}

  as(): T {
    return Object.freeze({
      ...this.tag.allAttributes,
      id: this.tag.id,
      space: this.tag.space,
      name: this.tag.name,
    }) as T
  }
}

// Define strict interface for known types
// src/types/tagTypes.ts
export interface PersonaTag {
  id: string
  space: 'persona'
  name: string
  confidence: number
  traits: string[]
}

// USAGE
//  // In component
// const rawTag = new Tag('persona:ai_character');
// const personaTag = new TagFacade<PersonaTag>(rawTag).as();

// // Type-safe access
// console.log(personaTag.traits); // Autocompletes
