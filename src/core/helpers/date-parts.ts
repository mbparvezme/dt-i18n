// This interface defines the shape of the object that will hold our date components.
export interface DateParts {
  year: number;
  month: number; // 0-11
  dayOfMonth: number;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Gets the components of a date, optionally adjusted for a specific timezone.
 * This function is the core of our timezone logic.
 * @param date The input Date object.
 * @param timezone An optional IANA timezone string (e.g., 'America/New_York').
 * @returns An object containing the date parts.
 */
export function getDateParts(date: Date, timezone?: string): DateParts {
  // If no timezone is provided, we return the date parts from the user's local system time.
  if (!timezone) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      dayOfMonth: date.getDate(),
      dayOfWeek: date.getDay(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
  }

  // If a timezone is provided, use the Intl API to get the correct parts.
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour12: false,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long', // We need the weekday name to calculate the day of the week index
  });

  const parts = formatter.formatToParts(date);
  const partsMap = parts.reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {} as Record<string, string>);

  // The Intl API gives us a weekday name (e.g., "Saturday"). We need to convert it
  // back to a number (0-6) for our formatter to use.
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = weekdays.indexOf(partsMap.weekday);

  return {
    year: parseInt(partsMap.year, 10),
    month: parseInt(partsMap.month, 10) - 1, // Intl gives 1-12, we need 0-11
    dayOfMonth: parseInt(partsMap.day, 10),
    dayOfWeek: dayOfWeek,
    // Intl can sometimes return '24' for midnight, so we correct it to '0'.
    hours: parseInt(partsMap.hour, 10) === 24 ? 0 : parseInt(partsMap.hour, 10),
    minutes: parseInt(partsMap.minute, 10),
    seconds: parseInt(partsMap.second, 10),
  };
}
