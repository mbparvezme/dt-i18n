import { formatDateTime } from './formatter';
import type { LocaleData } from '../types/index';
import en from '../locales/en'; // Keep English as a built-in default

/**
 * A utility class for formatting dates with a simple, synchronous API.
 */
export class DateUtils {
  private date: Date;
  // The current locale starts as English by default.
  private currentLocale: LocaleData = en;

  constructor(date?: Date | string | number) {
    const d = new Date(date ?? Date.now());
    this.date = isNaN(d.getTime()) ? new Date() : d;
  }

  /**
   * Sets the locale by passing the entire locale object.
   * @param localeObject - The imported locale object (e.g., bn, hi).
   * @returns The instance of DateUtils for chaining.
   */
  locale(localeObject: LocaleData): this {
    this.currentLocale = localeObject;
    return this;
  }

  /**
   * Formats the date using the currently set locale.
   * @param formatString - The string with format tokens (e.g., 'YYYY-MM-DD').
   * @returns The final formatted and localized date-time string.
   */
  format(formatString: string): string {
    return formatDateTime(this.date, formatString, this.currentLocale);
  }
}
