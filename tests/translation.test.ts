import { describe, it, expect } from 'vitest';
import dt from '../src'

describe('translate', () => {
  it('should translate numbers to Bangla', () => {
    const result = dt.use('2023-01-01').formatDate('YYYY').translate('bn').value()
    expect(result).toBe('২০২৩')
  })

  it('should translate numbers to Hindi', () => {
    const result = dt.use('2023-01-01').formatDate('YYYY').translate('hi').value()
    expect(result).toBe('२०२३')
  })
})