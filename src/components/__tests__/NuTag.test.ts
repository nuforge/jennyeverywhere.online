import { describe, it, expect } from 'vitest'
import Tag from '@/objects/nu/Tag'

describe('Tag', () => {
  it('should create a Tag instance with default values', () => {
    const tag = new Tag()
    expect(tag).toBeInstanceOf(Tag)
  })

  it('should clean value correctly', () => {
    expect(Tag.CleanString('  test  ')).toBe('test')
    expect(Tag.CleanString(undefined)).toBe('')
  })

  it('should normalize tag name correctly', () => {
    expect(Tag.normalizeTagName('Test Tag')).toBe('test-tag')
  })

  it('should parse string correctly', () => {
    expect(Tag.parseString('space:label.value')).toEqual({
      space: 'space',
      name: 'label.value',
    })
    expect(Tag.parseString('label.value')).toEqual({ name: 'label.value' })
    expect(Tag.parseString('label')).toEqual({ name: 'label' })
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
    const input = 'space:name'
    const scopedKeywords = Tag.extractScopedKeywords(input)
    expect(scopedKeywords).toEqual(['space', 'name'])
  })

  it('should handle empty string in normalizeTagName', () => {
    expect(Tag.normalizeTagName('')).toBe('')
  })

  it('should handle empty string in parseString', () => {
    expect(Tag.parseString('')).toEqual({ name: '' })
  })

  it('should handle invalid format in parseString', () => {
    expect(Tag.parseString('invalid:format:here')).toEqual({
      space: 'invalid',
      name: 'format:here',
    })
  })
})
