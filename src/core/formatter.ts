import type { LocaleData } from '../types/index'

/**
 * Formats a Date object into a string using a format string and locale data.
 * @param date - The Date object to format.
 * @param format - The format string with tokens.
 * @param locale - The locale data containing translations.
 * @returns The formatted and localized string.
 */
export function formatDateTime(date: Date, format: string, locale: LocaleData): string {
  const year = date.getFullYear() // 4-digit year
  const month = date.getMonth() // 0-11
  const dayOfMonth = date.getDate()
  const dayOfWeek = date.getDay() // 0-6 (Sun-Sat)
  const hours = date.getHours() // 0-23
  const minutes = date.getMinutes() // 0-59
  const seconds = date.getSeconds() // 0-59

  // Create a map of format tokens to their corresponding values.
  const tokens: { [key: string]: string } = {
    // Year
    YYYY: String(year), 
    YY: String(year).slice(-2),

    // Month
    MN: locale.months[month], // Full month name
    MM: String(month + 1).padStart(2, '0'), // Month as two digits
    M: String(month + 1), // Month as one digit
    // MS: locale.months[month].substring(0, 3), // Short month name Or add `monthsShort`

    // Day
    DN: locale.weekdays[dayOfWeek], // Full weekday name
    DD: String(dayOfMonth).padStart(2, '0'), // Days of the month as two digits
    D: String(dayOfMonth), // Days of the month as one digit 
    // DS: locale.weekdays[dayOfWeek].substring(0, 3), // Or add `weekdaysShort`

    // Hour
    HH: String(hours).padStart(2, '0'), // 24-hour - 2 digits
    H: String(hours), // 24-hour - 1 digit
    hh: String(hours % 12 || 12).padStart(2, '0'), // 12-hour - 2 digits
    h: String(hours % 12 || 12), // 12-hour - 1 digit

    // Minute
    mm: String(minutes).padStart(2, '0'), // Minutes as two digits
    m: String(minutes), // Minutes as one digit

    // Second
    ss: String(seconds).padStart(2, '0'), // Seconds as two digits
    s: String(seconds), // Seconds as one digit

    // AM/PM
    A: hours >= 12 ? 'PM' : 'AM', // Uppercase AM/PM
    a: hours >= 12 ? 'pm' : 'am', // Lowercase AM/PM
  }

  // Build a regex to find all supported tokens.
  const tokenRegex = /YYYY|YY|MN|MM|M|DN|DD|D|HH|H|hh|h|mm|m|ss|s|A|a/g

  // Replace tokens with their values.
  const formattedString = format.replace(tokenRegex, (match) => tokens[match] || match)

  /**
   * A reusable function to replace English digits with locale-specific digits.
   * @param input The string to process.
   * @param numbers The array of digit strings from the locale.
   * @returns The string with digits localized.
   */
  const  localizeDigits = (input: string | number, numbers: string[]): string => {
    const inputStr = String(input);
    // If the locale doesn't have custom numbers (like English), return early.
    if (!numbers || numbers.length === 0) {
      return inputStr;
    }
    return inputStr.replace(/\d/g, (d) => numbers[parseInt(d, 10)]);
  }

  // Finally, call the function to translate any numbers in the resulting string.
  return localizeDigits(formattedString, locale.numbers);
}
