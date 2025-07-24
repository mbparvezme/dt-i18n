// This file is the main entry point for your package.
// It should only export the core functionality.

import { DateUtils } from './core/DateUtils';

/**
 * A simple factory function that creates a new DateUtils instance.
 * @param date - Optional date to initialize with (string, number, or Date object).
 * @returns A new instance of DateUtils.
 */
function dt(date?: Date | string | number) {
  return new DateUtils(date);
}

export { dt, DateUtils };