import { describe, it, expect } from 'vitest'
import Tag from './NuTag'

describe('Tag', () => {
  it('should create a Tag instance with default values', () => {
    const tag = new Tag()
    expect(tag).toBeInstanceOf(Tag)
    expect(tag.name).toBe(tag.type)
    expect(tag.color).toBe('accent')
    expect(tag.icon).toBe('mdi-tag-outline')
  })

  it('should clean value correctly', () => {
    expect(Tag.cleanValue('  test  ')).toBe('test')
    expect(Tag.cleanValue(undefined)).toBe('')
  })

  it('should normalize tag name correctly', () => {
    expect(Tag.normalizeTagName('Test Tag')).toBe('test-tag')
  })

  it('should parse string correctly', () => {
    expect(Tag.parseString('space:label.value')).toEqual({
      space: 'space',
      label: 'label',
      value: 'value',
    })
    expect(Tag.parseString('label.value')).toEqual({ label: 'label', value: 'value' })
    expect(Tag.parseString('label')).toEqual({ label: 'label' })
  })

  it('should extract keywords correctly', () => {
    const input = 'This is a test string'
    const { individual, grouped } = Tag.extractKeywords(input)
    expect(individual).toEqual(['this', 'is', 'a', 'test', 'string'])
    expect(grouped).toContain('this is')
    expect(grouped).toContain('is a')
    expect(grouped).toContain('a test')
    expect(grouped).toContain('test string')
  })

  it('should extract scoped keywords correctly', () => {
    const input = 'space:label.value'
    const { space, label, value } = Tag.extractScopedKeywords(input)
    expect(space).toEqual(['space'])
    expect(label).toEqual(['label'])
    expect(value).toEqual(['value'])
  })

  it('should convert to string correctly', () => {
    const tag = new Tag('space:label.value')
    expect(tag.toString()).toBe('space:label.value')
  })

  it('should reconstruct string correctly', () => {
    const tag = new Tag('space:label.value')
    const result = tag.reconstructString({ space: 'space', name: 'label', value: 'value' })
    expect(result).toBe('space:label.value')
  })

  it('should convert attributes to tags correctly', () => {
    const tag = new Tag('space:label.value')
    const tags = tag.attributesToTags()
    expect(tags).toBeInstanceOf(Array)
    expect(tags.length).toBeGreaterThan(0)
    expect(tags[0]).toBeInstanceOf(Tag)
  })

  it('should set and get properties correctly', () => {
    const tag = new Tag()
    tag.name = 'newName'
    expect(tag.name).toBe('newName')
    tag.color = 'newColor'
    expect(tag.color).toBe('newColor')
    tag.icon = 'newIcon'
    expect(tag.icon).toBe('newIcon')
    tag.value = 'newValue'
    expect(tag.value).toBe('newValue')
    tag.namespace = 'newNamespace'
    expect(tag.namespace).toBe('newNamespace')
  })
})
