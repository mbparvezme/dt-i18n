import { describe, it, expect } from 'vitest';
import dt from '../src'

describe('formatTime', () => {
  it('should format time in 24-hour format', () => {
    const result = dt.use('2023-01-01T14:30:00').formatTime('HH:mm').value()
    expect(result).toBe('14:30')
  })

  it('should format time in 12-hour format', () => {
    const result = dt.use('2023-01-01T02:30:00').formatTime('hh:mm', false).value()
    expect(result).toBe('02:30')
  })
})
