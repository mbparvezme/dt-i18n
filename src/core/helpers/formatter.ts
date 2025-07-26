import type { LocaleData } from '../../types'
import type { DateParts } from './date-parts'

// A reusable function to replace English digits with locale-specific digits.
function localizeDigits(input: string | number, numbers: string[]): string {
  const inputStr = String(input)
  if (!numbers || numbers.length === 0) {
    return inputStr
  }
  return inputStr.replace(/\d/g, (d) => numbers[parseInt(d, 10)])
}

/**
 * Formats date parts into a string using a format string and locale data.
 * This function is now decoupled from the Date object and timezone logic.
 * @param dateParts An object containing the components of a date.
 * @param format The format string with tokens.
 * @param locale The locale data containing translations.
 * @returns The formatted and localized string.
 */
export function formatDateTime(dateParts: DateParts, format: string, locale: LocaleData): string {
  // Destructure the parts for easy access
  const { year, month, dayOfMonth, dayOfWeek, hours, minutes, seconds } = dateParts;


  const tokens: { [key: string]: string } = {
    // Year
    YYYY: String(year),
    YY: String(year).slice(-2),

    // Month
    MMMM: locale.months[month], // Full month name
    MM: String(month + 1).padStart(2, '0'), // Month as two digits
    M: String(month + 1), // Month as one digit
    // MS: locale.months[month].substring(0, 3), // Short month name Or add `monthsShort`

    // Day
    DDDD: locale.weekdays[dayOfWeek], // Full weekday name
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

  const tokenRegex = /YYYY|YY|MMMM|MM|M|DDDD|DD|D|HH|H|hh|h|mm|m|ss|s|A|a/g;
  const formattedString = format.replace(tokenRegex, (match) => tokens[match] || match);

  return localizeDigits(formattedString, locale.numbers);
}
