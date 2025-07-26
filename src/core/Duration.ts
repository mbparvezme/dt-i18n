import type { TimeUnit } from '../types'

// Conversion constants from milliseconds
const MS_IN_SECOND = 1000
const MS_IN_MINUTE = MS_IN_SECOND * 60
const MS_IN_HOUR = MS_IN_MINUTE * 60
const MS_IN_DAY = MS_IN_HOUR * 24
const MS_IN_YEAR = MS_IN_DAY * 365.25 // Considering leap years

export class Duration {
  private milliseconds: number

  constructor(milliseconds: number) {
    this.milliseconds = milliseconds
  }

  /**
   * Gets the duration in a specific unit of time.
   * @param unit The unit to get the duration in (e.g., 'days', 'hours').
   * @returns The duration as a number.
   */
  as(unit: TimeUnit): number {
    switch (unit) {
      case 'second': case 'seconds': return this.milliseconds / MS_IN_SECOND
      case 'minute': case 'minutes': return this.milliseconds / MS_IN_MINUTE
      case 'hour': case 'hours': return this.milliseconds / MS_IN_HOUR
      case 'day': case 'days': return this.milliseconds / MS_IN_DAY
      // Note: Months are tricky due to variable lengths. This is a simple approximation.
      case 'month': case 'months': return this.milliseconds / (MS_IN_YEAR / 12)
      case 'year': case 'years': return this.milliseconds / MS_IN_YEAR
      default: return this.milliseconds
    }
  }
}