import Tag from '@/objects/NuTag'

class Physics {
  protected _tags: Tag[] = []
  protected _connections: [Tag, Tag][] = []

  constructor() {
    this._tags = []
    this._connections = []
  }

  addTag(tag: Tag) {
    this._tags.push(tag)
  }

  addConnection(tag1: Tag, tag2: Tag) {
    this._connections.push([tag1, tag2])
  }

  update(timeElapsed: number) {
    this._tags.forEach((tag) => {
      decayTag(tag, timeElapsed)
    })

    this._connections.forEach(([tag1, tag2]) => {
      // if (tag1.isTouching(tag2)) {
      const newTag = interactTags(tag1, tag2)
      console.log('interactTags', newTag)
      //   tag1.update(newTag);
      //   tag2.update(newTag);
      // }
    })

    this._tags.forEach((tag) => {
      preserveTag(tag)
    })

    this._connections.forEach(([tag1, tag2]) => {
      sharedPreservation(tag1, tag2.connectedTags)
    })
  }
}

// Example functions

function decayTag(tag: Tag, timeElapsed: number) {
  tag.hsl.saturation = Math.max(tag.hsl.saturation - timeElapsed * 0.01, 0)
  tag.hsl.lightness = Math.max(tag.hsl.lightness - timeElapsed * 0.01, 0)
}
function preserveTag(tag: Tag) {
  tag.hsl.saturation = Math.min(tag.hsl.saturation + 10, 100)
  tag.hsl.lightness = Math.min(tag.hsl.lightness + 10, 100)
}
function sharedPreservation(tag: Tag, connectedTags: Tag[]) {
  connectedTags.forEach((neighbor) => {
    neighbor.hsl.saturation = Math.min(neighbor.hsl.saturation + 5, 100)
    neighbor.hsl.lightness = Math.min(neighbor.hsl.lightness + 5, 100)
  })
}

function interactTags(tag1: Tag, tag2: Tag) {
  const result = { ...tag1 } // Clone tag1 for manipulation

  // Example: Green grows if "success" tag is encountered
  if (tag2.color === 'success') {
    result.rgb.g = Math.min(result.rgb.g + 20, 255)
  }

  // Example: Entropy reduces all channels
  if (tag2.color === 'error') {
    result.rgb.r -= 10
    result.rgb.g -= 10
    result.rgb.b -= 10
  }

  return result
}

export default Physics
