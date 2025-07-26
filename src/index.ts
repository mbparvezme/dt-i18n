import { DateUtils } from './core/DateUtils'
import { LocaleData } from './types'

/**
 * A simple factory function that creates a new DateUtils instance.
 * @param date - Optional date to initialize with (string, number, or Date object).
 * @returns A new instance of DateUtils.
 */
const dt = (date?: Date | string | number, locale?: LocaleData): DateUtils => {
  return new DateUtils(date, locale)
}

export { dt, DateUtils }