import { describe, it, expect } from 'vitest'
import dt from '../src'

describe('formatDate', () => {
  it('should format current date as YYYY-MM-DD', () => {
    const result = dt.formatDate('YYYY-MM-DD').value()
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('should format given date correctly', () => {
    const result = dt.use('2023-01-01').formatDate('YYYY/MM/DD').value()
    expect(result).toBe('2023/01/01')
  })
})