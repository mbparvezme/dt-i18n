import { DateUtils } from './DateUtils'
import { Duration } from './Duration'

export class Interval {
  public start: DateUtils
  public end: DateUtils

  constructor(start: DateUtils, end: DateUtils) {
    // Ensure start is always before end
    if (start.isAfter(end)) {
      this.start = end
      this.end = start
    } else {
      this.start = start
      this.end = end
    }
  }

  /**
   * Checks if a given date is within the interval (inclusive).
   * @param date The date to check.
   * @returns True if the date is within the interval.
   */
  contains(date: Date | string | number | DateUtils): boolean {
    const startTime = this.start.toDate().getTime()
    const endTime = this.end.toDate().getTime()

    const checkTime = date instanceof DateUtils ? date.toDate().getTime() : new Date(date).getTime()

    return checkTime >= startTime && checkTime <= endTime
  }

  /**
   * Returns the duration of the interval.
   * @returns A Duration object representing the length of the interval.
   */
  toDuration(): Duration {
    return this.end.diff(this.start)
  }
}
